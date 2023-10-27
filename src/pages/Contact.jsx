import { FaWhatsapp } from 'react-icons/fa';
import { ContactForm, MiniHero, SocialIcons } from '../components';

const Contact = () => {
  return (
    <div className='mb-[-4rem] bg-lighter'>
      <div className=''>
        <MiniHero title='Contact Us' />
      </div>
      <h3 className=' text-2xl text-center top-title mb-3 font-bold'>
        Find Us
      </h3>
      <div className='container text-center'>
        <div className='row'>
          <div className='col-lg-8'>
            <div className='map'>
              <iframe
                src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2402.390715797538!2d-1.1703794242092544!3d52.977374172184575!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4879c1bdc0a96605%3A0x5d79eebcf997e4b6!2s263%20Nottingham%20Rd%2C%20New%20Basford%2C%20Nottingham%20NG7%207DA%2C%20UK!5e0!3m2!1sen!2sng!4v1698408397500!5m2!1sen!2sng'
                width='100%'
                height='350px'
                style={{ border: 0 }}
                allowFullScreen=''
                loading='lazy'
              ></iframe>
            </div>
          </div>

          <div className='col-lg-4 details pt-4'>
            <div className='row'>
              <div className=''>
                <h5 className='font-bold'>Head Office</h5>
                <p>263 NOTTINGHAM ROAD, NOTTINGHAM, ENGLAND NG7 7DA</p>
              </div>
              <div className=''>
                <h5 className='font-bold'>Regional Office</h5>
                <p>2 AV. DE SUFFEREN, 75007 PARIS, FRANCE</p>
              </div>
              <div className=''>
                <h5 className='font-bold'>Email</h5>
                <p>info@provexhomes.com</p>
                <p>support@provexhomes.com</p>
              </div>
              <div className=''>
                <h5 className='font-bold'>Telephone & Whatsapp</h5>
                <p>
                  {' '}
                  <a
                    href="https://wa.me/33745692161?text=Hello  %20Provex Homes%20I have ,%20i%20got%20something%20important%20to%20discuss'"
                    className='text-accent font-bold'
                  >
                    +33745692161
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ContactForm />
    </div>
  );
};

export default Contact;
