
import { useEffect, useState } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Welcome from '@/components/Welcome';

const Index = () => {
  const [showWelcome, setShowWelcome] = useState(true);

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

  return (
    <>
      {showWelcome && <Welcome onComplete={() => setShowWelcome(false)} />}
      <div className={`min-h-screen bg-background transition-opacity duration-1000 ${showWelcome ? 'opacity-0' : 'opacity-100'}`}>
        <Header />
        <main>
          <div className="section-fade-in">
            <Hero />
          </div>
        <div className="section-fade-in">
          <Skills />
        </div>
        <div className="section-fade-in">
          <Experience />
        </div>
        <div className="section-fade-in">
          <Projects />
        </div>
        <div className="section-fade-in">
          <Contact />
        </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
