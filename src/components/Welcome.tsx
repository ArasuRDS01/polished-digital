import { useEffect, useState } from 'react';

interface WelcomeProps {
  onComplete: () => void;
}

const Welcome = ({ onComplete }: WelcomeProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const timer = setTimeout(() => {
      onComplete();
    }, 1500);
    
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div 
      className={`fixed inset-0 z-50 flex items-center justify-center bg-background transition-all duration-1000 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className="text-center space-y-8 px-4">
        <div className="space-y-4">
          <h1 className="text-5xl md:text-7xl font-bold animate-fade-in">
            Welcome to My Portfolio
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground animate-fade-in" style={{ animationDelay: '0.3s' }}>
            Discover my journey as a web developer
          </p>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
