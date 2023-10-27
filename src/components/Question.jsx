// src/components/Question.js
import { useState } from 'react';

const Question = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='mb-4'>
      <div
        className='flex justify-between items-center bg-blue-500 px-4 py-2 cursor-pointer'
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className='text-white font-bold'>{question}</div>
        <div className='text-white'>{isOpen ? '-' : '+'}</div>
      </div>
      {isOpen && <div className='bg-gray-100 px-4 py-2'>{answer}</div>}
    </div>
  );
};

export default Question;
