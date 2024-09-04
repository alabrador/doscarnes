import React from 'react';
import hero from '../img/hero/top_1.jpg';

const Hero = () => {
  return (
    <div className="relative h-screem bg-no-repeat bg-cover bg-top">
      <img src={hero} alt="hero" />
      <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col justify-center items-center text-center p-4">
        <h1 className="text-white text-4xl md:text-6xl font-bold mb-4">
        ¡Bienvenidos a Dos Carnes!
        </h1>
        <p className="text-white text-lg md:text-2xl mb-8">
        Cada bocado es una celebración de nuestras raíces, y estamos <br /> 
        encantados de compartirlo contigo. ¡Siéntete como en casa y déjate llevar <br /> 
        por el sabor venezolano!<br /> 
        ¡Buen provecho!
        </p>
        <button className="bg-primary text-white px-6 py-3 rounded-lg font-medium text-lg hover:bg-opacity-80 transition">
          Aprende Más
        </button>
      </div>
    </div>
  );
};

export default Hero;
