import { Link, NavLink } from 'react-router-dom';
import { links } from '../utils/constants';
// import { FaBars } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import Sidebar from './Sidebar';
import { logo } from '../assets';

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  const toggleNav = () => {
    setIsMobile(!isMobile);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={`z-20  w-full h-[4.5rem] hover fixed py-2 bg-primary ${
        scrolling ? 'bg-primary text-lighter' : ''
      }`}
    >
      <nav className='container flex  justify-between items-center w-full mt-[-3.2rem] text-lighter'>
        {/* Logo */}
        <Link to='/'>
          <img src={logo} alt='logo' className='w-[150px] h-[150px] ' />
        </Link>
        {/* links */}
        <ul className='flex gap-4 justify-center items-center max-lg:hidden  '>
          {links.map((link) => {
            const { label, path } = link;
            return (
              <NavLink to={path} key={path}>
                <li>{label}</li>
              </NavLink>
            );
          })}
          <NavLink to='/register' className='text-accent'>
            <p>Sign In </p>
          </NavLink>
        </ul>
        {/* <button className='text-[1.6rem]   hidden max-lg:block'>
          <FaBars />
        </button> */}{' '}
        {/* <button className='text-[1.6rem]   hidden max-lg:block'>
          <FaBars />
        </button> */}
        <div className='text-[1.6rem]   hidden max-lg:block'>
          <Sidebar />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
