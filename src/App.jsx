import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {
  About,
  ErrorPage,
  Home,
  PricePlan,
  PropertiesPage,
  Register,
  Services,
  Contact,
} from './pages';
import { Footer, Navbar, Profile } from './components';

const App = () => {
  return (
    <main className='w-full h-full'>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/register' element={<Register />} />
          <Route path='/properties' element={<PropertiesPage />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/services' element={<Services />} />
          <Route path='/pricing' element={<PricePlan />} />
          <Route path='/' element={<Profile />} />
          <Route path='*' element={<ErrorPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </main>
  );
};

export default App;
