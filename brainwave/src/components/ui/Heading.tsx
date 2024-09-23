import Brackets from '../../assets/svg/Brackets'

interface HeadingProps extends ClassProps {
  title: string
  text?: string
}

export function Heading({ className, title, text }: HeadingProps) {
  return (
    <div className={`mx-auto mb-12 lg:mb-20 ${className}`}>
      <h2 className='h2'>{title}</h2>
      {text && (<p className="body-2 mt-4 text-n-4">{text}</p>)}
    </div>
  );
}