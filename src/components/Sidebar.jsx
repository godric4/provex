import { useEffect, useRef, useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { links } from '../utils/constants';

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const navbarRef = useRef(null);

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
            <ul className=' bg-primary top-[-2.5rem]  absolute pt-20 h-[100vh] text-left w-[250px]'>
              {links.map((link) => {
                const { label, path } = link;

                return (
                  <li key={label} className='px-6 pt-5 max-sm:text-[1.2rem]'>
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
