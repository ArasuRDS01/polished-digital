import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const About = () => {
  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/elavarasan_Resume.pdf';
    link.download = 'Elavarasan_Resume.pdf';
    link.click();
  };

  const handleLinkedInClick = () => {
    window.open('https://linkedin.com/in/elavarasan-r-419128223', '_blank');
  };

  return (
    <section id="about" className="relative min-h-screen flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5"></div>
      
      {/* Animated Pattern Overlay */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="max-w-7xl w-full relative z-10">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">About Me</h2>
          <div className="h-1 w-20 portfolio-gradient mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Profile Image */}
          <div className="flex justify-center lg:justify-start animate-fade-in" style={{ animationDelay: '0.2s', animationFillMode: 'both' }}>
            <Card className="p-8 hover-scale">
              <div className="relative">
                <img
                  src="/uploads/4a71d8ff-02fd-4090-b483-ede88521a52a.png"
                  alt="Professional headshot of Elavarasan R"
                  className="w-80 h-80 object-cover rounded-lg shadow-lg"
                />
                <div className="absolute inset-0 portfolio-gradient opacity-10 rounded-lg"></div>
              </div>
            </Card>
          </div>

          {/* Right Column - Introduction */}
          <div className="space-y-6 text-center lg:text-left animate-fade-in" style={{ animationDelay: '0.4s', animationFillMode: 'both' }}>
            <div className="space-y-4">
              <h3 className="text-3xl lg:text-4xl font-bold">
                <span className="block">Hi I'm</span>
                <span className="block">Elavarasan R</span>
                <span className="block portfolio-gradient bg-clip-text text-transparent">
                  Web Developer
                </span>
              </h3>

              <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
                Enthusiastic and self-driven web developer with foundational knowledge in HTML, CSS, and JavaScript.
                Currently learning React.js and backend technologies to build full stack applications.
                Strong interest in creating responsive, user-friendly interfaces and scalable solutions.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in" style={{ animationDelay: '0.6s', animationFillMode: 'both' }}>
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

export default About;
