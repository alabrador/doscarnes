import React from 'react';
//import logo from '../logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faXTwitter, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const TopHeader = () => {
  return (
    <header className="bg-top text-white p-3">
      <div className="container mx-auto flex justify-between items-center">

        {/* Correo */}
        <div className="flex space-x-4 font-bold text-black text-xl">
          <a href="mailto:pedidos@doscarnes.com" className="hover:text-white">
            pedidos@doscarnes.com
          </a>
        </div>

        {/* Redes Sociales */}
        <div className="flex space-x-4 text-lg text-center">
          <a href="https://facebook.com" className="box-content h-7 w-7 bg-black hover:text-social">
            <FontAwesomeIcon icon={faFacebookF} />
          </a>
          <a href="https://twitter.com" className="box-content h-7 w-7 bg-black hover:text-social">
            <FontAwesomeIcon icon={faXTwitter} />
          </a>
          <a href="https://instagram.com" className="box-content h-7 w-7 bg-black hover:text-social">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="https://whatsapp.com" className="box-content h-7 w-7 bg-black hover:text-social">
            <FontAwesomeIcon icon={faWhatsapp} />
          </a>
        </div>
      </div>
    </header>
  );
};

export default TopHeader;