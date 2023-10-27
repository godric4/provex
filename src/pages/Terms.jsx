import { MiniHero } from '../components';

const Terms = () => {
  return (
    <>
      <MiniHero title='Terms and Conditions' />
      <div className='container mx-auto p-8'>
        <h1 className='text-3xl font-bold mb-4'>Terms of Use</h1>

        <div className='mb-8'>
          <h2 className='text-2xl font-bold mb-4'>1. Introduction</h2>
          <p>
            Welcome to [Real Estate Agency Name]'s Terms of Use. These terms
            govern your use of our website and services.
          </p>
        </div>

        <div className='mb-8'>
          <h2 className='text-2xl font-bold mb-4'>2. Acceptance of Terms</h2>
          <p>
            By using our website, you agree to these terms. If you do not agree,
            please do not use our services.
          </p>
        </div>
        <div className='mb-8'>
          <h2 className='text-2xl font-bold mb-4'>
            3. Intellectual Property Rights:
          </h2>
          <p>
            All content on this website, including text, images, logos, and
            trademarks, is the property of Provex Homes and protected by
            intellectual property laws. You may not use or reproduce our content
            without written permission.
          </p>
        </div>
        <div className='mb-8'>
          <h2 className='text-2xl font-bold mb-4'>4. User Conduct</h2>
          <p>
            By using this website, you agree not to engage in any activity that
            may disrupt or interfere with the proper functioning of the site.
            This includes, but is not limited to, unauthorized access, data
            scraping, or any form of malicious activity.
          </p>
        </div>
        <div className='mb-8'>
          <h2 className='text-2xl font-bold mb-4'>
            5. Limitation of Liability
          </h2>
          <p>
            We are not liable for any direct, indirect, or consequential damages
            arising from the use or inability to use this website. This
            includes, but is not limited to, loss of data, profits, or business
            interruption
          </p>
        </div>
        <div className='mb-8'>
          <h2 className='text-2xl font-bold mb-4'>
            6. Links to Third-Party Websites
          </h2>
          <p>
            This website may contain links to third-party websites for your
            convenience. We do not endorse or take responsibility for the
            content or practices of these external sites
          </p>
        </div>
      </div>
    </>
  );
};

export default Terms;
