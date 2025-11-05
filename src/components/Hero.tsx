
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const Hero = () => {
  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/elavarasan_Resume.pdf'; // path in the public folder
    link.download = 'Elavarasan_Resume.pdf'; // name for the downloaded file
    link.click();
  };


   const handleLinkedInClick = () => {
    window.open('https://linkedin.com/in/elavarasan-r-419128223', '_blank');
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl w-full">
        <div className="text-center space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl lg:text-7xl font-bold">
              <span className="block portfolio-gradient bg-clip-text text-transparent">
                Welcome to My Portfolio
              </span>
            </h1>

            <p className="text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Explore my work, skills, and professional journey as a web developer
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
    </section>
  );
}

export default Hero;
