import React, { useRef, useEffect } from 'react';
import { Frame, Image, Palette, Award, Ruler, Box } from 'lucide-react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, delay }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && cardRef.current) {
          setTimeout(() => {
            if (cardRef.current) {
              cardRef.current.style.opacity = '1';
              cardRef.current.style.transform = 'translateY(0)';
            }
          }, delay);
        }
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, [delay]);

  return (
    <div
      ref={cardRef}
      className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer"
      style={{
        opacity: 0,
        transform: 'translateY(30px)',
        transition: 'opacity 0.6s ease-out, transform 0.6s ease-out'
      }}
    >
      <div className="w-14 h-14 flex items-center justify-center rounded-full bg-gray-100 text-black mb-6 group-hover:bg-black group-hover:text-white transition-all duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const Services: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && headingRef.current) {
          headingRef.current.style.opacity = '1';
          headingRef.current.style.transform = 'translateY(0)';
        }
      },
      { threshold: 0.1 }
    );

    if (headingRef.current) {
      observer.observe(headingRef.current);
    }

    return () => {
      if (headingRef.current) {
        observer.unobserve(headingRef.current);
      }
    };
  }, []);

  const services = [
    {
      icon: <Frame size={28} />,
      title: "Custom Framing",
      description: "Tailor-made frames designed to perfectly complement your artwork or photos with precision and care.",
      delay: 100
    },
    {
      icon: <Image size={28} />,
      title: "Photo Printing",
      description: "High-quality photo printing services that ensure your memories are preserved with vibrant colors and sharp details.",
      delay: 200
    },
    {
      icon: <Palette size={28} />,
      title: "Art Consultation",
      description: "Expert advice on choosing the perfect frame, matting, and glass options to enhance your artwork.",
      delay: 300
    },
    {
      icon: <Award size={28} />,
      title: "Certificate Framing",
      description: "Preserve and display your achievements with our specialized certificate and diploma framing services.",
      delay: 400
    },
    {
      icon: <Ruler size={28} />,
      title: "Made to Measure",
      description: "Precise measurements and custom sizing for frames that perfectly fit any artwork or photograph you have.",
      delay: 500
    },
    {

      icon: <Box size={28} />,
      title: "Courier Service",
      description: "Reliable door-to-door delivery for your framed artwork and photos, ensuring they reach you safely and on time.",
      delay: 600
    }


  ];

  return (
    <div id="services" ref={sectionRef} className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div
          ref={headingRef}
          className="text-center mb-16"
          style={{
            opacity: 0,
            transform: 'translateY(30px)',
            transition: 'opacity 0.6s ease-out, transform 0.6s ease-out'
          }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            From custom framing to fine art printing, we offer comprehensive services
            to showcase your memories and artwork in the most beautiful way.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              delay={service.delay}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;