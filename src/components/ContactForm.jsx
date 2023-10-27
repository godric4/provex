import { useState } from 'react';

// import axios from 'axios';

const Contact = () => {
  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null },
  });
  const [inputs, setInputs] = useState({
    email: '',
    message: '',
  });
  const handleServerResponse = (ok, msg) => {
    if (ok) {
      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg: msg },
      });
      setInputs({
        email: '',
        message: '',
      });
    } else {
      setStatus({
        info: { error: true, msg: msg },
      });
    }
  };
  const handleOnChange = (e) => {
    e.persist();
    setInputs((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
    setStatus({
      submitted: false,
      submitting: false,
      info: { error: false, msg: null },
    });
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    setStatus((prevStatus) => ({ ...prevStatus, submitting: true }));
    ({
      method: 'POST',
      url: 'https://formspree.io/mnqyjejz',
      data: inputs,
    })
      .then(() => {
        handleServerResponse(
          true,
          'Thank you, your message has been submitted.'
        );
      })
      .catch((error) => {
        handleServerResponse(false, error.response.data.error);
      });
  };
  return (
    <>
      {/* <div classNameName='text-center flex justify-center items-cente'>
        <div classNameName='container pt-3 mt-2 '>
          <h5 className='top-title text-center'>Send us a message</h5>
          <div className='contact-form'>
            <form onSubmit={handleOnSubmit}>
              <div className='mb-3'>
                <label className='form-label' htmlFor='name'>
                  Name
                </label>
                <input
                  id='name'
                  type='text'
                  name='_name'
                  onChange={handleOnChange}
                  required
                  className='form-control'
                  value={inputs.name}
                />
              </div>
              <div className='mb-3'>
                <label className='form-label ' htmlFor='email'>
                  Email
                </label>
                <input
                  id='email'
                  type='email'
                  name='_replyto'
                  onChange={handleOnChange}
                  required
                  className='form-control'
                  value={inputs.email}
                />
              </div>
              <div className='mb-3'>
                <label className='form-label' htmlFor='message'>
                  Message
                </label>
                <textarea
                  id='message'
                  name='message'
                  onChange={handleOnChange}
                  required
                  className='form-control'
                  value={inputs.message}
                />
              </div>
              <button
                type='submit'
                disabled={status.submitting}
                className='btn my-btn  w-100 mt-3'
              >
                {!status.submitting
                  ? !status.submitted
                    ? 'Submit'
                    : 'Submitted'
                  : 'Submitting...'}
              </button>
            </form>
            {status.info.error && (
              <div className='error'>Error: {status.info.msg}</div>
            )}
            {!status.info.error && status.info.msg && <p>{status.info.msg}</p>}
          </div>
        </div>
      </div> */}
      <div className='container mx-auto p-6'>
        <h3 className=' text-2xl font-bold mb-2 text-center'>
          Send Us A Message
        </h3>
        <form action='#' method='post' className='max-w-md mx-auto'>
          <div className='mb-4'>
            <label
              htmlFor='name'
              className='block text-gray-700 font-bold mb-2'
            >
              Name
            </label>
            <input
              type='text'
              id='name'
              name='name'
              className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-400'
              required
            />
          </div>
          <div className='mb-4'>
            <label
              htmlFor='email'
              className='block text-gray-700 font-bold mb-2'
            >
              Email
            </label>
            <input
              type='email'
              id='email'
              name='email'
              className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-400'
              required
            />
          </div>
          <div className='mb-6'>
            <label
              htmlFor='message'
              className='block text-gray-700 font-bold mb-2'
            >
              Message
            </label>
            <textarea
              id='message'
              name='message'
              className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-400'
              rows='5'
              required
            ></textarea>
          </div>
          <button
            type='submit'
            className='bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 w-full'
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Contact;
