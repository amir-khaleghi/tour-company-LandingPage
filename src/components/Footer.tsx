import { FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';
import { FiAlignJustify } from 'react-icons/fi';
import NavItem from './NavList';
const Footer = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 py-4 bg-black  h-[300px]">
      <div>
        {/* Navigations */}
        <ul className="gap-5 mx-20 text-white md:flex-row md:flex">
          <NavItem />
        </ul>
      </div>
      <div>
        {/* icons */}
        <ul className="gap-5 text-2xl md:flex">
          <li className="transition duration-500 transform hover:scale-125">
            <a
              target="_blank"
              href="https://twitter.com"
              className="text-primary-6"
            >
              <FaTwitter />
            </a>
          </li>
          <li className="transition duration-500 transform hover:scale-125">
            <a
              target="_blank"
              href="https://www.facebook.com/"
              className="text-primary-6"
            >
              <FaFacebook />
            </a>
          </li>
          <li className="transition duration-500 transform hover:scale-125">
            <a
              target="_blank"
              href="https://www.instagram.com/"
              className="text-primary-6"
            >
              <FaInstagram />
            </a>
          </li>
        </ul>
      </div>
      <div className="text-center text-white">
        Copyright © Backroads Travel Tours Company2023. All Rights Reserved
      </div>
    </div>
  );
};
export default Footer;
