import { check } from "../../assets";

interface ListItemProps extends ClassProps {
  as?: keyof JSX.IntrinsicElements; // Allows any valid HTML element as root
  text: string
}

export function ListItem({ as: Element = 'div', text, className }: ListItemProps) {
  return (
    <Element className={className}>
      <img className="inline align-bottom" src={check} width={24} height={24} alt="check" />
      <h6 className="inline body-2 ml-5">{text}</h6>
    </Element>
  )
}