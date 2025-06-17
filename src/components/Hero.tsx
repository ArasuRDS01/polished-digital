
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const Hero = () => {
  const handleDownloadCV = () => {
    // This would typically download a PDF file
    console.log('Downloading CV...');
  };


   const handleLinkedInClick = () => {
    window.open('https://linkedin.com/in/elavarasan-r-419128223', '_blank');
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
                  src="/lovable-uploads/4a71d8ff-02fd-4090-b483-ede88521a52a.png"
                  alt="Professional headshot"
                  className="w-80 h-80 object-cover rounded-lg shadow-lg" />
                <div className="absolute inset-0 portfolio-gradient opacity-10 rounded-lg"></div>
              </div>
            </Card>
          </div>

          {/* Right Column - Introduction */}
          <div className="space-y-6 text-center lg:text-left">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold">
                <span className="block">Hi I'm</span>
                <span className="block">Elavarasan R</span>
                <span className="block portfolio-gradient bg-clip-text text-transparent">
                  Web Developer
                </span>
              </h1>

              <h2 className="text-xl lg:text-2xl text-muted-foreground font-medium">
                Full Stack Web Developer
              </h2>

              <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
                Enthusiastic and self-driven web developer with foundational knowledge in HTML, CSS, and JavaScript.
                Currently learning React.js and backend technologies to build full stack applications.
                Strong interest in creating responsive, user-friendly interfaces and scalable solutions.
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
}

export default Hero;
