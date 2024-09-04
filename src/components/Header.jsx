import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from '../img/logo_doscarnes.png';

const Header = () => {
  return (
    <header className="bg-header text-white p-7">
     <div className="container mx-auto flex justify-between items-center">
        {/*Frase*/}
        <div className="flex text-1x1 font-bold text-2xl">
            <p>Reserve su pedido <a href="/" class="text-top text-3xl"> Ahora!</a></p>
        </div>

        {/*Logo*/}
         <div className="flex absolute z-40 top-1 left-1/2 transform -translate-x-1/2">
        <img src={logo} alt="logo" />
        </div>

        {/* Menu */}
        <nav className="hidden md:flex space-x-8 font-bold">
          <a href="#home" className="hover:text-top">Inicio</a>
          <a href="#about" className="hover:text-top">La carta</a>
          <a href="#services" className="hover:text-top">Reservar</a>
          <a href="#contact" className="hover:text-top">Delivery</a>
          <a href="#contact" className="hover:text-top">Contacto</a>
        </nav>

        {/* Menú móvil */}
        <div className="md:hidden">
          <button className="text-primary focus:outline-none">
            <FontAwesomeIcon icon="bars" />
          </button>
        </div>
     </div>
    </header>
  );
};

export default Header;