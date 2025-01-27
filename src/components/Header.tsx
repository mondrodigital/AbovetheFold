import React from 'react';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="px-[clamp(1.5rem,5vw,12rem)] py-8">
        <img 
          src="/Unscroll Logo.png" 
          alt="Unscroll" 
          className="h-[clamp(6rem,10vw,8rem)] w-auto"
        />
      </div>
    </header>
  );
};

export default Header;