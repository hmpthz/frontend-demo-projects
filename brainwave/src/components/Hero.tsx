import { useRef, type RefObject } from 'react';
import { Section } from './Section';
import { curve, heroBackground, loading, notification1, robot } from '../assets';
import { Button } from './ui/Button';
import { BackgroundCircles, BottomLine, Gradient } from './design/Hero';
import { companyLogos, heroIcons, notificationImages } from '../contents';
import { ScrollParallax } from 'react-just-parallax';
import { Generating } from './ui/Generating';

export function Hero() {
  const parallaxRef = useRef<HTMLDivElement>(null);

  return (
    <Section id='hero' paddingTwd='pt-[12rem]' className='-mt-[5.25rem]' crossesTwd='lg:translate-y-[5.25rem]'>
      <div className='container relative' ref={parallaxRef}>
        <Starter />
        {Show(parallaxRef)}
        <Companies />
      </div>
      <BottomLine />
    </Section>
  )
}

const Starter = () => (
  <div id='hero/starter' className='relative z-1 max-w-5xl mx-auto text-center mb-16 md:mb-20 lg:mb-24'>
    <h1 className='h1 mb-6'>
      Explore the Possibilities of&nbsp;AI&nbsp;Chatting with&nbsp;
      <span className='inline-block relative'>
        Brainwave
        <img src={curve} className='absolute top-full left-0 w-full xl:-mt-2' alt='curve'></img>
      </span>
    </h1>
    <p className='body-1 max-w-3xl mx-auto mb-6 lg:mb-8 text-n-2'>Unleash the power of AI within Brainwave. Upgrade your productivity with Brainwave, the open AI chat app.</p>
    <Button href='/pricing' white className='px-7'>GET STARTED</Button>
  </div>
)

const Show = (parallaxRef: RefObject<HTMLElement>) => (
  <div id='hero/show' className="relative max-w-sm md:max-w-5xl mx-auto xl:mb-24">
    <div className="relative z-1 p-0.5 rounded-2xl bg-conic-gradient">
      <div className="h-[1.4rem] bg-n-10 rounded-t-[0.9rem]" />
      <div className="aspect-[33/40] md:aspect-[688/490] lg:aspect-[1024/490] rounded-b-[0.9rem] overflow-hidden">
        <img
          src={robot}
          className="w-full scale-[1.7] md:scale-[1] translate-y-[8%] md:-translate-y-[10%] lg:-translate-y-[23%]"
          alt="AI"
        />
      </div>
      <Gradient />
      <Generating className='bottom-14 md:bottom-16 w-5/6 md:w-[31rem]' />
      <ScrollParallax isAbsolutelyPositioned>
        <IconsPanel />
        <CodeGen />
      </ScrollParallax>
    </div>

    <div className="absolute -z-1 -top-[54%] md:-top-[46%] lg:-top-[104%] left-1/2 w-[234%] md:w-[138%] -translate-x-1/2">
      <img
        src={heroBackground}
        className="w-full"
        alt="hero"
      />
    </div>
    <BackgroundCircles parallaxRef={parallaxRef} />
  </div>
)

const IconsPanel = () => (
  <ul className='hidden lg:flex absolute -left-10 xl:-left-[5.5rem] bottom-[7.5rem] px-1 py-1 bg-n-9/40 backdrop-blur border border-n-1/10 rounded-2xl'>
    {heroIcons.map((item, index) => (
      <li className='p-5' key={index}>
        <img src={item} width={24} height={24} alt={item} />
      </li>
    ))}
  </ul>
)

const CodeGen = () => (
  <div className='hidden lg:flex absolute lg:-right-12 xl:-right-[5.5rem] bottom-[11rem] w-[18rem] p-4 gap-5 bg-n-9/40 backdrop-blur border-n-1/10 border rounded-2xl'>
    <img src={notification1} alt="code-gen" width={64} height={64} className='rounded-xl' />

    <div className='flex-grow'>
      <h6 className="h6">Code generation</h6>
      <div className='flex mt-1 justify-between'>
        <div>
          {notificationImages.map((item, index) => (
            <img key={index} src={item} alt={item} width={20} height={20} className='inline rounded-full mr-1' />
          ))}
        </div>
        <p className="body-2 text-n-13">1m ago</p>
      </div>
    </div>
  </div>
)

const Companies = () => (
  <div className='relative mt-20'>
    <h5 className='tagline text-center mb-6 text-n-1/50'>
      HELPING PEOPLE CREATE BEAUTIFUL CONTENT AT
    </h5>
    <ul className='flex justify-evenly items-center flex-wrap py-4 md:py-6'>
      {companyLogos.map((item, index) => (
        <li key={index} className='my-2'>
          <img src={item} alt={item} className='max-md:w-4/5' />
        </li>
      ))}
    </ul>
  </div>
)