import React from 'react';

interface FrameLogoProps {
  size?: number;
}

const FrameLogo: React.FC<FrameLogoProps> = ({ size = 60 }) => {
  return (
    <div style={{ width: size, height: size }} className="relative">
      <div className="absolute inset-0 bg-black" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%, 0 80%, 80% 80%, 80% 20%, 0 20%)' }}></div>
      <div className="absolute inset-0 bg-white" style={{ 
        clipPath: 'polygon(5% 5%, 95% 5%, 95% 95%, 5% 95%, 5% 75%, 75% 75%, 75% 25%, 5% 25%)',
        transform: 'scale(0.95)' 
      }}></div>
      <div className="absolute" style={{ 
        top: '25%', 
        left: '20%', 
        width: '55%', 
        height: '25%',
        backgroundColor: '#FFD700', // Yellow
        clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%, 0 0, 75% 0, 75% 100%, 0 100%)'
      }}></div>
      <div className="absolute" style={{ 
        top: '50%', 
        left: '25%', 
        width: '55%', 
        height: '25%',
        backgroundColor: '#FF4081', // Pink
        clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%, 0 0, 75% 0, 75% 100%, 0 100%)'
      }}></div>
      <div className="absolute" style={{ 
        top: '75%', 
        left: '15%', 
        width: '55%', 
        height: '25%',
        backgroundColor: '#2196F3', // Blue
        clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%, 0 0, 75% 0, 75% 100%, 0 100%)'
      }}></div>
    </div>
  );
};

export default FrameLogo;