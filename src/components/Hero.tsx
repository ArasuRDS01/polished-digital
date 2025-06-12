
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const Hero = () => {
  const handleDownloadCV = () => {
    // This would typically download a PDF file
    console.log('Downloading CV...');
  };

  const handleLinkedInClick = () => {
    window.open('https://linkedin.com/in/yourprofile', '_blank');
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Profile Image */}
          <div className="flex justify-center lg:justify-start">
            <Card className="p-8 hover-scale">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=400&fit=crop&crop=face"
                  alt="Professional headshot"
                  className="w-80 h-80 object-cover rounded-lg shadow-lg"
                />
                <div className="absolute inset-0 portfolio-gradient opacity-10 rounded-lg"></div>
              </div>
            </Card>
          </div>

          {/* Right Column - Introduction */}
          <div className="space-y-6 text-center lg:text-left">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold">
                <span className="block">Elavarasan R</span>
                <span className="block portfolio-gradient bg-clip-text text-transparent">
                 Web Developer 
                </span>
              </h1>
              
              <h2 className="text-xl lg:text-2xl text-muted-foreground font-medium">
                Full Stack Web Developer
              </h2>
              
              <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
                Passionate web developer with expertise in modern technologies. 
                I create beautiful, responsive, and user-friendly applications that 
                solve real-world problems. With a strong foundation in both frontend 
                and backend development, I bring ideas to life through clean, 
                efficient code.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                onClick={handleDownloadCV}
                size="lg"
                className="portfolio-gradient hover:opacity-90 transition-opacity"
              >
                Download CV
              </Button>
              
              <Button 
                onClick={handleLinkedInClick}
                variant="outline" 
                size="lg"
                className="hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                LinkedIn Profile
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
