import { brainwaveSymbol, check } from "../assets";
import { collabApps, collabContent, collabText } from "../contents";
import { LeftCurve, RightCurve } from "./design/Collaboration";
import { Section } from "./Section";
import { Button } from "./ui/Button";

export function Collaboration() {
  return (
    <Section id='collaboration' className="" crossesTwd="a">
      <div className="container relative lg:flex">
        <LeftPart />
        <RightPart />
      </div>
    </Section>
  )
}

const LeftPart = () => (
  <div className="max-w-[25rem]">
    <h2 className="h2 mb-4 md:mb-8">AI Chat App for seamless collaboration</h2>
    <ul className="max-w-[22rem] mb-10 md:mb-14">
      {collabContent.map((item) => (
        <li className="mb-3 py-3" key={item.id}>
          <p>
            <img className="inline align-middle" src={check} width={24} height={24} alt="check" />
            <h6 className="inline body-2 ml-5">{item.title}</h6>
          </p>
          {item.text && (
            <p className="body-2 mt-3 text-n-4">{item.text}</p>
          )}
        </li>
      ))}
    </ul>

    <Button className="w-32">Try it now</Button>
  </div>
);

const RightPart = () => (
  <div className="mt-10 lg:mt-4 lg:ml-auto xl:w-[38rem]">
    <p className="body-2 mb-8 text-n-4 md:mb-16 lg:mb-32 w-4/5 lg:w-[22rem]">
      {collabText}
    </p>
    <div className="relative mx-auto w-[22rem] h-[22rem]">
      <div className="absolute w-full h-full border border-n-5 rounded-full" />
      <div className="absolute position-center w-60 h-60 border border-n-5 rounded-full" />
      <div className="absolute position-center w-[6rem] h-[6rem] p-[0.2rem] rounded-full bg-conic-gradient">
        <div className="flex w-full h-full rounded-full bg-n-8">
          <img src={brainwaveSymbol} width={48} height={48} className="m-auto" alt="brainwave" />
        </div>
      </div>

      <ul className="">
        {collabApps.map((item, index) => (
          <li key={item.id} className={`absolute top-0 left-1/2 h-1/2 -ml-[1.6rem] origin-bottom rotate-${index * 45}`}>
            <div className={`relative flex -top-4 w-[3.2rem] h-[3.2rem] bg-n-7 border border-n-1/30 rounded-xl -rotate-${index * 45}`}>
              <img className="m-auto" width={item.width} height={item.height} src={item.icon} alt={item.title} />
            </div>
          </li>
        ))}
      </ul>
      <LeftCurve />
      <RightCurve />
    </div>
  </div>
)