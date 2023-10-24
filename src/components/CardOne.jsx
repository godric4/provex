// import { chicken } from '../assets';

const OurMenu = ({ label, bgImg }) => {
  return (
    <div
      className='h-[200px]  relative border-b-4 border-t-4  border-white '
      style={{
        backgroundImage: `url(${bgImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className='nested  border-l-4 border-white   absolute top-[50%] bottom-0'></div>
      <div className='nested  border-r-4 border-white right-0 absolute bottom-[50%] top-0'></div>
      <div className='h-full w-full flex flex-col justify-center items-center'>
        <h2 className='bg-[rgba(0,0,0,0.7)] p-4 text-[1.5rem] font-bold italic border-2 border-secondary hover:bg-black'>
          {label}
        </h2>
      </div>
    </div>
  );
};

export default OurMenu;
