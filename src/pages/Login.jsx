// src/components/Login.js

const Login = () => {
  return (
    <div className='flex justify-center items-center h-screen'>
      <form className='bg p-8 rounded shadow-lg'>
        <h2 className='text-2xl font-bold mb-4 text-center'>Sign In</h2>
        <div className='mb-4'>
          <label htmlFor='email' className='block text-gray-700 font-bold mb-2'>
            Email
          </label>
          <input
            type='email'
            id='email'
            className='w-full border p-2 rounded '
          />
        </div>
        <div className='mb-6'>
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
        <button
          type='submit'
          className='w-full bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700'
        >
          Sign In
        </button>
      </form>
    </div>
  );
};

export default Login;
