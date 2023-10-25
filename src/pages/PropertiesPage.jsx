import { MiniHero, PropertyCard } from '../components';
import { moreProperties } from '../utils/constants';

const PropertiesPage = () => {
  return (
    <div>
      <MiniHero title='Properties On Sale' />
      <div className=''>
        <div className='container mt-4'>
          <div className='grid lg:grid-cols-3 md:grid-cols-3 sm:grid-3 grid-cols-1 sm:gap-4 gap-3'>
            {moreProperties.map((landedProperty) => {
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
        </div>
      </div>
    </div>
  );
};

export default PropertiesPage;
