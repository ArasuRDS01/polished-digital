import { useState, useEffect } from 'react';

const Hero = () => {
  const [hoveredSymbol, setHoveredSymbol] = useState<number | null>(null);
  const [hoveredText, setHoveredText] = useState(false);

  const programmingSymbols = [
    { symbol: '</>', label: 'HTML', color: 'text-orange-500' },
    { symbol: '{}', label: 'CSS', color: 'text-blue-500' },
    { symbol: 'fn()', label: 'JavaScript', color: 'text-yellow-500' },
    { symbol: '<React/>', label: 'React', color: 'text-cyan-500' },
    { symbol: 'git', label: 'Git', color: 'text-red-500' },
    { symbol: 'SQL', label: 'Database', color: 'text-green-500' },
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text with Animation */}
          <div 
            className="space-y-6 text-center lg:text-left"
            onMouseEnter={() => setHoveredText(true)}
            onMouseLeave={() => setHoveredText(false)}
          >
            <div className={`transition-all duration-500 ${hoveredText ? 'scale-105 portfolio-gradient bg-clip-text text-transparent' : ''}`}>
              <h1 className="text-5xl lg:text-7xl font-bold mb-4 animate-fade-in">
                Hi
              </h1>
              <h2 className="text-3xl lg:text-5xl font-bold animate-fade-in" style={{ animationDelay: '0.2s' }}>
                This is My
              </h2>
              <h2 className="text-4xl lg:text-6xl font-bold animate-fade-in" style={{ animationDelay: '0.4s' }}>
                Portfolio Website
              </h2>
            </div>
            <p className="text-lg lg:text-xl text-muted-foreground animate-fade-in" style={{ animationDelay: '0.6s' }}>
              Explore my projects and skills
            </p>
          </div>

          {/* Right Side - Programming Symbols Animation */}
          <div className="grid grid-cols-3 gap-6 lg:gap-8">
            {programmingSymbols.map((item, index) => (
              <div
                key={index}
                className={`relative p-6 lg:p-8 rounded-xl bg-card border-2 transition-all duration-500 cursor-pointer hover-scale ${
                  hoveredSymbol === index ? 'border-primary shadow-xl' : 'border-border'
                }`}
                onMouseEnter={() => setHoveredSymbol(index)}
                onMouseLeave={() => setHoveredSymbol(null)}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex flex-col items-center justify-center space-y-3">
                  <span 
                    className={`text-4xl lg:text-5xl font-bold transition-all duration-300 ${
                      hoveredSymbol === index ? item.color : 'text-foreground'
                    }`}
                  >
                    {item.symbol}
                  </span>
                  <span 
                    className={`text-xs lg:text-sm font-medium transition-opacity duration-300 ${
                      hoveredSymbol === index ? 'opacity-100' : 'opacity-0'
                    }`}
                  >
                    {item.label}
                  </span>
                </div>
                
                {/* Animated border effect on hover */}
                {hoveredSymbol === index && (
                  <div className="absolute inset-0 rounded-xl portfolio-gradient opacity-20 animate-pulse"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
