import React, { useState, useEffect } from 'react';
import { Menu, X, Instagram, Phone } from 'lucide-react';
// Removed: import FrameLogo from './FrameLogo';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#" className="flex items-center gap-2">
          <img src="new logo.jpg" alt="Maddy Frame Shop Logo" className="h-10 w-auto" />

          <div className={`transition-all duration-300 ${scrolled ? 'text-black' : 'text-black'}`}>
            <h1 className="font-bold text-xl md:text-2xl tracking-tight">MADDY FRAME SHOP</h1>
          </div>
        </a>

        <div className="hidden md:flex items-center gap-8">
          <a href="#home" className={`transition-all duration-300 hover:text-yellow-500 ${scrolled ? 'text-black' : 'text-black'}`}>Home</a>
          <a href="#services" className={`transition-all duration-300 hover:text-pink-500 ${scrolled ? 'text-black' : 'text-black'}`}>Services</a>
          <a href="#gallery" className={`transition-all duration-300 hover:text-blue-500 ${scrolled ? 'text-black' : 'text-black'}`}>Gallery</a>
          <a href="#contact" className={`transition-all duration-300 hover:text-yellow-500 ${scrolled ? 'text-black' : 'text-black'}`}>Contact</a>

          <div className="flex items-center gap-4">
            <a href="tel:+916383960858" className="flex items-center gap-1 text-black hover:text-blue-500 transition-all">
              <Phone size={18} />
              <span className="hidden lg:inline">+91 6383960858</span>
            </a>
            <a href="https://www.instagram.com/maddy__shop_arul_?igsh=MWd3c3Jua3VkdGl5Mw%3D%3D" target="_blank" rel="noopener noreferrer" className="text-black hover:text-pink-500 transition-all">
              <Instagram size={20} />
            </a>
          </div>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-black focus:outline-none"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden absolute w-full bg-white shadow-lg transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 py-4' : 'max-h-0 overflow-hidden'}`}>
        <div className="container mx-auto px-4 flex flex-col gap-4">
          <a href="#home" className="py-2 hover:text-yellow-500 transition-all" onClick={() => setIsOpen(false)}>Home</a>
          <a href="#services" className="py-2 hover:text-pink-500 transition-all" onClick={() => setIsOpen(false)}>Services</a>
          <a href="#gallery" className="py-2 hover:text-blue-500 transition-all" onClick={() => setIsOpen(false)}>Gallery</a>
          <a href="#contact" className="py-2 hover:text-yellow-500 transition-all" onClick={() => setIsOpen(false)}>Contact</a>

          <div className="flex items-center gap-4 py-2">
            <a href="tel:+916383960858" className="flex items-center gap-1 text-black hover:text-blue-500 transition-all">
              <Phone size={18} />
              <span>+91 6383960858</span>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-black hover:text-pink-500 transition-all">
              <Instagram size={20} />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
