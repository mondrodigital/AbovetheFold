import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ImageCarousel from './components/ImageCarousel';
import LogoScroll from './components/LogoScroll';

function App() {
  return (
    <div className="relative bg-white min-h-screen">
      <Header />
      <main className="flex flex-col lg:flex-row">
        <div className="w-full lg:w-[55%] px-6 lg:pl-24 flex flex-col justify-between min-h-screen">
          <Hero />
          <LogoScroll />
        </div>
        <ImageCarousel /> {/* Ensure this is present */}
      </main>
    </div>
  );
}

export default App;