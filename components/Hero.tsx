import React from 'react';
import { HERO_IMAGE_URL } from '../constants';

const Hero: React.FC = () => {
  return (
    <header class="relative w-full h-[60vh] md:h-screen overflow-hidden">
      <img 
        src={HERO_IMAGE_URL} 
        alt="에르제이라 왕국 전경" 
        className="absolute inset-0 w-full h-full object-cover opacity-60"
      />
      
      <div className="absolute inset-0 bg-gradient-to-t from-magi-dark via-magi-dark/50 to-transparent"></div>

      <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4 z-10 mt-10 md:mt-0">
        <span className="text-magi-accent font-serif tracking-widest text-sm md:text-lg mb-2 animate-pulse">
          원작 &lt;용사는 오늘도 나아간다&gt; 기반
        </span>
        <h1 className="font-fantasy text-4xl md:text-7xl text-white font-bold mb-4 text-shadow tracking-tighter">
          FATE REWRITE
        </h1>
        <p className="font-serif text-xl md:text-3xl text-gray-300 mb-8 max-w-2xl leading-relaxed">
          "정해진 파멸을 거스르는<br className="md:hidden" /> 유일한 <span className="text-magi-accent">오류</span>가 되어주세요."
        </p>
      </div>
    </header>
  );
};

export default Hero;