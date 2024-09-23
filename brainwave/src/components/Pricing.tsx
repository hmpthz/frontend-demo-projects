import { smallSphere, stars } from "../assets";
import { pricing, type PriceItem } from "../contents";
import { LeftLine, RightLine } from "./design/Pricing";
import { Section } from "./Section";
import { Button } from "./ui/Button";
import { Heading } from "./ui/Heading";
import { ListItem } from "./ui/ListItem";
import { Tagline } from "./ui/Tagline";

export function Pricing() {
  return (
    <Section id="pricing" className="overflow-hidden">
      <div className="container">
        <div className="hidden lg:flex relative justify-center mb-[6.5rem]">
          <img src={smallSphere} alt="sphere" width={255} height={255} className="relative z-1" />
          <div className="absolute w-[60rem] position-center pointer-events-none">
            <img src={stars} alt="stars" className="w-full" />
          </div>
        </div>

        <Tagline className="md:justify-center mb-4">GET STARTED WITH BRAINWAVE</Tagline>
        <Heading className="md:text-center" title="Pay once, use forever" />

        <div className="relative">
          <div className="flex gap-4 max-lg:flex-wrap justify-center">
            {pricing.map(PricingCard)}
          </div>
          <LeftLine />
          <RightLine />
        </div>

        <a href="#placeholder" className="block mt-10 text-xs font-code font-bold uppercase text-center underline hover:no-underline tracking-wider">See the full details</a>
      </div>
    </Section>
  )
}

const PricingCard = (item: PriceItem) => {
  const colors: Record<string, string> = {'0':'text-color-2', '1':'text-color-1', '2':'text-color-3'};

  return (
    <div key={item.id} className="w-4/5 lg:w-auto px-6 even:py-16 odd:py-8 lg:odd:my-4 bg-n-8 border border-n-6 rounded-[2rem]">
      <h4 className={`h4 mb-4 ${colors[item.id]}`}>{item.title}</h4>

      <p className="body-2 min-h-[4rem] mb-3 text-n-1/50">{item.description}</p>

      <p className="h-[5.5rem] mb-6">
        {item.price && (
          <>
            <span className="h3">$</span>
            <span className="text-[5.5rem] leading-none font-bold align-middle">{item.price}</span>
          </>
        )}
      </p>

      <Button className="w-full mb-6" href={item.price ? '#pricing' : '#placeholder'} white={item.price != null}>
        {item.price ? 'Get started' : 'Contact us'}
      </Button>

      <ul>
        {item.features.map((text, index) => (
          <ListItem as="li" key={index} className="py-4 border-t border-n-6" text={text} />
        ))}
      </ul>
    </div>
  )
}