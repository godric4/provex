import { MiniHero } from '../components';

const Terms = () => {
  return (
    <>
      <MiniHero title='Terms and Conditions' />
      <div className='container mx-auto p-8'>
        <h1 className='text-3xl font-bold mb-4'>Terms of Use</h1>
        <p>
          These Terms and users Conditions apply to and regulate the provision
          of ProVex Homes provided by ProVex Services,which provides Real Estate
          services to the Customer herein. These Terms and Conditions constitute
          ProVex Homes offerings and set out the terms governing this Agreement.
        </p>
        <p className='mt-2'>
          By registering for a ProVex Homes Account or using any of the services
          provided on the website, you agree to comply with all of the terms and
          conditions in this user agreement. You also agree to comply with the
          following additional policies that apply to you:
          <span>
            <ul>
              <li>• Privacy Policy</li>
              <li>• Acceptable Use Policy </li>
              <li>
                • Consent to Receive Electronic Disclosures (E-Sign Disclosure
                and Consent)
              </li>
            </ul>
          </span>
        </p>

        <p className='mt-2 leading-8'>
          We may revise this user agreement and any of the policies listed above
          from time to time. The revised version will be effective at the time
          we post it, unless otherwise noted. If our changes reduce your rights
          or increase your responsibilities, we will provide you with notice of
          at least 21 days.By continuing to use our services after any changes
          to this user agreement become effective, you agree to abide and be
          bound by those changes. If you do not agree to these terms and
          conditions, please do not proceed and exit immediately. Please be
          informed that on notice to you, we can terminate your relationship
          with us in if we believe that you have violated any of these terms.We
          shall provide you with 21 days notice in the event that this becomes
          necessary
        </p>
      </div>
    </>
  );
};

export default Terms;
