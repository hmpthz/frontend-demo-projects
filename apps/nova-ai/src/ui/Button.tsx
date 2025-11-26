import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  className = '',
  ...props
}) => {
  const baseStyles =
    'font-mono uppercase tracking-wider transition-all duration-200 rounded-none border focus:outline-none focus:ring-1 focus:ring-nova-pink';

  const variants = {
    primary:
      'bg-nova-pink border-nova-pink text-black hover:bg-transparent hover:text-nova-pink hover:shadow-[0_0_15px_rgba(255,0,85,0.4)]',
    outline:
      'bg-transparent border-white/20 text-white hover:border-nova-pink hover:text-nova-pink',
    ghost: 'bg-transparent border-transparent text-gray-400 hover:text-white',
  };

  const sizes = {
    sm: 'px-4 py-2 text-xs',
    md: 'px-6 py-3 text-sm',
    lg: 'px-8 py-4 text-base font-bold',
  };

  return (
    <button className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`} {...props}>
      {children}
    </button>
  );
};
