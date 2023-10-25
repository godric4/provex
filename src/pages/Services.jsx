import {
  asset,
  brand,
  consult,
  development,
  marketing,
  sales,
} from '../assets';
import { MiniHero } from '../components';

const Services = ({ title }) => {
  return (
    <>
      <MiniHero title='Our Services' />
      <p className='container'>
        We Provide Marketing, Advertising, Branding, Promoting, Consulting,
        Construction, Constructing, propertiy Development and Management, and
        many more.
      </p>
      <div className='container grid lg:grid-cols-3 md:grid-cols-3 sm:grid-3 grid-cols-1 sm:gap-4 gap-3'>
        {/*  */}
        <div className=''>
          <img src={marketing} alt='' className='w-full h-[200px]' />
          <div className=''>
            <h3 className='font-bold py-2'>Marketing</h3>
            <p>
              ProVex Homes provides full-service internet marketing for brands
              and agencies, including search, display, SMS and email
              advertising. Digital marketing is constantly evolving, and our
              team is constantly adapting to help clients receive value for
              their online investments and online mobile platforms, our
              competences include search, display, email and SMS marketing. One
              of our strategy is to continue designing and meeting the unique
              needs of the global digital space. We have built long standing
              relationships with leading platform owners, to ensure that our
              clients get value for their money.
            </p>
          </div>
        </div>
        {/*  */}
        <div className=''>
          <img src={consult} alt='' className='w-full h-[200px]' />
          <div className=''>
            <h3 className='font-bold py-2'>Consulting</h3>
            <p>
              ProVex Homes is a property solution and marketing agency, We
              engage in-property consulting integration and capacity Building.
              We offer one of the best Business and property solutions advisory
              consulting service, that allows value customers to gain maximum
              satisfaction and investment returns while ensuring protection on
              every client properties investment ROI.
            </p>
          </div>
        </div>
        {/*  */}
        <div className=''>
          <img src={brand} alt='' className='w-full h-[200px]' />
          <div className=''>
            <h3 className='font-bold py-2 '>Brand Reputation Management</h3>
            <p>
              Over the years, Provexhomes has built a massive following and
              firmly established itself as a trusted and desirable brand. Our
              products are seen as valuable and desirable and we strive to
              dominate the property market
            </p>
          </div>
        </div>
        {/*  */}
        <div className=''>
          <img src={development} alt='' className='w-full h-[200px]' />
          <div className=''>
            <h3 className='font-bold py-2 '>Property Management</h3>
            <p>
              We understand that owning a property abroad can seem overwhelming
              if you don't live there full time, don't speak the language, or
              understand the local legislation. Not to mention not having the
              time to look after it properly while you are away. We work
              alongside a well-established property management team who will
              take care of your property, ensuring that it is kept in perfect
              condition and that all administrative aspects are taken care of,
              giving you peace of mind knowing that your home is in good hands.
            </p>
          </div>
        </div>
        {/*  */}
        {/*  */}
        <div className=''>
          <img src={asset} alt='' className='w-full h-[200px]' />
          <div className=''>
            <h3 className='font-bold py-2 '>Asset Management</h3>
            <p>
              Over the years, Provexhomes has built a massive following and
              firmly established itself as a trusted and desirable brand. Our
              products are seen as valuable and desirable and we strive to
              dominate the property market
            </p>
          </div>
        </div>
        {/*  */}
        {/*  */}
        <div className=''>
          <img src={sales} alt='' className='w-full h-[200px]' />
          <div className=''>
            <h3 className='font-bold py-2 '>Property Management</h3>
            <p>
              Over the years, Provexhomes has built a massive following and
              firmly established itself as a trusted and desirable brand. Our
              products are seen as valuable and desirable and we strive to
              dominate the property market
            </p>
          </div>
        </div>
        {/*  */}
      </div>
    </>
  );
};

export default Services;
