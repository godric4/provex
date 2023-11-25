import { useEffect, useRef, useState } from 'react';
import { FaBars, FaCaretDown, FaTimes, FaUserCircle } from 'react-icons/fa';
import { Link, NavLink } from 'react-router-dom';
import { links } from '../utils/constants';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../features/user/UserSlice';

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const navbarRef = useRef(null);
  const { user } = useSelector((store) => store.user);
  const [showLogout, setShowLogout] = useState(false);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logoutUser());
    dispatch(closeSidebar());
  };

  const openSidebar = () => {
    setIsSidebarOpen(true);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  const handleOutsideClick = (event) => {
    if (navbarRef.current && !navbarRef.current.contains(event.target)) {
      setIsSidebarOpen(false);
    }
  };

  useEffect(() => {
    // Attach the click event listener to the document body
    document.addEventListener('click', handleOutsideClick);

    // Clean up the event listener when the component unmounts
    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  return (
    <aside className=''>
      <div className='sidebar relative ' ref={navbarRef}>
        {!isSidebarOpen ? (
          <button
            className='fixed top-[-0.8rem] z-20 right-[.5rem]'
            onClick={openSidebar}
          >
            <FaBars />
          </button>
        ) : (
          <>
            <button
              className='fixed z-20 top-[-0.8rem] right-[.5rem]'
              onClick={closeSidebar}
            >
              <FaTimes />
            </button>
            {/*  */}
            <ul className=' bg-primary top-[-2.5rem]  absolute pt-20 h-[100vh] text-left w-[250px] text-[1.2rem]'>
              {/*  */}
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
                      className={
                        showLogout ? 'dropdown show-dropdown' : 'dropdown'
                      }
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
              {/*  */}
              <NavLink
                to={user ? '/' : '/register'}
                className='text-accent ml-6'
                onClick={closeSidebar}
              >
                {user ? 'Dashboard' : 'Login'}
              </NavLink>
              {/*  */}
              {links.map((link) => {
                const { label, path } = link;

                return (
                  <li key={label} className='px-6 pt-5 pb-2 max-sm:text-[1rem]'>
                    <Link to={path} className='nav-link' onClick={closeSidebar}>
                      {label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </>
        )}
      </div>
    </aside>
  );
};

export default Sidebar;
