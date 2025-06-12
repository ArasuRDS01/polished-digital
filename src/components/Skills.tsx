
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const Skills = () => {
  const skillCategories = {
    basic: [
      { name: 'HTML', icon: '🌐' },
      { name: 'CSS', icon: '🎨' },
      { name: 'Git', icon: '📝' }
    ],
    intermediate: [
      { name: 'JavaScript', icon: '⚡' },
      { name: 'React', icon: '⚛️' },
   
    ],
   
  };

  const certifications = [
    {
      name: 'JavaScript ',
      issuer: 'Guvi',
      year: '2024'
    },
    {
      name: 'HTML and  CSS',
      issuer: 'Amazon',
      year: '2023'
    },
   
   
  ];

  const handleDownloadCertification = (certName: string) => {
    console.log(`Downloading ${certName} certificate...`);
  };

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold mb-4">
            Skills & <span className="portfolio-gradient bg-clip-text text-transparent">Expertise</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My technical proficiency spans across various technologies and frameworks
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Technical Skills */}
          <Card className="p-8">
            <h3 className="text-2xl font-semibold mb-6">Technical Skills</h3>
            
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-medium mb-3 text-green-600 dark:text-green-400">Basic</h4>
                <div className="flex flex-wrap gap-2">
                  {skillCategories.basic.map((skill) => (
                    <Badge key={skill.name} className="skill-basic text-sm py-2 px-3">
                      {skill.icon} {skill.name}
                    </Badge>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-lg font-medium mb-3 text-yellow-600 dark:text-yellow-400">Intermediate</h4>
                <div className="flex flex-wrap gap-2">
                  {skillCategories.intermediate.map((skill) => (
                    <Badge key={skill.name} className="skill-intermediate text-sm py-2 px-3">
                      {skill.icon} {skill.name}
                    </Badge>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-lg font-medium mb-3 text-red-600 dark:text-red-400">Advanced</h4>
                <div className="flex flex-wrap gap-2">
                  {skillCategories.advanced.map((skill) => (
                    <Badge key={skill.name} className="skill-advanced text-sm py-2 px-3">
                      {skill.icon} {skill.name}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </Card>

          {/* Certifications */}
          <Card className="p-8">
            <h3 className="text-2xl font-semibold mb-6">Certifications</h3>
            
            <div className="space-y-4">
              {certifications.map((cert) => (
                <div key={cert.name} className="border-l-4 border-primary pl-4 py-2">
                  <h4 className="font-medium">{cert.name}</h4>
                  <p className="text-sm text-muted-foreground">{cert.issuer} • {cert.year}</p>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="mt-2"
                    onClick={() => handleDownloadCertification(cert.name)}
                  >
                    Download Certificate
                  </Button>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Technology Stack */}
        <Card className="p-8 text-center">
          <h3 className="text-2xl font-semibold mb-6">Technology Stack</h3>
          <div className="flex justify-center items-center space-x-8 text-4xl">
            <span title="HTML">🌐</span>
            <span title="CSS">🎨</span>
            <span title="JavaScript">⚡</span>
            <span title="React">⚛️</span>
            <span title="Node.js">🟢</span>
            <span title="MongoDB">🍃</span>
          </div>
          <p className="text-muted-foreground mt-4">
            Building modern web applications with cutting-edge technologies
          </p>
        </Card>
      </div>
    </section>
  );
};

export default Skills;
