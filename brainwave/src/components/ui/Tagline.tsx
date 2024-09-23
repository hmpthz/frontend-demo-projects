import Brackets from "../../assets/svg/Brackets"

export function Tagline({ children, className }: ChildrenProps & ClassProps) {
  return (
    <p className={`tagline flex items-center ${className}`}>
      <Brackets className='' position='left' />
      <span className="mx-4 text-n-3">{children}</span>
      <Brackets className='' position='right' />
    </p>
  )
}