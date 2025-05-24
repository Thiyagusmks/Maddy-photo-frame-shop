import React, { useRef, useEffect } from 'react';
import { Phone, Instagram, Mail, MapPin } from 'lucide-react';

const Contact: React.FC = () => {
  const contactRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.setAttribute('style', 'opacity: 1; transform: translateY(0);');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (contactRef.current) {
      observer.observe(contactRef.current);
    }

    return () => {
      if (contactRef.current) {
        observer.unobserve(contactRef.current);
      }
    };
  }, []);

  return (
    <div
      id="contact"
      ref={contactRef}
      className="py-24 bg-gray-50"
      style={{
        opacity: 0,
        transform: 'translateY(40px)',
        transition: 'opacity 0.8s ease-out, transform 0.8s ease-out',
      }}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Contact Us</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Have a question or want to inquire about our services? Reach out to us and we'll get back to you as soon as possible.
          </p>
        </div>

        {/* Centered Contact Info Card */}
        <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-8 text-center">
          <div className="flex flex-col items-center gap-4 mb-8">
            <img src="new logo.jpg" alt="Maddy Frame Shop Logo" className="h-16 w-auto" />
            <h3 className="text-2xl font-bold">MADDY FRAME SHOP</h3>
          </div>

          <p className="text-gray-600 mb-8">
            We're passionate about helping you preserve your memories in beautiful, high-quality frames that will last for generations.
          </p>

          <div className="space-y-6 text-left">
            <div className="flex items-center gap-4">
              <Phone className="text-blue-600" size={20} />
              <div>
                <h4 className="font-medium text-gray-900">Phone</h4>
                <a href="tel:+916383960858" className="text-gray-600 hover:text-blue-500 transition-colors">
                  +91 6383960858
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <Instagram className="text-pink-600" size={20} />
              <div>
                <h4 className="font-medium text-gray-900">Instagram</h4>
                <a
                  href="https://www.instagram.com/maddy__shop_arul_?igsh=MWd3c3Jua3VkdGl5Mw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-pink-500 transition-colors"
                >
                  @maddy_shop_arul
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <Mail className="text-yellow-600" size={20} />
              <div>
                <h4 className="font-medium text-gray-900">Email</h4>
                <a href="pbharath05022005@gmail.com" className="text-gray-600 hover:text-yellow-500 transition-colors">
                  pbharath05022005@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <MapPin className="text-green-600" size={20} />
              <div>
                <h4 className="font-medium text-gray-900">Address</h4>
                <p className="text-gray-600">
                  NO:35, SRI VANNIYA PERUMAL KOVIL STREET, MUDALIARPET, PUDUCHERRY
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 text-sm text-gray-500">
            Visit us during business hours:
            <br />
            Monday - Saturday: 9AM - 6PM
            <br />
            Sunday - Holiday
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
