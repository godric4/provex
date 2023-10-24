import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ErrorPage, Home, Register } from './pages';
import { Footer, Navbar, Profile, Username } from './components';

const App = () => {
  return (
    <main className='w-full h-full'>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/' element={<Register />} />

          <Route path='/user' element={<Username />} />
          <Route path='/' element={<Profile />} />
          <Route path='*' element={<ErrorPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </main>
  );
};

export default App;
