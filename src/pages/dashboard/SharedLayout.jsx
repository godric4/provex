import { Outlet } from 'react-router-dom';
import { Footer, Navbar, Sidebar } from '../../components';

const SharedLayout = () => {
  return (
    <>
      <Navbar />
      <main className='dashboard-page '>
        <Sidebar />
        <div className='outlet'>
          <Outlet />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default SharedLayout;
