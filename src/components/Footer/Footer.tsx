import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';


const Footer = () => {
  return (
    <footer className="py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">

            <p className='body-s'>© {new Date().getFullYear()} Your Company. All rights reserved.</p>
          </div>
          <div className="flex justify-evenly">
            <Link href='/' className="text-inactive-text hover:text-active-text p-2" >
              <FontAwesomeIcon icon={faFacebook} size="2x" />
            </Link>
            <Link href='/' className="text-inactive-text hover:text-active-text p-2" >
              <FontAwesomeIcon icon={faTwitter} size="2x" />
            </Link>
            <Link href='/' className="text-inactive-text hover:text-active-text p-2" >
              <FontAwesomeIcon icon={faInstagram} size="2x" />
            </Link>
            <Link href='/' className="text-inactive-text hover:text-active-text p-2" >
              <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
