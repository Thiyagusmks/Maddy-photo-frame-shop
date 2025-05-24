import React, { useEffect, useRef } from 'react';

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const heroElement = heroRef.current;
    const textElement = textRef.current;

    if (heroElement && textElement) {
      heroElement.style.opacity = '0';
      textElement.style.transform = 'translateY(20px)';
      textElement.style.opacity = '0';

      setTimeout(() => {
        heroElement.style.transition = 'opacity 1s ease-in-out';
        heroElement.style.opacity = '1';

        setTimeout(() => {
          textElement.style.transition = 'all 0.8s ease-out';
          textElement.style.transform = 'translateY(0)';
          textElement.style.opacity = '1';
        }, 500);
      }, 300);
    }
  }, []);

  return (
    <div id="home" ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-50">
      <div className="absolute inset-0 bg-gradient-to-r from-black/5 to-black/10 z-0"></div>

      <div
        className="absolute inset-0 z-0 bg-grid-pattern"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(200, 200, 200, 0.1) 1px, transparent 1px), 
                            linear-gradient(to bottom, rgba(200, 200, 200, 0.1) 1px, transparent 1px)`,
          backgroundSize: '20px 20px'
        }}
      ></div>

      <div
        className="absolute -bottom-16 -right-16 w-80 h-80 bg-yellow-400/20 rounded-full filter blur-3xl z-0"
        style={{ animation: 'float 8s ease-in-out infinite' }}
      ></div>

      <div
        className="absolute -top-32 -left-32 w-96 h-96 bg-blue-400/20 rounded-full filter blur-3xl z-0"
        style={{ animation: 'float 10s ease-in-out infinite alternate' }}
      ></div>

      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-pink-400/20 rounded-full filter blur-3xl z-0"
        style={{ animation: 'pulse 6s ease-in-out infinite' }}
      ></div>

      <div ref={textRef} className="container mx-auto px-4 relative z-10 text-center">
        <div className="flex flex-col items-center justify-center mb-12">
          {/* Replaced FrameLogo with img tag */}
          <img
            src="new logo.jpg"
            alt="Maddy Frame Shop Logo"
            className="w-32 h-32 object-contain"
          />
          <h1 className="text-4xl md:text-6xl font-bold mt-8 tracking-tight text-black">
            MADDY <span className="text-blue-500">FRAME</span> <span className="text-pink-500">SHOP</span>
          </h1>
          <p className="text-lg md:text-xl mt-6 max-w-2xl mx-auto text-gray-700">
            Crafting perfect frames for your precious memories since 2024.
            Elevate your space with our custom framing solutions.
          </p>
          <div className="flex gap-4 mt-8">
            <a
              href="#gallery"
              className="btn-primary px-6 py-3 bg-black text-white rounded-lg hover:bg-black/80 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Explore Gallery
            </a>
            <a
              href="#contact"
              className="btn-secondary px-6 py-3 bg-white text-black border-2 border-black rounded-lg hover:bg-gray-100 transition-all duration-300"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>

      <style>
        {`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }

        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 0.2; }
          50% { transform: scale(1.2); opacity: 0.3; }
        }
        `}
      </style>
    </div>
  );
};

export default Hero;
