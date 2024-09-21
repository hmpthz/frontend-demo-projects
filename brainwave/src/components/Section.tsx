import SectionSvg from "../assets/svg/SectionSvg"

interface SectionProps extends ChildrenProps {
  className: string,
  id: string,
  crossesTwd?: string,
  paddingTwd?: string
}

export function Section({ className, id, crossesTwd, paddingTwd, children }: SectionProps) {
  const defaultPaddingTwd = `py-10 ${crossesTwd ? 'lg:py-32 xl:py-40' : 'lg:py-16 xl:py-20'}`;
  const Cross = () => (
    <>
      <div className={`hidden lg:block absolute top-0 left-8 right-8 xl:left-11 xl:right-11 h-0.5 bg-stroke-1 pointer-events-none ${crossesTwd || ''}`}></div>
      <SectionSvg crossesOffset={crossesTwd}/>
    </>
  );

  return (
    <div id={id} className={`relative ${paddingTwd || defaultPaddingTwd} ${className}`}>
      {children}

      <div className='hidden md:block absolute top-0 left-5 lg:left-8 xl:left-12 w-0.5 h-full bg-stroke-1 pointer-events-none'></div>
      <div className='hidden md:block absolute top-0 right-5 lg:right-8 xl:right-12 w-0.5 h-full bg-stroke-1 pointer-events-none'></div>

      {crossesTwd && Cross()}
    </div>
  )
}