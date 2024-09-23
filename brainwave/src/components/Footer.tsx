import { socials } from "../contents";
import { Section } from "./Section";

export function Footer() {
  return (
    <Section id="footer" className="" crossesTwd="undefined" paddingTwd="px-0 py-10">
      <footer className="container flex max-sm:flex-col justify-center sm:justify-between items-center gap-10">
        <p className="caption text-n-4">{new Date().getFullYear()}. All rights reserved.</p>

        <ul className="flex gap-5 flex-wrap">
          {socials.map((item) => (
            <a key={item.id} href={item.url} target="_blank"
              className="flex justify-center items-center w-10 h-10 bg-n-7 hover:bg-n-5 rounded-full transition-colors" rel="noreferrer">
              <img src={item.iconUrl} alt={item.title} />
            </a>
          ))}
        </ul>
      </footer>
    </Section>
  )
}