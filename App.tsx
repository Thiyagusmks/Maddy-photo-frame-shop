import React, { useEffect } from 'react';
import Navbar from './src/components/Navbar.tsx';
import Hero from './src/components/Hero.tsx';
import VideoSection from './src/components/VideoSection.tsx';
import Services from './src/components/Services.tsx';
import Gallery from './src/components/Gallery.tsx';
import QRCodeSection from './src/components/QRCodeSection.tsx';
import Contact from './src/components/Contact.tsx';
import Footer from './src/components/Footer.tsx';
import { initializeScrollAnimations } from './src/utils/animations';

function App() {
  useEffect(() => {
    // Set page title
    document.title = 'Maddy Frame Shop';
    
    // Initialize scroll animations
    initializeScrollAnimations();
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href')?.substring(1);
        if (!targetId) return;
        
        const targetElement = document.getElementById(targetId);
        if (!targetElement) return;
        
        window.scrollTo({
          top: targetElement.offsetTop - 80, // Account for fixed header
          behavior: 'smooth'
        });
      });
    });
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <VideoSection />
      <Services />
      <Gallery />
      <QRCodeSection />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
