import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const TechStack = () => {
  const techCategories = [
    {
      title: "Languages",
      icon: "💻",
      technologies: ["JavaScript", "TypeScript", "PHP", "C", "C++"]
    },
    {
      title: "Frontend",
      icon: "🎨",
      technologies: ["HTML5", "CSS3", "React.js", "Next.js", "Redux Toolkit", "Recoil"]
    },
    {
      title: "Backend",
      icon: "⚙️",
      technologies: ["Node.js", "Express.js", "Laravel", "Mongoose", "WebSockets"]
    },
    {
      title: "Databases",
      icon: "🗄️",
      technologies: ["MongoDB", "MySQL"]
    },
    {
      title: "Tools & Platforms",
      icon: "🛠️",
      technologies: ["Git", "GitHub", "NPM", "Postman", "React Testing Library"]
    },
    {
      title: "CMS & Deployment",
      icon: "🚀",
      technologies: ["Sanity CMS", "WordPress", "Vercel", "AWS"]
    },
    {
      title: "AI Tools",
      icon: "🤖",
      technologies: ["ChatGPT", "GitHub Copilot", "Cursor"]
    }
  ];

  return (
    <section id="tech-stack" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="gradient-text">Tech Stack & Skills</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I use to build scalable, high-performance applications
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {techCategories.map((category, index) => (
            <Card key={index} className="card-glow">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-3 text-lg">
                  <span className="text-xl">{category.icon}</span>
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary" className="bg-secondary hover:bg-secondary/80 border border-primary/20 transition-colors">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Certifications */}
        <div className="mt-16">
          <Card className="card-glow max-w-4xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-xl font-bold mb-4 text-center">Certifications</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  "Full Stack Development Program – Crio.do",
                  "Backend Development – Akshay Saini",
                  "ReactJs Development – Akshay Saini",
                  "Advanced JavaScript – Akshay Saini",
                  "100xDev Program – Harkirat Singh",
                  "Backend Development – Chai Aur Code"
                ].map((cert, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="text-primary">✓</span>
                    <span>{cert}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
