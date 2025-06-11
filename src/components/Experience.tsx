
import { Card } from '@/components/ui/card';

const Experience = () => {
  const professionalExperience = [
    {
      title: 'Senior Frontend Developer',
      company: 'Tech Solutions Inc.',
      period: '2022 - Present',
      description: 'Led frontend development for multiple web applications using React and TypeScript. Collaborated with cross-functional teams to deliver high-quality user experiences.',
      achievements: [
        'Increased user engagement by 40%',
        'Reduced loading time by 60%',
        'Mentored 3 junior developers'
      ]
    },
    {
      title: 'Full Stack Developer',
      company: 'Digital Innovations Ltd.',
      period: '2020 - 2022',
      description: 'Developed end-to-end web applications using MERN stack. Implemented RESTful APIs and optimized database performance.',
      achievements: [
        'Built 5+ production applications',
        'Implemented CI/CD pipelines',
        'Improved system performance by 45%'
      ]
    },
    {
      title: 'Frontend Developer',
      company: 'StartupXYZ',
      period: '2019 - 2020',
      description: 'Created responsive web interfaces and collaborated closely with UX/UI designers to implement pixel-perfect designs.',
      achievements: [
        'Delivered 10+ client projects',
        'Achieved 99% client satisfaction',
        'Reduced development time by 30%'
      ]
    }
  ];

  const education = [
    {
      degree: 'Bachelor of Science in Computer Science',
      institution: 'University of Technology',
      period: '2015 - 2019',
      description: 'Focused on software engineering, algorithms, and web technologies. Graduated with First Class Honours.',
      highlights: [
        'GPA: 3.8/4.0',
        'Dean\'s List for 6 semesters',
        'President of Computer Science Society'
      ]
    },
    {
      degree: 'Advanced Web Development Bootcamp',
      institution: 'Code Academy Pro',
      period: '2019',
      description: 'Intensive 6-month program covering modern web development technologies and best practices.',
      highlights: [
        'Top 5% of cohort',
        'Built 8 real-world projects',
        'Received industry mentorship'
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold mb-4">
            Experience & <span className="portfolio-gradient bg-clip-text text-transparent">Education</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My professional journey and educational background
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Professional Experience */}
          <div>
            <h3 className="text-2xl font-semibold mb-8 text-center lg:text-left">
              Professional Experience
            </h3>
            
            <div className="space-y-6">
              {professionalExperience.map((exp, index) => (
                <Card key={index} className="p-6 hover-scale">
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-xl font-semibold text-primary">{exp.title}</h4>
                      <p className="text-lg font-medium">{exp.company}</p>
                      <p className="text-sm text-muted-foreground">{exp.period}</p>
                    </div>
                    
                    <p className="text-muted-foreground">{exp.description}</p>
                    
                    <div>
                      <h5 className="font-medium mb-2">Key Achievements:</h5>
                      <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i}>{achievement}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Educational Background */}
          <div>
            <h3 className="text-2xl font-semibold mb-8 text-center lg:text-left">
              Educational Background
            </h3>
            
            <div className="space-y-6">
              {education.map((edu, index) => (
                <Card key={index} className="p-6 hover-scale">
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-xl font-semibold text-primary">{edu.degree}</h4>
                      <p className="text-lg font-medium">{edu.institution}</p>
                      <p className="text-sm text-muted-foreground">{edu.period}</p>
                    </div>
                    
                    <p className="text-muted-foreground">{edu.description}</p>
                    
                    <div>
                      <h5 className="font-medium mb-2">Highlights:</h5>
                      <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                        {edu.highlights.map((highlight, i) => (
                          <li key={i}>{highlight}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
