import React, { useEffect, useRef, useState } from 'react';

/**
 * Canvas Configuration
 * Tweak these values to adjust the visual style of the background.
 */
const CANVAS_CONFIG = {
  background: {
    color: '#050505', // The deepest background layer color
  },
  radiance: {
    // Colors used for the floating glowing orbs
    colors: ['#ff0055', '#8B0000', '#4B0082', '#800080', '#0000a1'],
    count: 6, // How many distinct glowing blobs exist
    speed: 1.1, // Maximum movement speed of the blobs
    radius: {
      min: 400, // Minimum size of a blob
      max: 600, // Maximum size of a blob
    },
    pulse: {
      speedMin: 0.0015, // Minimum breathing speed
      speedMax: 0.003, // Maximum breathing speed
      intensity: 0.25, // How much the size fluctuates (percentage)
    },
    opacity: {
      center: '3A', // Hex alpha for center
      edge: '1A', // Hex alpha for edge
    },
  },
  particles: {
    count: {
      mobile: 30, // Number of particles on small screens
      desktop: 60, // Number of particles on large screens
    },
    speed: 0.3, // Base movement speed
    size: {
      min: 0.6, // Minimum particle radius
      max: 2.4, // Maximum particle radius
    },
    colors: {
      default: 'rgba(255, 255, 255, 0.5)', // Idle particle color
      active: '#ff0055', // Color when near mouse
    },
  },
  connections: {
    distance: 140, // Max distance to draw a line between particles
    width: 1, // Line width
    colors: {
      default: 'rgba(255, 255, 255, 0.15)', // Idle line color
      active: 'rgba(255, 0, 85, 0.5)', // Line color when near mouse
    },
    dataPacket: {
      speed: 0.001, // How fast data dots travel along lines
      size: 1.5, // Size of the data dot
      activeSize: 2, // Size when near mouse
    },
  },
  grid: {
    enabled: true,
    size: 60, // Pixel spacing between grid lines
    color: 'rgba(255, 255, 255, 0.03)', // Very subtle grid color
  },
  interaction: {
    radius: 300, // Radius of mouse influence
    repelForce: 1.5, // How strongly particles run away from mouse
    spotlight: {
      enabled: true,
      radius: 300,
      colorStart: 'rgba(255, 255, 255, 0.1)',
      colorEnd: 'transparent',
    },
  },
};

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
}

interface RadianceOrb {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  color: string;
  pulseSpeed: number;
  pulseOffset: number;
}

