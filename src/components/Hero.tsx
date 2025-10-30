import { Button } from '@/components/ui/button';
import { useTypingEffect } from '@/hooks/useTypingEffect';

const Hero = () => {
  const typedText = useTypingEffect('Front Developer', 150);

  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/elavarasan_Resume.pdf';
    link.download = 'Elavarasan_Resume.pdf';
    link.click();
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Animated Programming Symbol */}
      <div className="absolute top-20 right-10 animate-bounce opacity-20 text-9xl font-mono">
        &lt;/&gt;
      </div>
      <div className="absolute bottom-20 left-10 animate-pulse opacity-10 text-8xl font-mono">
        &#123;&#125;
      </div>
      
      <div className="max-w-7xl w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Programming GIF */}
          <div className="flex justify-center lg:justify-start order-2 lg:order-1">
            <div className="relative group hover-scale">
              <img
                src="https://media.giphy.com/media/qgQUggAC3Pfv687qPC/giphy.gif"
                alt="Programming animation"
                className="w-full max-w-md rounded-lg shadow-lg transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 portfolio-gradient opacity-0 group-hover:opacity-20 rounded-lg transition-opacity duration-300"></div>
            </div>
          </div>

          {/* Right Column - Introduction with Typing Effect */}
          <div className="space-y-6 text-center lg:text-left order-1 lg:order-2">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold">
                <span className="block">Hi I'm</span>
                <span className="block">Elavarasan R</span>
                <span className="block portfolio-gradient bg-clip-text text-transparent min-h-[1.2em]">
                  {typedText}<span className="animate-pulse">|</span>
                </span>
              </h1>

              <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
                Enthusiastic and self-driven web developer with foundational knowledge in HTML, CSS, and JavaScript.
                Currently learning React.js and backend technologies to build full stack applications.
                Strong interest in creating responsive, user-friendly interfaces and scalable solutions.
              </p>
            </div>

            <div className="flex justify-center lg:justify-start">
              <Button
                onClick={handleDownloadCV}
                size="lg"
                className="portfolio-gradient hover:opacity-90 transition-opacity"
              >
                Download CV
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
