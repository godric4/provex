import { Link, NavLink } from 'react-router-dom';
import { links } from '../utils/constants';
// import { FaBars } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import Sidebar from './Sidebar';
import { logo } from '../assets';
import { FaCaretDown, FaUserCircle } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../features/user/UserSlice';
import { closeSidebar } from '../features/user/SidebarSlice';

const Navbar = () => {
  const { user } = useSelector((store) => store.user);
  const [isMobile, setIsMobile] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  const toggleNav = () => {
    setIsMobile(!isMobile);
  };

  const [showLogout, setShowLogout] = useState(false);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logoutUser());
    dispatch(closeSidebar());
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
        <Link to='/home'>
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
          {/*  */}
          {/* <div className='user-btn'>
            <div className='user-prop flex'>
              <button
                className='flex btn'
                onClick={() => setShowLogout(!showLogout)}
              >
                <FaUserCircle />
                <FaCaretDown />
              </button>
              <div
                className={showLogout ? 'dropdown show-dropdown' : 'dropdown'}
              >
                <button
                  type='button'
                  className='dropdown-btn'
                  onClick={handleLogout}
                >
                  logout
                </button>
              </div>
            </div>
          </div> */}

          <NavLink to={user ? '/' : '/register'} className='text-accent'>
            {user ? 'Dashboard' : 'Login'}
          </NavLink>
          {user ? (
            <div className='user-btn'>
              <div className='user-prop flex'>
                <button
                  className='flex btn'
                  onClick={() => setShowLogout(!showLogout)}
                >
                  <FaUserCircle />
                  <FaCaretDown />
                </button>
                <div
                  className={showLogout ? 'dropdown show-dropdown' : 'dropdown'}
                >
                  <button
                    type='button'
                    className='dropdown-btn'
                    onClick={handleLogout}
                  >
                    logout
                  </button>
                </div>
              </div>
            </div>
          ) : (
            ''
          )}
        </ul>

        <div className='text-[1.6rem]   hidden max-lg:block'>
          <Sidebar />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
