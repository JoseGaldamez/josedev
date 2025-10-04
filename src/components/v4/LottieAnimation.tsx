// components/LottieAnimation.js
import React from 'react';
import Lottie from 'lottie-react';

// El archivo JSON de Lottie puede ser importado directamente
// Asegúrate de que la ruta sea correcta
import animationData from './Man_Using_laptop.json'; 

const style = {
  height: 300,
};

const LottieAnimation = () => {
  return (
    <Lottie 
      animationData={animationData} 
      style={style} 
      loop={true}      // Repetir la animación
      autoplay={true}  // Iniciar automáticamente
    />
  );
};

export default LottieAnimation;