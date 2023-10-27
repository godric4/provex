import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    // <footer classNameNameName='mt-[4rem] bg-primary p-4 text-center
    // </footer>
    <footer className=' text-white py-8 mt-[4rem] bg-primary p-4 text-center'>
      <div className='container mx-auto flex flex-wrap justify-between'>
        {/* <!-- Contact Details --> */}
        <div className='w-full md:w-1/3 mb-4 md:mb-0'>
          <h3 className='text-xl font-bold mb-4'>Contact Details</h3>
          <p>263 NOTTINGHAM ROAD</p>
          <p>NOTTINGHAM, ENGLAND NG7 7DA</p>
          <p>Phone: +447456322605</p>
          <p>Email: info@provexhomes.com</p>
          <p>Email: support@provexhomes.com</p>
        </div>

        {/* <!-- Quick Links --> */}
        <div className='w-full md:w-1/3 mb-4 md:mb-0'>
          <h3 className='text-xl font-bold mb-4'>Quick Links</h3>
          <ul>
            <li>
              <Link to='/' className='block mb-2'>
                Home
              </Link>
            </li>
            <li>
              <Link to='/properties' className='block mb-2'>
                Properties
              </Link>
            </li>
            <Link to='/pricing' className='block mb-2'>
              Pricing
            </Link>
            <li>
              <Link to='/services' className='block mb-2'>
                Services
              </Link>
            </li>
            <li>
              <Link to='/about' className='block mb-2'>
                About Us
              </Link>
            </li>
            <li>
              <Link to='/contact' className='block mb-2'>
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* <!-- More Information --> */}
        <div className='w-full md:w-1/3'>
          <h3 className='text-xl font-bold mb-4'>More Information</h3>
          <ul>
            <li>
              <Link to='/faq' className='block mb-2'>
                FAQ
              </Link>
            </li>
            <li>
              <Link to='/privacy' className='block mb-2'>
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to='/terms' className='block mb-2'>
                Terms of Use
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className='text-center mt-8'>
        <p>&copy; 2023 Provex Homes. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
