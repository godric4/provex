import { Link } from 'react-router-dom';
import { Button } from '../components';

const ErrorPage = () => {
  return (
    <section className='h-[80vh] w-full flex  flex-col justify-center items-center'>
      <h1 className='text-[4rem]'>Error 404</h1>
      <p>The page your are looking for cannot be found</p>
      <Link to='/' className='mt-5'>
        <Button label='Back To Home' />
      </Link>
    </section>
  );
};

export default ErrorPage;
