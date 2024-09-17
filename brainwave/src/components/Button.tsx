import ButtonSvg from "../assets/svg/ButtonSvg"

interface ButtonProps extends ChildrenProps {
  className: string,
  white: boolean,
  href?: string,
  onClick?: () => void,
}

export function Button({ className, children, white, href, onClick }: ButtonProps) {
  const buttonClasses = `button relative inline-flex justify-center items-center h-11 transition-colors hover:text-color-1 ${className} ${white ? 'text-n-8' : 'text-n-1'}`;
  const spanClasses = 'relative z-1';

  const btn = () => (
    <button className={buttonClasses}>
      <span className={spanClasses}>{children}</span>
      {ButtonSvg(white)}
    </button>
  );

  const link = () => (
    <a href={href} className={buttonClasses}>
      <span className={spanClasses}>{children}</span>
      {ButtonSvg(white)}
    </a>
  );

  return href ? link() : btn();
}