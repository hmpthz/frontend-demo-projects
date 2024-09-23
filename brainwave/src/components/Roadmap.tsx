import { check2, grid, loading1 } from "../assets";
import { roadmap, type RoadMapItem } from "../contents";
import { Gradient } from "./design/Roadmap";
import { Section } from "./Section";
import { Button } from "./ui/Button";
import { Heading } from "./ui/Heading";
import { Tagline } from "./ui/Tagline";

export function Roadmap() {
  return (
    <Section id="roadmap" className="overflow-hidden" crossesTwd="undefined">
      <div className="container md:pb-10">
        <Tagline className="md:justify-center mb-4">Ready to get started</Tagline>
        <Heading className="md:text-center" title="What we're working on"></Heading>

        <div className="relative grid gap-6 justify-items-center md:grid-cols-2 md:gap-4 md:pb-[7rem]">
          {roadmap.map(RoadmapCard)}
          <Gradient />
        </div>

        <div className="text-center">
          <Button href="#roadmap" className="w-32 mt-12 md:mt-15 xl:mt-20">Our roadmap</Button>
        </div>
      </div>
    </Section>
  )
}

const RoadmapCard = (item: RoadMapItem, index: number) => {
  const status = item.status == 'done' ? 'Done' : 'In progress';

  return (
    <div key={item.id} className={`max-md:w-4/5 even:md:translate-y-[7rem] p-0.5 rounded-[2.5rem] ${item.colorful ? "bg-conic-gradient" : "bg-n-6"}`}>
      <div className="relative h-full p-8 bg-n-8 rounded-[2.4375rem] overflow-hidden xl:p-15">
        <div className="absolute top-0 left-0 max-w-full">
          <img className="w-full" src={grid} alt="Grid" />
        </div>

        <div className="relative z-1">
          <div className="flex items-center justify-between max-w-[27rem] mb-8 md:mb-20">
            <Tagline className="">{item.date}</Tagline>

            <div className="flex items-center px-4 py-1 bg-n-1 rounded text-n-8">
              <img className="mr-2.5" alt={status}
                src={item.status === "done" ? check2 : loading1} />
              <div className="tagline">{status}</div>
            </div>
          </div>

          <div className="mb-10 -my-10 -mx-15">
            <img className="w-full" src={item.imageUrl} alt={item.title} />
          </div>

          <h4 className="h4 mb-4">{item.title}</h4>
          <p className="body-2 text-n-4">{item.text}</p>
        </div>

      </div>
    </div>
  );
}