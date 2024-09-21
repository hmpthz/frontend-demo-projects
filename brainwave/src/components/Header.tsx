import { useLocation } from 'react-router-dom';
import { brainwave } from '../assets'
import { navigation, type NavItem } from '../contents';
import { Button } from './ui/Button';
import MenuSvg from '../assets/svg/MenuSvg';
import { HamburgerMenu } from './design/Header';
import { useState } from 'react';
import { disablePageScroll, enablePageScroll } from 'scroll-lock';

export function Header() {
  const loc = useLocation();
  const [isMenuOpned, setMenuOpened] = useState(false);

  return (
    <div className={`fixed top-0 left-0 w-full z-50 border-b border-n-6 lg:backdrop-blur-sm ${isMenuOpned ? 'bg-n-8' : 'bg-n-8/90 backdrop-blur-sm'}`}>
      <div className='flex items-center px-5 lg:px-8 xl:px-10 max-lg:py-4 justify-between'>
        <a className='block w-48 xl:mr-8' href='#hero'>
          <img src={brainwave} alt='brainwave' />
        </a>
        {Navigations(loc.hash, isMenuOpned, setMenuOpened)}
      </div>
    </div>
  );
}

const Navigations = (path: string, isMenuOpned: boolean, setMenuOpened: ReactSetState<boolean>) => (
  <>
    <nav className={`${isMenuOpned ? 'flex' : 'hidden'} lg:flex fixed lg:static top-20 left-0 right-0 bottom-0 bg-n-8 lg:bg-transparent lg:mx-auto`}>
      <div className='relative flex flex-col lg:flex-row items-center justify-center m-auto'>
        {navigation.map(item => NavLink(item, path, () => setMenuOpened(false)))}
      </div>
      <HamburgerMenu />
    </nav>

    <a href='#signup' className='hidden lg:block button text-n-1/50 transition-colors hover:text-n-1 mr-8'>
      New account
    </a>
    <Button href='#login' className='hidden lg:flex w-24'>
      Sign in
    </Button>
    <Button className='w-14 lg:hidden' onClick={() => setMenuOpened(prev => !prev)}>
      <MenuSvg openNavigation={isMenuOpned} />
    </Button>
  </>
);

const NavLink = (item: NavItem, path: string, onClick: () => void) => (
  <a key={item.id} href={item.url} onClick={onClick} className={`block ${item.onlyMobile ? 'lg:hidden' : ''} font-code text-2xl lg:text-sm uppercase text-n-1 ${item.url == path ? 'lg:text-n-1' : 'lg:text-n-1/50'} transition-colors hover:text-color-1 lg:hover:text-n-1 px-6 xl:px-12 py-6 md:py-8 lg:font-semibold lg:leading-5`}>
    {item.title}
  </a>
);