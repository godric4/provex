import { FormRow } from '../components';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { loginUser, registerUser } from '../features/user/UserSlice';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { loginBg } from '../assets';
// import { loginBg } from '../assets';

const Register = () => {
  const initialState = {
    username: '',
    email: '',
    password: '',
    isMember: true,
  };

  const [values, setValues] = useState(initialState);
  const { user, isLoading } = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Handle form input
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setValues({ ...values, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Handle empty form fields durng submission
    const { username, email, password, isMember } = values;
    if (!email || !password || (!isMember && !username)) {
      toast.error('Please Fill out all fields');
      return;
    }
    if (isMember) {
      dispatch(loginUser({ identifier: email, password }));
      return;
    }
    dispatch(registerUser({ username, email, password }));
  };
  // Switch between registered and login states
  const toggleMember = () => {
    setValues({ ...values, isMember: !values.isMember });
  };

  useEffect(() => {
    if (user) {
      setTimeout(() => {
        navigate('/');
      }, 100);
    }
  }, [user]);

  return (
    <div
      className='grid items-center justify-center'
      style={{
        backgroundImage: `url(${loginBg})`,
        backgroundPosition: 'center',
        minHeight: '90vh',
      }}
    >
      <form
        action=''
        className='form container mt-[5rem]'
        onSubmit={handleSubmit}
      >
        <div className='flex mb-[-1rem] justify-center'>
          <h3>Provex Homes</h3>
        </div>
        <h5 className='text-center font-bold text-lg mt-[2rem]'>
          {values.isMember ? 'Login' : 'Register'}
        </h5>
        {!values.isMember && (
          <FormRow
            type='text'
            name='username'
            value={values.username}
            handleChange={handleChange}
            autoComplete='off'
          />
        )}

        <FormRow
          type='email'
          name='email'
          value={values.email}
          handleChange={handleChange}
          autoComplete='off'
        />
        <FormRow
          type='password'
          name='password'
          value={values.password}
          handleChange={handleChange}
          autoComplete='off'
        />

        <button
          type='submit'
          className=' mt-3 p-3 w-full bg-primary font-bold'
          disabled={isLoading}
        >
          {isLoading ? 'loading...' : 'Submit'}
        </button>

        <p className=' mt-[2.4rem] text-center'>
          {values.isMember ? 'To sign-up click' : 'Already have an account?'}
          <button
            type='button'
            onClick={toggleMember}
            className='underline ml-2 font-bold'
          >
            {values.isMember ? 'Here' : 'Login'}
          </button>
        </p>
      </form>
    </div>
  );
};

export default Register;
