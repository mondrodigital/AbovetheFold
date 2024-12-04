import React from 'react';
import { Menu } from 'lucide-react';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 p-6">
      <nav className="flex justify-between items-center">
        <div className="text-2xl font-bold">Mondro™</div>
        <Menu className="w-6 h-6 cursor-pointer" />
      </nav>
    </header>
  );
};

export default Header;