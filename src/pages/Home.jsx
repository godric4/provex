import { Link } from 'react-router-dom';
import {
  elenore,
  hero,
  houseAbstract,
  ricky,
  u1,
  u2,
  u3,
  u4,
  yvonne,
} from '../assets';
import { Pricing, Properties } from '../components';
const Home = () => {
  return (
    <section className='relative top-[4.3rem]'>
      {/* Hero */}
      <div
        className='background h-[80vh]'
        style={{
          backgroundImage: `url(${hero})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className=' text-center h-full flex justify-center item-center flex-col  bg-[rgba(0,0,3,.6)] text-white p-3'>
          <h1 className='font-bold text-[3rem]'>Provex Homes</h1>
          <p className='text-[1.1rem]'>
            ProVex Homes LTD is the easiest way to access smarter investment
            options and earn real returns. <br /> We make Real Estate investing
            simple, accessible and affordable.
          </p>
          <div className='flex justify-center mt-4'>
            <Link
              to='/pricing'
              className='btn bg-lighter w-[9rem]  text-primary font-bold'
            >
              Know More
            </Link>
          </div>
        </div>
      </div>
      {/* about */}
      <div className='mt-[2rem] container flex justify-center items-center max-sm:flex-col'>
        <img src={houseAbstract} alt='house lines' className='w-[50%]' />

        <div className='text-center'>
          <h3 className='font-bold text-primary text-[1.5rem]'>
            About Our Properties
          </h3>
          <p className='text-[1.15rem] mb-4 '>
            There are many variations of properties available,Provex Homes is a
            dominant Real Estate Establishment , Property Investment and
            Management Company.
          </p>
          <Link
            to='/about'
            className='btn bg-lighter w-[9rem] p-3 text-primary font-bold'
          >
            Know More
          </Link>
        </div>
      </div>
      <div className='mt-5'>
        <div className='text-center'>
          <h3 className='font-bold text-[1.5rem]'>Our Featured Properties</h3>
          <p>Exclusive Luxurious Apartments for sale </p>
        </div>
        <Properties />
      </div>
      <div className='mt-5 '>
        <div className='text-center'>
          <h3 className='font-bold text-[1.5rem]'>Our Price Integration</h3>
          <p>Discover our investment products.</p>
        </div>
        <Pricing />
      </div>
      {/* corporate highlight */}
      <div className=' mt-5 bg-lighter pb-7'>
        <h2 className='text-center text-[1.2rem] pt-5 font-bold'>
          Corporate Highlights Overview
        </h2>
        <div className=' container '>
          <p>
            Quality and integrity are the foundation that strengthens all areas
            of our business. We work extremely hard to improve our system of
            expert in different sectors of our business, as we analyse all of
            the various challenges confronting projects management, marketing,
            service delivery, asset management and marketing research, as we
            constantly focus in providing premium service, leveraging on
            technology to provide effective and high value delivery, while
            building a stronger culture of consistency always being accountable,
            and keeping clients needs top notch.
          </p>
          <p className='mt-3'>
            Our framework outlines how ProVex Homes contributes to delivering
            high quality service solutions across the globe. These are mandatory
            actions and behaviors, built on our Values that have been our guide
            throughout the years of doing business.
          </p>
          <p className='mt-3'>
            ProVex Homes is the foundation of what we do and ensuring quality is
            our nickname at ProVex Homes. We take our responsibility seriously
            and seek to constantly improving and discovering new technological
            approach to marketing research. We deliver high standards of quality
            service in asset management and project execution, by confronting
            and providing innovative approach continually and fundamentally,
            also keeping pace with ever-changing economic, business and
            regulatory conditions, as well as technological advancements.
          </p>
          <p className='mt-3'>
            Our relentless focus on quality reinforces our commitment to serve
            the public interest, drives our ambition to be the most trusted and
            trustworthy expert in property investment and asset management.
          </p>
        </div>
      </div>
      {/* why choose us */}
      <div className='bg-secondary text-primary'>
        <h2 className='text-center font-bold text-[1.5rem] pt-4 pb-4'>
          Why Choose Us
        </h2>
        <div className='grid lg:grid-cols-4 md:grid-cols-4 sm:grid-2 grid-cols-2 sm:gap-4 gap-3'>
          <div className='flex justify-center flex-col items-center'>
            <img src={u1} alt='' />
            <p className='text-[1rem] font-bold'>6+</p>
            <p>Years of Realtorship</p>
          </div>
          <div className='flex justify-center flex-col items-center'>
            <img src={u2} alt='' />
            <p className='text-[1rem] font-bold'>3000+</p>
            <p>Projects Delivered</p>
          </div>
          <div className='flex justify-center flex-col items-center'>
            <img src={u3} alt='' />
            <p className='text-[1rem] font-bold'>1000+</p>
            <p>Satisfied Customers</p>
          </div>
          <div className='flex justify-center flex-col items-center'>
            <img src={u4} alt='' />
            <p className='text-[1rem] font-bold'>150+</p>
            <p>Cheap Rates</p>
          </div>
        </div>
        <div className='text-center pb-5'>
          <Link
            to='/pricing'
            className='btn w-[75%] bg-primary text-white px-5 mt-4'
          >
            Get Quote
          </Link>
        </div>
      </div>
      {/* testimonial */}
      <div className='container pb-4'>
        <div className='text-center mb-3'>
          <h2 className=' font-bold text-[1.5rem] pt-4 '>Testimonials</h2>
          <p>What Our Clients Say</p>
        </div>
        <div className='grid lg:grid-cols-3 md:grid-cols-3 sm:grid-1 grid-cols-1 sm:gap-4 gap-3 '>
          {/*  */}
          <div className='flex flex-col justify-center items-center '>
            <img src={elenore} alt='user' className='user-img' />
            <h3 className='font-bold text-[1rem]'>Elenore. J</h3>
            <p>
              "I can't thank Provex Homes enough for their professionalism and
              attention to detail. They helped me find an incredible investment
              property that exceeded my expectations. I'm looking forward to
              working with them again.
            </p>
          </div>
          <div className='flex flex-col justify-center items-center '>
            <img src={yvonne} alt='user' className='user-img' />
            <h3 className='font-bold text-[1rem]'>Alayne. R</h3>
            <p>
              "From the first meeting to the closing, Provex Homes exceeded our
              expectations. They understood exactly what we were looking for and
              helped us navigate the market with confidence. Highly
              recommended!"
            </p>
          </div>
          <div className='flex flex-col justify-center items-center '>
            <img src={ricky} alt='user' className='user-img' />
            <h3 className='font-bold text-[1rem]'>Ricky. G</h3>
            <p>
              "The team at Provex Homes made the home-buying process seamless.
              They were always available to answer our questions and provided
              invaluable insights. We're grateful for their dedication."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
