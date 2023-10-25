import { FaInstagram, FaTwitter, FaWhatsapp } from 'react-icons/fa';

const SocialIcons = () => {
  return (
    <>
      <div>
        <a href='https://twitter.com/Fenalito'>
          <FaTwitter />
        </a>

        <a href='https://www.instagram.com/fena_400/'>
          <FaInstagram />
        </a>
        <a href="https://wa.me/2348188534279?text=Hello %20Godric,%20i%20got%20something%20important%20to%20share%20with%20you'">
          <FaWhatsapp />
        </a>
      </div>
    </>
  );
};

// const Wrapper = styled.nav`
//   svg {
//     margin: 0 0.4rem;
//     font-size: 1.3rem;
//   }

//   svg:hover {
//     transform: scale(1.5);
//     transition: var(--transition);
//   }
// `;

export default SocialIcons;
