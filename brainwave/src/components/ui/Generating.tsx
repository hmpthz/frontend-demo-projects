import { loading } from "../../assets";

export function Generating({ className }: ClassProps) {
  return (<div className={`absolute left-1/2 -translate-x-1/2 text-base px-6 py-4 bg-n-8/80 rounded-[1.7rem] ${className}`}>
    <img src={loading} alt='loading' className='inline w-5 h-5 mr-5 animate-spin' />
    AI is generating
  </div>);
}