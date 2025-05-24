import React from 'react';
import { Instagram, Phone, Mail, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Logo & Social */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <img
                src="new logo.jpg"
                alt="Maddy Frame Shop Logo"
                className="h-10 w-auto rounded-md"
              />
              <h3 className="text-xl font-bold">MADDY FRAME SHOP</h3>
            </div>
            <p className="text-gray-400 mb-6">
              Crafting perfect frames for your precious memories since 2024
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/maddy__shop_arul_?igsh=MWd3c3Jua3VkdGl5Mw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-pink-500 transition-all duration-300"
              >
                <Instagram size={20} />
              </a>
              <a
                href="tel:+916383960858"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-blue-500 transition-all duration-300"
              >
                <Phone size={20} />
              </a>
              <a
                href="pbharath05022005@gmail.com"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-yellow-500 transition-all duration-300"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#home" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Services</a></li>
              <li><a href="#gallery" className="text-gray-400 hover:text-white transition-colors">Gallery</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Services</h4>
            <ul className="space-y-3">
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Custom Framing</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Photo Printing</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Art Consultation</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Certificate Framing</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone size={18} className="text-gray-400 mt-1 flex-shrink-0" />
                <span className="text-gray-400">+91 6383960858</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={18} className="text-gray-400 mt-1 flex-shrink-0" />
                <span className="text-gray-400">pbharath05022005@gmail.com</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-gray-400 mt-1 flex-shrink-0" />
                <span className="text-gray-400">NO:35, SRI VANNIYA PERUMAL KOVIL STREET, MUDALIARPET, PUDUCHERRY</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="pt-8 border-t border-white/20 text-center text-gray-500 text-sm">
          <p>© {currentYear} Maddy Frame Shop. All rights reserved.</p>
          <p className="mt-2">
            When you scan our QR code, you'll be connected directly to our website for the latest offerings and promotions.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
