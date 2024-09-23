import { service1, service2, service3 } from "../assets";
import { brainwaveServices, brainwaveServicesIcons } from "../contents";
import { Gradient, PhotoChatMessage, VideoBar, VideoChatMessage } from "./design/Services";
import { Section } from "./Section";
import { Generating } from "./ui/Generating";
import { Heading } from "./ui/Heading";
import { ListItem } from "./ui/ListItem";

export function Services() {
  return (
    <Section id="services" className="">
      <div id="how-to-use" className="container">
        <Heading className="text-center" title="Generative AI made for creators." text="Brainwave unlocks the potential of AI-powered applications" />

        <div className="relative">
          <Block1 />
          <div className="grid grid-cols-1 lg:grid-cols-2 w-full gap-x-5">
            <Block2 />
            <Block3 />
          </div>

          <Gradient zTwd='-z-1' />
        </div>
      </div>
    </Section>
  )
}

const Block1 = () => (
  <div className="relative w-full flex items-center h-[39rem] xl:h-[46rem] mb-5 p-8 lg:p-20 border border-n-1/10 rounded-3xl overflow-hidden">

    <img src={service1} className="absolute z-0 top-0 left-0 w-full md:w-3/5 xl:w-auto h-full object-cover md:object-right pointer-events-none" alt="Smartest AI" />

    <div className="relative z-1 max-w-[17rem] ml-auto">
      <h4 className="h4 mb-4">Smartest AI</h4>
      <p className="body-2 mb-[3rem] text-n-3">Brainwave unlocks the potential of AI-powered applications</p>
      <ul className="body-2">
        {brainwaveServices.map((item, index) => (
          <ListItem as='li' key={index} className="py-4 border-t border-n-6" text={item} />
        ))}
      </ul>
    </div>

    <Generating className="bottom-5 md:bottom-10 w-5/6 md:w-3/4 lg:w-1/2 border border-n-1/15" />
  </div>
);

const Block2 = () => (
  <div className="relative min-h-[39rem] mb-5 border border-n-1/10 rounded-3xl overflow-hidden">
    <img src={service2} className="absolute z-0 top-0 left-0 w-full h-full object-cover pointer-events-none" alt="Robot" />
    <div className="absolute z-1 inset-0 w-full h-full bg-gradient-to-b from-n-8/0 to-n-8/90 pointer-events-none" />

    <div className="absolute z-2 px-8 lg:px-15 bottom-8">
      <h4 className="h4 mb-4">Photo editing</h4>
      <p className="body-2 mb-[3rem] text-n-3">Automatically enhance your photos using our AI app's photo editing feature. Try it now!</p>
    </div>

    <PhotoChatMessage zTwd='z-2' />
  </div>
)

const Block3 = () => (
  <div className="relative lg:min-h-[46rem] p-4 mb-5 rounded-3xl bg-n-7 overflow-hidden">
    <div className="px-4 xl:px-8 py-12">
      <h4 className="h4 mb-4">Video generation</h4>
      <p className="body-2 mb-[2rem] text-n-3">The world’s most powerful AI photo and video art generation engine. What will you create?</p>

      <ul className="flex items-center justify-between">
        {brainwaveServicesIcons.map(ServiceIcon)}
      </ul>
    </div>

    <div className="relative h-[20rem] md:h-[25rem] bg-n-8 rounded-xl">
      <img src={service3} alt="scary robot" className="w-full h-full object-cover" />
      <VideoChatMessage zTwd='z-1' />
      <VideoBar zTwd='z-1' />
    </div>
  </div>
)

const ServiceIcon = (item: string, index: number) => (
  <li key={index} className={`rounded-2xl ${index == 2 ? 'w-12 h-12 md:w-[4.5rem] md:h-[4.5rem] p-0.5 bg-conic-gradient' : 'w-10 h-10 md:w-15 md:h-15 bg-n-6'}`}>
    <div className={`flex h-full justify-center items-center ${index == 2 ? 'bg-n-7 rounded-2xl' : ''}`}>
      <img src={item} className="" />
    </div>
  </li>
)