import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import VideoSection from './components/VideoSection';
import Services from './components/Services';
import Gallery from './components/Gallery';
import QRCodeSection from './components/QRCodeSection';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { initializeScrollAnimations } from './utils/animations';

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