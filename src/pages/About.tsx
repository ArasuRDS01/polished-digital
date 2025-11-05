import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const About = () => {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.section-fade-in');
    animatedElements.forEach((el) => observer.observe(el));

    return () => {
      animatedElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

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
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <section className="min-h-screen flex items-center justify-center pt-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl w-full">
            <div className="grid lg:grid-cols-2 gap-12 items-center section-fade-in">
              {/* Left Column - Profile Image */}
              <div className="flex justify-center lg:justify-start">
                <Card className="p-8 hover-scale">
                  <div className="relative">
                    <img
                      src="/lovable-uploads/4a71d8ff-02fd-4090-b483-ede88521a52a.png"
                      alt="Professional headshot"
                      className="w-80 h-80 object-cover rounded-lg shadow-lg"
                    />
                    <div className="absolute inset-0 portfolio-gradient opacity-10 rounded-lg"></div>
                  </div>
                </Card>
              </div>

              {/* Right Column - About Me Content */}
              <div className="space-y-6 text-center lg:text-left">
                <div className="space-y-4">
                  <h1 className="text-4xl lg:text-6xl font-bold">
                    <span className="block">About</span>
                    <span className="block portfolio-gradient bg-clip-text text-transparent">
                      Me
                    </span>
                  </h1>

                  <h2 className="text-2xl lg:text-3xl font-semibold">
                    Elavarasan R
                  </h2>

                  <p className="text-xl text-muted-foreground">
                    Web Developer
                  </p>

                  <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                    <p>
                      Enthusiastic and self-driven web developer with foundational knowledge in HTML, CSS, and JavaScript.
                      Currently learning React.js and backend technologies to build full stack applications.
                    </p>
                    <p>
                      Strong interest in creating responsive, user-friendly interfaces and scalable solutions.
                      I am passionate about continuous learning and staying updated with the latest web technologies.
                    </p>
                    <p>
                      My goal is to contribute to innovative projects and grow as a professional developer
                      while delivering high-quality, efficient web applications.
                    </p>
                  </div>
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
      </main>
      <Footer />
    </div>
  );
};

export default About;
