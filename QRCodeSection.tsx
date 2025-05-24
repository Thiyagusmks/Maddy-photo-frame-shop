import React, { useRef, useEffect, useState } from 'react';

const QRCodeSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const qrCodePath = 'qr code.jpg'; // Replace with your actual QR code path

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible && sectionRef.current) {
      sectionRef.current.style.opacity = '1';
      sectionRef.current.style.transform = 'translateY(0)';
    }
  }, [isVisible]);

  const handleCopyPath = () => {
    navigator.clipboard.writeText(qrCodePath);
    alert('QR Code path copied to clipboard!');
  };

  return (
    <div
      ref={sectionRef}
      className="py-24 bg-white"
      style={{
        opacity: 0,
        transform: 'translateY(40px)',
        transition: 'opacity 0.8s ease-out, transform 0.8s ease-out'
      }}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-blue-50 to-pink-50 rounded-2xl shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-8 md:p-12 flex items-center">
              <div>
                <h2 className="text-3xl font-bold mb-4">Connect With Us</h2>
                <p className="text-gray-600 mb-6">
                  Scan our QR code to instantly access our website, view our latest frames,
                  and get in touch with us for custom framing solutions.
                </p>
                <button
                  onClick={handleCopyPath}
                  className="flex items-center justify-center gap-2 px-6 py-3 bg-black text-white rounded-lg hover:bg-black/80 transition-all duration-300"
                >
                  Copy QR Code Path
                </button>
              </div>
            </div>

            <div className="bg-white p-8 md:p-12 flex items-center justify-center">
              <div className="w-48 h-48 md:w-64 md:h-64 bg-white p-4 rounded-xl shadow-md flex items-center justify-center">
                <img
                  src={qrCodePath}
                  alt="QR Code"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default QRCodeSection;
