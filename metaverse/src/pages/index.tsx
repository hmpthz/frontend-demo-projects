import { Footer, Navbar } from '../components';
import { About, Explore, Feedback, GetStarted, Hero, Insights, WhatsNew, World } from '../sections';

export default function Home() {
  return (
    <div className='bg-primary-black overflow-hidden'>
      <Navbar />
      <Hero />
      <div className='relative'>
        <div className="gradient-02 z-0" />
        <div className="gradient-03 z-0" />
        <About />
        <Explore />
      </div>
      <div className='relative'>
        <div className="gradient-04 z-0" />
        <GetStarted />
        <WhatsNew />
      </div>
      <World />
      <div className='relative'>
        <div className="gradient-04 z-0" />
        <Insights />
        <Feedback />
      </div>
      <Footer />
    </div>
  );
}