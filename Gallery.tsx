import React, { useRef, useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Gallery: React.FC = () => {
  const galleryRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  // Sample gallery items - replace with your actual images
  const galleryItems = [
    {
      image: "ChatGPT Image May 21, 2025, 11_36_57 AM.png",
      title: "Classic Wooden Frame",
      description: "Crafted with vintage charm and modern strength"
    },
    {
      image: "ChatGPT Image May 22, 2025, 09_29_41 AM.png",
      title: "Minimalist Black Frame",
      description: "Ideal for studio or modern living spaces"
    },
    {
      image: "ChatGPT Image May 22, 2025, 09_34_08 AM.png",
      title: "Rustic Wall Display",
      description: "Perfect for cozy, homey interiors"
    },
    {
      image: "WhatsApp Image 2025-05-21 at 09.21.01_48da30e6.jpg",
      title: "Elegant White Frame",
      description: "Sophisticated simplicity for any decor"
    },
    {
      image: "girl.jpg",
      title: "Custom Multi-Frame",
      description: "Showcase multiple memories in one piece"
    },
    {
      image: "Untitled design (1).png", // 🔁 Replace with your actual file name
      title: "Vintage Gold Frame",
      description: "Adds a touch of regal elegance to your portraits"
    },
    {
      image: "tuxpi.com.1748003542.jpg", // 🔁 Replace with your actual file name
      title: "Floating Canvas Frame",
      description: "Modern look with sleek edge presentation"
    },
    {
      image: "bhara.png", // 🔁 Replace with your actual file name
      title: "Floating Canvas Frame",
      description: "Modern look with sleek edge presentation"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (galleryRef.current) {
      observer.observe(galleryRef.current);
    }

    return () => {
      if (galleryRef.current) {
        observer.unobserve(galleryRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible && galleryRef.current) {
      galleryRef.current.style.opacity = '1';
      galleryRef.current.style.transform = 'translateY(0)';
    }
  }, [isVisible]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === galleryItems.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? galleryItems.length - 1 : prevIndex - 1
    );
  };

  return (
    <div
      id="gallery"
      ref={galleryRef}
      className="py-24 bg-white overflow-hidden"
      style={{
        opacity: 0,
        transform: 'translateY(40px)',
        transition: 'opacity 0.8s ease-out, transform 0.8s ease-out'
      }}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Gallery</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Browse through our collection of beautifully crafted frames and installations
            that showcase our attention to detail and quality craftsmanship.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          <div className="overflow-hidden rounded-xl shadow-2xl">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {galleryItems.map((item, index) => (
                <div key={index} className="min-w-full">
                  <div className="relative aspect-video">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                    <div className="absolute bottom-0 left-0 p-6 text-white">
                      <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                      <p className="text-sm md:text-base opacity-90">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={prevSlide}
            className="absolute top-1/2 left-4 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-white/30 backdrop-blur-sm rounded-full hover:bg-white/50 transition-all duration-300 z-10"
          >
            <ChevronLeft size={24} className="text-white" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute top-1/2 right-4 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-white/30 backdrop-blur-sm rounded-full hover:bg-white/50 transition-all duration-300 z-10"
          >
            <ChevronRight size={24} className="text-white" />
          </button>

          <div className="flex justify-center mt-6 gap-2">
            {galleryItems.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex ? 'bg-black scale-125' : 'bg-gray-300'
                  }`}
              />
            ))}
          </div>
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
          {galleryItems.map((item, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-lg shadow-md cursor-pointer group"
              onClick={() => setCurrentIndex(index)}
            >
              <div className="relative aspect-square">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;