export const CanvasBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [resizeKey, setResizeKey] = useState(0);

  // Manual debounce implementation to avoid external dependencies causing load errors
  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout>;

    const handleResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setResizeKey((prev) => prev + 1);
      }, 200);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(timeoutId);
    };
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];
    let orbs: RadianceOrb[] = [];
    const mouse = { x: -1000, y: -1000 };

    const initScene = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      // Init Particles
      particles = [];
      const pCount =
        window.innerWidth < 768
          ? CANVAS_CONFIG.particles.count.mobile
          : CANVAS_CONFIG.particles.count.desktop;

      for (let i = 0; i < pCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * CANVAS_CONFIG.particles.speed,
          vy: (Math.random() - 0.5) * CANVAS_CONFIG.particles.speed,
          size:
            Math.random() * (CANVAS_CONFIG.particles.size.max - CANVAS_CONFIG.particles.size.min) +
            CANVAS_CONFIG.particles.size.min,
        });
      }

      // Init Radiance Orbs
      orbs = [];
      for (let i = 0; i < CANVAS_CONFIG.radiance.count; i++) {
        orbs.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * CANVAS_CONFIG.radiance.speed,
          vy: (Math.random() - 0.5) * CANVAS_CONFIG.radiance.speed,
          radius:
            Math.random() *
              (CANVAS_CONFIG.radiance.radius.max - CANVAS_CONFIG.radiance.radius.min) +
            CANVAS_CONFIG.radiance.radius.min,
          color:
            CANVAS_CONFIG.radiance.colors[
              Math.floor(Math.random() * CANVAS_CONFIG.radiance.colors.length)
            ],
          pulseSpeed:
            CANVAS_CONFIG.radiance.pulse.speedMin +
            Math.random() *
              (CANVAS_CONFIG.radiance.pulse.speedMax - CANVAS_CONFIG.radiance.pulse.speedMin),
          pulseOffset: Math.random() * Math.PI * 2,
        });
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const draw = () => {
      const time = Date.now();

      // 1. Fill Background
      ctx.fillStyle = CANVAS_CONFIG.background.color;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // 2. Draw Radiance Orbs (Background Glow)
      ctx.globalCompositeOperation = 'screen'; // Blending mode for glow

      orbs.forEach((orb) => {
        // Update Position
        orb.x += orb.vx;
        orb.y += orb.vy;

        // Bounce off walls
        if (orb.x < -orb.radius || orb.x > canvas.width + orb.radius) orb.vx *= -1;
        if (orb.y < -orb.radius || orb.y > canvas.height + orb.radius) orb.vy *= -1;

        // Pulse Effect
        const pulse =
          Math.sin(time * orb.pulseSpeed + orb.pulseOffset) *
            CANVAS_CONFIG.radiance.pulse.intensity +
          1;
        const currentRadius = orb.radius * pulse;

        // Draw Gradient
        const gradient = ctx.createRadialGradient(orb.x, orb.y, 0, orb.x, orb.y, currentRadius);

        // Use configured opacity
        gradient.addColorStop(0, `${orb.color}${CANVAS_CONFIG.radiance.opacity.center}`);
        gradient.addColorStop(0.5, `${orb.color}${CANVAS_CONFIG.radiance.opacity.edge}`);
        gradient.addColorStop(1, 'transparent');

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(orb.x, orb.y, currentRadius, 0, Math.PI * 2);
        ctx.fill();
      });

      // Reset Composite Operation for standard drawing
      ctx.globalCompositeOperation = 'source-over';

      // 3. Tech Grid Background (Subtle overlay)
      if (CANVAS_CONFIG.grid.enabled) {
        ctx.strokeStyle = CANVAS_CONFIG.grid.color;
        ctx.lineWidth = 1;

        // Vertical lines
        for (let x = 0; x < canvas.width; x += CANVAS_CONFIG.grid.size) {
          ctx.beginPath();
          ctx.moveTo(x, 0);
          ctx.lineTo(x, canvas.height);
          ctx.stroke();
        }
        // Horizontal lines
        for (let y = 0; y < canvas.height; y += CANVAS_CONFIG.grid.size) {
          ctx.beginPath();
          ctx.moveTo(0, y);
          ctx.lineTo(canvas.width, y);
          ctx.stroke();
        }
      }

      // 4. Particles & Connections
      particles.forEach((p, i) => {
        // Update position
        p.x += p.vx;
        p.y += p.vy;

        // Bounce
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        // Mouse Interaction (Repel)
        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const isNearMouse = dist < CANVAS_CONFIG.interaction.radius;

        if (isNearMouse) {
          const angle = Math.atan2(dy, dx);
          const force =
            (CANVAS_CONFIG.interaction.radius - dist) / CANVAS_CONFIG.interaction.radius;
          p.x -= Math.cos(angle) * force * CANVAS_CONFIG.interaction.repelForce;
          p.y -= Math.sin(angle) * force * CANVAS_CONFIG.interaction.repelForce;
        }

        // Draw Node
        ctx.fillStyle = isNearMouse
          ? CANVAS_CONFIG.particles.colors.active
          : CANVAS_CONFIG.particles.colors.default;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();

        // Connections
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const pdx = p.x - p2.x;
          const pdy = p.y - p2.y;
          const pdist = Math.sqrt(pdx * pdx + pdy * pdy);

          if (pdist < CANVAS_CONFIG.connections.distance) {
            const opacity = 1 - pdist / CANVAS_CONFIG.connections.distance;

            ctx.beginPath();
            if (isNearMouse) {
              // Hot connections near mouse
              // Need to extract r,g,b from string to apply variable opacity?
              // For simplicity, we hardcode the structure in config or use simple string concat if format allows
              // Since config uses full rgba string, we'll just set strokeStyle directly for now or make opacity dynamic
              // To keep it simple with the config string, we use the config value.
              ctx.strokeStyle = CANVAS_CONFIG.connections.colors.active;
              // Note: Active color in config is 0.8 opacity.
            } else {
              // Cool background connections
              // We need dynamic opacity based on distance here.
              // Using a fixed base white string and appending opacity
              ctx.strokeStyle = `rgba(255, 255, 255, ${opacity * 0.15})`;
            }
            ctx.lineWidth = CANVAS_CONFIG.connections.width;
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();

            // Data Packet (Pulse Effect along lines)
            const speed = 0.5 + ((i + j) % 3) * 0.2;
            const offset = (i * j) % 10;
            // Time scale adjusted by config
            const packetT =
              (time * CANVAS_CONFIG.connections.dataPacket.speed * speed + offset) % 3;

            if (packetT >= 0 && packetT <= 1) {
              const packetX = p.x + (p2.x - p.x) * packetT;
              const packetY = p.y + (p2.y - p.y) * packetT;

              ctx.fillStyle = isNearMouse ? '#ffffff' : CANVAS_CONFIG.connections.colors.active;
              ctx.beginPath();
              const pktSize = isNearMouse
                ? CANVAS_CONFIG.connections.dataPacket.activeSize
                : CANVAS_CONFIG.connections.dataPacket.size;
              ctx.arc(packetX, packetY, pktSize, 0, Math.PI * 2);
              ctx.fill();
            }
          }
        }
      });

      // 5. Mouse Spotlight (Extra brightness on top)
      if (CANVAS_CONFIG.interaction.spotlight.enabled && mouse.x !== -1000) {
        ctx.globalCompositeOperation = 'screen';
        const mouseGrad = ctx.createRadialGradient(
          mouse.x,
          mouse.y,
          0,
          mouse.x,
          mouse.y,
          CANVAS_CONFIG.interaction.spotlight.radius
        );
        mouseGrad.addColorStop(0, CANVAS_CONFIG.interaction.spotlight.colorStart);
        mouseGrad.addColorStop(1, CANVAS_CONFIG.interaction.spotlight.colorEnd);
        ctx.fillStyle = mouseGrad;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.globalCompositeOperation = 'source-over';
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    initScene();
    window.addEventListener('mousemove', handleMouseMove);
    draw();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, [resizeKey]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full z-0"
      style={{ pointerEvents: 'none' }}
    />
  );
};
