import { BrowserRouter } from 'react-router-dom'
import ButtonGradient from './assets/svg/ButtonGradient'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Benefits } from './components/Benefits'
import { Collaboration } from './components/Collaboration'
import { Services } from './components/Services'


export function App() {
  return (
    <BrowserRouter>
      <div id='app' className='pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden'>
        <Header />
        <Hero />
        <Benefits />
        <Collaboration />
        <Services />
      </div>
      <ButtonGradient />
    </BrowserRouter>
  )
}