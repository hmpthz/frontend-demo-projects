import Arrow from "../assets/svg/Arrow";
import ClipPath from "../assets/svg/ClipPath";
import { benefits, type Benefit } from "../contents";
import { GradientLight } from "./design/Benefits";
import { Section } from "./Section";
import { Heading } from "./ui/Heading";

export function Benefits() {
  return (
    <Section id="benefits" className="">
      <div className="container relative z-2">
        <Heading className="text-center md:max-w-md lg:max-w-2xl" title="Chat Smarter, Not Harder with Brainwave" />

        <div className="flex flex-wrap justify-center gap-10 mb-10">
          {benefits.map(BenefitCard)}
        </div>
        <ClipPath/>
      </div>
    </Section>
  )
}

const BenefitCard = (item: Benefit) => (
  <div key={item.id}
    className="relative bg-no-repeat bg-[length:100%_100%] max-w-[80%] sm:max-w-[24rem] min-h-[22rem] p-[2.4rem]"
    style={{ backgroundImage: `url(${item.backgroundUrl})` }}>

    <div className="relative flex flex-col h-full z-2 pointer-events-none">
      <h5 className="h5 mb-5">{item.title}</h5>
      <p className="body-2 mb-6 text-n-3">{item.text}</p>
      <div className="relative mt-auto">
        <img src={item.iconUrl} width={48} height={48} alt={item.title} />
        <p className="absolute top-3 right-0 font-code text-sm font-bold text-n-2 uppercase tracking-wider">
          Explore more
          <Arrow />
        </p>
      </div>
    </div>

    {item.light && <GradientLight zTwd='z-0' />}

    <div className="absolute inset-0.5 bg-n-8 z-1"
      style={{ clipPath: "url(#benefits-clip)" }}>
      <div className="absolute inset-0 opacity-0 transition-opacity hover:opacity-20">
        {item.imageUrl && (
          <img src={item.imageUrl} width={380} height={362} alt={item.title}
            className="w-full h-full object-cover" />
        )}
      </div>
    </div>
  </div>
)