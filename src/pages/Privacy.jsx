import { MiniHero } from '../components';

const Privacy = () => {
  return (
    <>
      <MiniHero title='Privacy Policy' />
      <div className='container mx-auto mt-8 p-4'>
        <h1 className='text-2xl font-bold mb-4'>Privacy Policy</h1>
        <p className='mb-4'>
          This Privacy Policy describes how Provex Homes ("we", "us", or "our")
          collects, uses, and protects your personal information when you use
          our website or services. By using our website or services, you consent
          to the practices described in this policy.
        </p>

        <h2 className='text-xl font-bold mb-2'>Information We Collect</h2>
        <p className='mb-4'>
          We may collect personal information, such as your name, email address,
          phone number, and other relevant details, when you interact with us,
          such as when you fill out a contact form, request information, or sign
          up for our newsletter.
        </p>

        <h2 className='text-xl font-bold mb-2'>How We Use Your Information</h2>
        <p className='mb-4'>
          We use the information we collect to provide you with the services you
          request, send you updates, respond to inquiries, and improve our
          website and services. We do not share your information with third
          parties without your consent, except as required by law.
        </p>

        <h2 className='text-xl font-bold mb-2'>Security</h2>
        <p className='mb-4'>
          We take the security of your personal information seriously. We
          implement appropriate measures to protect against unauthorized access,
          alteration, disclosure, or destruction of your information.
        </p>

        <h2 className='text-xl font-bold mb-2'>Your Rights</h2>
        <p className='mb-4'>
          You have the right to access, correct, or delete your personal
          information. You can contact us at any time to exercise these rights.
        </p>

        <h2 className='text-xl font-bold mb-2'>Changes to This Policy</h2>
        <p className='mb-4'>
          We may update this Privacy Policy from time to time. Any changes will
          be posted on this page, and the date of the last update will be
          indicated at the top of the policy.
        </p>
      </div>
    </>
  );
};

export default Privacy;
