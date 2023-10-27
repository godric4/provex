import { Link } from 'react-router-dom';
import { landedProperties } from '../utils/constants';
import PropertyCard from './PropertyCard';

const Properties = () => {
  return (
    <div className='container mt-4'>
      <div className='grid lg:grid-cols-3 md:grid-cols-3 sm:grid-3 grid-cols-1 sm:gap-4 gap-3'>
        {landedProperties.map((landedProperty) => {
          const { id, size, price, imgUrl, name } = landedProperty;

          return (
            <div className='center' key={id}>
              <PropertyCard
                size={size}
                price={price}
                name={name}
                imgUrl={imgUrl}
              />
            </div>
          );
        })}
      </div>
      <div className='text-center mt-5'>
        <Link to='/properties' className='btn w-full bg-primary text-white'>
          Find More
        </Link>
      </div>
    </div>
  );
};

export default Properties;
