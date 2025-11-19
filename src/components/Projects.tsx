import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Projects = () => {
  const [expandedProjects, setExpandedProjects] = useState<number[]>([]);
  const projects = [
    {
      title: 'Portfolio Website',
      description: 'A modern, responsive portfolio website showcasing projects, skills, and professional experience.The goal of the project was to design a clean and visually appealing interface that represents my identity as a web developer and helps visitors understand my work at a glance.',
      image: '/uploads/portfolio.png',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
      demoUrl: 'https://polished-digital.lovable.app',
      githubUrl: 'https://github.com/username/portfolio'
    },
    {
      title: 'Theme-Selling Platform',
      description: 'Theme Selling Platform is a web-based application developed during my PG course to manage and sell website themes. It supports theme uploads, displays details like price and description, and includes search functionality. The preview feature is currently incomplete due to path issues and is planned for future improvement..',
      image: '/uploads/Tswebsite.png',
      technologies: ['HTML', 'CSS', 'Javascript', 'PHP', 'SQL'],
      demoUrl: 'http://localhost/Myproject/ThemeSelling/index.php',
      githubUrl: 'https://github.com/ArasuRDS01/TS-website'
    },
    
    {
      title: 'Student Project Managment ',
      description: 'This is a simple web-based application that allows students to submit their project details for staff approval. The system helps in managing, viewing, and organizing student project submissions..',
      image: '/uploads/PMS.png',
      technologies: ['HTML', 'CSS', 'JavaScript', 'SQL'],
      demoUrl: '',
      githubUrl: 'https://github.com/ArasuRDS01/PMS'
    },
  
  ];

  const handleDemo = (url: string) => {
    window.open(url, '_blank');
  };

  const handleGithub = (url: string) => {
    window.open(url, '_blank');
  };

  const toggleExpanded = (index: number) => {
    setExpandedProjects(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold mb-4">
            Featured <span className="portfolio-gradient bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work and technical achievements
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden hover-scale group flex flex-col h-full">
              <div className="relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <div className="p-6 space-y-4 flex flex-col flex-1">
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <div className="flex-1">
                  <p className={`text-muted-foreground ${!expandedProjects.includes(index) ? 'line-clamp-4' : ''}`}>
                    {project.description}
                  </p>
                  {project.description.length > 200 && (
                    <button
                      onClick={() => toggleExpanded(index)}
                      className="text-primary text-sm mt-1 hover:underline"
                    >
                      {expandedProjects.includes(index) ? 'Show less' : 'Show more'}
                    </button>
                  )}
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex gap-3 pt-2">
                  <Button 
                    onClick={() => handleDemo(project.demoUrl)}
                    className="flex-1 portfolio-gradient hover:opacity-90 transition-opacity"
                  >
                    Live Demo
                  </Button>
                  <Button 
                    onClick={() => handleGithub(project.githubUrl)}
                    variant="outline"
                    className="flex-1 hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    GitHub
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            size="lg"
            onClick={() => window.open('https://github.com/ArasuRDS01', '_blank')}
            className="hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            View All Projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
