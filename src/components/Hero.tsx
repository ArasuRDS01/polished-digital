import { useState } from 'react';
import { Code2, Braces, Database, Terminal, FileCode, GitBranch } from 'lucide-react';

const Hero = () => {
  const [hoveredSymbol, setHoveredSymbol] = useState<number | null>(null);
  const [isTextHovered, setIsTextHovered] = useState(false);

  const programmingSymbols = [
    { icon: Code2, label: 'HTML/CSS', color: 'hsl(16, 100%, 50%)' },
    { icon: Braces, label: 'JavaScript', color: 'hsl(53, 93%, 54%)' },
    { icon: FileCode, label: 'React', color: 'hsl(193, 95%, 68%)' },
    { icon: Terminal, label: 'Node.js', color: 'hsl(120, 100%, 30%)' },
    { icon: Database, label: 'Database', color: 'hsl(221, 83%, 53%)' },
    { icon: GitBranch, label: 'Git', color: 'hsl(14, 100%, 53%)' },
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text with Animation */}
          <div 
            className="text-center lg:text-left space-y-6 animate-fade-in"
            onMouseEnter={() => setIsTextHovered(true)}
            onMouseLeave={() => setIsTextHovered(false)}
          >
            <h1 
              className={`text-5xl lg:text-7xl font-bold transition-all duration-500 ${
                isTextHovered ? 'scale-110 portfolio-gradient bg-clip-text text-transparent' : ''
              }`}
            >
              <span className="block">Hi</span>
              <span className="block">This is My</span>
              <span className="block">Portfolio Website</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Explore my projects and skills
            </p>
          </div>

          {/* Right Column - Programming Symbols with Animation */}
          <div className="grid grid-cols-3 gap-6 animate-slide-in-right">
            {programmingSymbols.map((symbol, index) => {
              const Icon = symbol.icon;
              const isHovered = hoveredSymbol === index;
              
              return (
                <div
                  key={index}
                  className={`
                    relative flex flex-col items-center justify-center p-8
                    rounded-lg border-2 transition-all duration-500 cursor-pointer
                    ${isHovered ? 'animate-float scale-110 shadow-2xl' : 'border-border'}
                  `}
                  style={{
                    borderColor: isHovered ? symbol.color : undefined,
                    boxShadow: isHovered ? `0 0 30px ${symbol.color}40` : undefined,
                  }}
                  onMouseEnter={() => setHoveredSymbol(index)}
                  onMouseLeave={() => setHoveredSymbol(null)}
                >
                  <Icon 
                    size={48} 
                    className="transition-all duration-500"
                    style={{ 
                      color: isHovered ? symbol.color : 'hsl(var(--muted-foreground))',
                    }}
                  />
                  <span 
                    className={`
                      mt-3 text-sm font-medium transition-all duration-300
                      ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}
                    `}
                    style={{ color: isHovered ? symbol.color : undefined }}
                  >
                    {symbol.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
