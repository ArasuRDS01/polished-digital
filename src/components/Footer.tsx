
const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-muted/20 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-6">
          <div>
            <button 
              onClick={scrollToTop}
              className="text-2xl font-bold portfolio-gradient bg-clip-text text-transparent hover:opacity-80 transition-opacity"
            >
              Portfolio
            </button>
          </div>
          
          <div className="flex justify-center space-x-8">
            <button 
              onClick={() => window.open('https://github.com/ArasuRDS01', '_blank')}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              GitHub
            </button>
            <button 
              onClick={() => window.open('https://linkedin.com/in/elavarasan-r-419128223', '_blank')}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              LinkedIn
            </button>
            <button 
              onClick={() => window.location.href = 'mailto:elavarasan.fsdev@email.com'}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Email
            </button>
          </div>
          
          <div className="pt-6 border-t border-border">
            <p className="text-muted-foreground">
              © {currentYear} Elavarasan. All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              Built with React, TypeScript, and Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
