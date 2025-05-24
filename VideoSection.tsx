import React, { useState, useRef, useEffect } from 'react';
import { Download, Play, Pause, Volume2, VolumeX } from 'lucide-react';

const VideoSection: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Sample video URL - replace with your actual video
  const videoUrl = "video.mp4";
  const downloadFileName = "maddy-frame-shop-video.mp4";

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible && containerRef.current) {
      containerRef.current.style.opacity = '1';
      containerRef.current.style.transform = 'translateY(0)';
    }
  }, [isVisible]);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      const progress = (videoRef.current.currentTime / videoRef.current.duration) * 100;
      setProgress(progress);
    }
  };

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    if (videoRef.current) {
      const progressBar = e.currentTarget;
      const clickPosition = e.clientX - progressBar.getBoundingClientRect().left;
      const percentClicked = (clickPosition / progressBar.offsetWidth) * 100;
      setProgress(percentClicked);
      videoRef.current.currentTime = (percentClicked / 100) * videoRef.current.duration;
    }
  };

  return (
    <div
      id="video-section"
      ref={containerRef}
      className="py-24 bg-white"
      style={{
        opacity: 0,
        transform: 'translateY(40px)',
        transition: 'opacity 0.8s ease-out, transform 0.8s ease-out'
      }}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Craftsmanship</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Watch how we transform ordinary photos into extraordinary framed memories with precision and care.
          </p>
        </div>

        <div className="max-w-4xl mx-auto rounded-xl overflow-hidden shadow-2xl bg-black">
          <div className="relative">
            <video
              ref={videoRef}
              className="w-full h-auto"
              src={videoUrl}
              onTimeUpdate={handleTimeUpdate}
              onEnded={() => setIsPlaying(false)}
              onClick={togglePlay}
              muted={isMuted}
            />

            <div className="absolute inset-0 flex items-center justify-center">
              {!isPlaying && (
                <button
                  onClick={togglePlay}
                  className="w-20 h-20 flex items-center justify-center bg-white/30 backdrop-blur-sm rounded-full hover:bg-white/40 transition-all duration-300"
                >
                  <Play size={36} className="text-white ml-1" />
                </button>
              )}
            </div>

            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
              <div
                className="w-full h-1 bg-gray-600 rounded-full mb-4 cursor-pointer"
                onClick={handleSeek}
              >
                <div
                  className="h-full bg-yellow-500 rounded-full"
                  style={{ width: `${progress}%`, transition: 'width 0.1s linear' }}
                ></div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <button
                    onClick={togglePlay}
                    className="text-white hover:text-yellow-400 transition-colors"
                  >
                    {isPlaying ? <Pause size={24} /> : <Play size={24} />}
                  </button>

                  <button
                    onClick={toggleMute}
                    className="text-white hover:text-yellow-400 transition-colors"
                  >
                    {isMuted ? <VolumeX size={24} /> : <Volume2 size={24} />}
                  </button>
                </div>

                <a
                  href={videoUrl}
                  download={downloadFileName}
                  className="flex items-center gap-1 text-white hover:text-yellow-400 transition-colors"
                >
                  <Download size={20} />
                  <span>Download</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoSection;