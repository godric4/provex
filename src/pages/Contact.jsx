import { duplex, tudor, victorian } from '../assets';
import { ContactForm, MiniHero, SocialIcons } from '../components';

const Contact = () => {
  return (
    <div className='contact-pae'>
      <div className=''>
        <MiniHero title='Contact Us' />
      </div>
      <h3 className='text-center top-title mb-3'>Find Us</h3>
      <div className='container text-center'>
        <div className='row'>
          <div className='col-lg-8'>
            <div className='map'>
              <iframe
                src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.488636125813!2d3.181883814178346!3d6.459605395326834!2m3!1f0!2f0!3f0!3m2!1i1024!2i768                !4f13.1!3m3!1m2!1s0x103b86c999c99535%3A0x29eae1a660ff6a7d!2s2%20Osunmakinde%20St%2C%20Ojo%20102111%2C%20Lagos!5e0!3m2!1sen!2sng!4v1676286120652!5m2!1sen!2sng'
                width='100%'
                height='350px'
                style={{ border: 0 }}
                allowFullScreen=''
                loading='lazy'
              ></iframe>
            </div>

            <div className='about-images '>
              <img src={duplex} alt='love message' />
              <img src={victorian} alt='love message' />
              <img src={tudor} alt='love message' />
            </div>
          </div>

          <div className='col-lg-4 details pt-4'>
            <div className='row'>
              <div className=''>
                <h5>Head Office</h5>
                <p>263 NOTTINGHAM ROAD, NOTTINGHAM, ENGLAND NG7 7DA</p>
              </div>
              <div className=''>
                <h5>Regional Office</h5>
                <p>2 AV. DE SUFFEREN, 75007 PARIS, FRANCE</p>
              </div>
              <div className=''>
                <h5>Telephone</h5>
                <p>info@provexhomes.com</p>
                <p>support@provexhomes.com</p>
              </div>
              <div className=''>
                <h5>E-mail</h5>
                <p>lorinetreats@gmail.com</p>
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
