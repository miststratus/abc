import React from 'react';

const FooterCTA: React.FC = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-magi-dark via-magi-dark to-transparent md:relative md:bg-none md:p-0 md:mb-20 text-center z-50">
      <a 
        href="https://share.crack.wrtn.ai/kz55pho" 
        target="_blank" 
        rel="noopener noreferrer"
        className="w-full md:w-auto md:px-20 py-4 bg-gradient-to-r from-magi-accent to-yellow-600 text-black font-bold text-lg rounded-full shadow-[0_0_20px_rgba(245,158,11,0.5)] hover:shadow-[0_0_40px_rgba(245,158,11,0.8)] hover:scale-105 transition-transform flex items-center justify-center gap-2 mx-auto"
      >
        <span className="animate-spin-slow">✨</span>
        <span>에르제이라 입장하기</span>
      </a>
    </div>
  );
};

export default FooterCTA;