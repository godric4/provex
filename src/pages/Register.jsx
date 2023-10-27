// import React from 'react';src/components/Register.js

const Register = () => {
  return (
    <div className='flex justify-center items-center h-screen'>
      <form className='bg-white p-8 rounded shadow-lg'>
        <h2 className='text-2xl font-bold mb-4 text-center'>Register</h2>
        <div className='mb-4'>
          <label htmlFor='email' className='block text-gray-700 font-bold mb-2'>
            Email
          </label>
          <input
            type='email'
            id='email'
            className='w-full border p-2 rounded'
          />
        </div>
        <div className='mb-4'>
          <label
            htmlFor='password'
            className='block text-gray-700 font-bold mb-2'
          >
            Password
          </label>
          <input
            type='password'
            id='password'
            className='w-full border p-2 rounded'
          />
        </div>
        <div className='mb-6'>
          <label
            htmlFor='confirmPassword'
            className='block text-gray-700 font-bold mb-2'
          >
            Confirm Password
          </label>
          <input
            type='password'
            id='confirmPassword'
            className='w-full border p-2 rounded'
          />
        </div>
        <button
          type='submit'
          className='w-full bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700'
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
