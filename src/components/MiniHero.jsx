import { detached } from '../assets';
const MiniHero = ({ title }) => {
  return (
    <div
      className='relative top-[4.3rem] h-[8rem] mb-20'
      style={{ backgroundImage: `url(${detached})` }}
    >
      <h2 className='flex justify-center items-center h-full text-white bg-[rgba(53,20,20,0.7)] font-bold text-[1.3rem]'>
        {title}
      </h2>
    </div>
  );
};

export default MiniHero;
