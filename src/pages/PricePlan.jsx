import { MiniHero, Pricing } from '../components';

const PricePlan = () => {
  return (
    <div>
      <MiniHero title='Our Investment Integration' />
      <div className='container'>
        <p className='mb-3'>
          We make it possible for anyone to invest in our investment integration
          and get returns. Invest in time tested, professionally managed
          investment products all in one .
        </p>
        <p>Invest as you go</p>
        <p className='mt-2'>
          We have automated investment. With our Collective Investment Plan
          (CIP), you get to invest a certain amount of your income on a periodic
          basis.
          <br />
          Everyone is welcome
        </p>
        <p>
          {' '}
          <br />
          Everyone is welcome
        </p>
        <p className='mt-2'>
          You do not need a billion to be an investor. Regardless of your risk
          profile, We empower anyone to start investing; entrepreneurs, fresh
          graduates and busy professionals all find it easy to invest with us.
        </p>
        <p>
          <br /> Support Services
        </p>
        <p className='mt-2'>
          If you feel overwhelmed and you don't know where to start, we offer
          free support services to help you navigate the investment space. You
          can also subscribe our New Letters, our blog to get more of our
          investment support and products.
        </p>
        <p>
          Discover our investment products, services, or events so you can drive
          for both revenues and profits.
        </p>
      </div>
      <Pricing />
    </div>
  );
};

export default PricePlan;
