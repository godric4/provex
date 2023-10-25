const PropertyCard = ({ size, price, name, imgUrl }) => {
  return (
    <div className='card bg-primary text-white '>
      <div className='h-[200px]'>
        <img src={imgUrl} alt='' className='h-full w-full' />
      </div>
      <div className='text-center pb-3 pt-3'>
        <p className='font-bold text-[.9rem] uppercase'>{name} </p>
        <p>{price}</p>
        <p>{size}</p>
      </div>
    </div>
  );
};

export default PropertyCard;
