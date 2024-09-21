import { BrowserRouter } from 'react-router-dom'
import ButtonGradient from './assets/svg/ButtonGradient'
import { Header } from './components/Header'
import { Hero } from './components/Hero'


export function App() {
  return (
    <BrowserRouter>
      <div id='app' className='pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden'>
        <Header/>
        <Hero/>
      </div>
      <ButtonGradient/>
    </BrowserRouter>
  )
}