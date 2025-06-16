
import { Card } from '@/components/ui/card';

const Experience = () => {
  const professionalExperience = [
    {
      title: 'Web Developer Trainee',
      company: 'WMP Creative Agency',
      period: 'Internship - Remote',
      description: 'Gained valuable experience working within a specific industry, applying learned concepts directly into relevant work situations.',
      achievements: [
        'Applied theoretical knowledge to real-world projects',
        'Developed practical web development skills',
        'Collaborated with experienced professionals'
      ]
    },
   ];

  const education = [
    {
      degree: 'Master of Science in Computer Science',
      institution: 'Government Arts College Salem-7',
      period: '2021 - 2023',
      description: 'I completed my Bachelor’s degree in Computer Science, where I got a solid understanding of computer systems, programming concepts, and basic tech principles. It gave me a good foundation and sparked my interest in technology and how things work behind the scenes.',
      highlights: [
        'GPA:6.7 ',
        
      ]
    },
    {
      degree: 'Bachelor of Science in Computer Science',
      institution: 'Government Arts College Salem-7',
      period: '2018 - 2021',
      description: 'After my UG, I went on to do my Master’s in Computer Science. This helped me dive deeper into advanced topics and gave me more clarity on how technology is applied in real-world scenarios. It was a great opportunity to expand my knowledge and explore areas I was really interested in.',
      highlights: [
        'GPA:6.9 ',
        
      ]
    },
    
  ];

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold mb-4">
            Experience & <span className="portfolio-gradient bg-clip-text text-transparent">Education</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My professional journey and educational background
          </p>
        </div>

        <div className="space-y-12">
          {/* Professional Experience */}
          <div>
            <h3 className="text-2xl font-semibold mb-8 text-center">
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
            <h3 className="text-2xl font-semibold mb-8 text-center">
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
