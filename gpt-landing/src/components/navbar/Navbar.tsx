import { useState } from 'react'
import './Navbar.css'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'
import { assets } from '../../assets'

const links: { href: string, text: string }[] = [
  { href: '#home', text: 'Home' },
  { href: '#wgpt', text: 'What is GPT?' },
  { href: '#possibility', text: 'Open AI' },
  { href: '#features', text: 'Case Studies' },
  { href: '#blog', text: 'Library' }
];

function Navbar() {
  const [isMenuOpened, setMenuOpened] = useState(false);
  const toggle = () => setMenuOpened(prev => !prev);

  return (
    <header className='navbar'>
      <div className='navbar-links'>

        <div className='navbar-links__logo'>
          <img src={assets.logoSVG} alt='logo' />
        </div>

        <nav className='navbar-links__container'>
          {links.map((item, index) => (
            <p><a key={index} href={item.href}>{item.text}</a></p>
          ))}
        </nav>
      </div>

      <div className='navbar-sign'>
        <p><a>Sign in</a></p>
        <button type='button'>Sign up</button>
      </div>

      <div className='navbar-menu'>
        {isMenuOpened
          ? <RiCloseLine color='white' size={27} onClick={toggle} />
          : <RiMenu3Line color='white' size={27} onClick={toggle} />
        }
        {isMenuOpened && <MobileMenu />}
      </div>
    </header>
  )
}

const MobileMenu = () => (
  <div className='navbar-menu__container scale-up-center'>
    <nav className='navbar-menu__container-links'>
      {links.map((item, index) => (
        <p><a key={index} href={item.href}>{item.text}</a></p>
      ))}

      <div className='navbar-menu__container-links-sign'>
        <p><a>Sign in</a></p>
        <button type='button'>Sign up</button>
      </div>
    </nav>
  </div>
)

export default Navbar