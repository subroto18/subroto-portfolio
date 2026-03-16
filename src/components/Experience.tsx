import { Building, Calendar, MapPin, Trophy } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Experience = () => {
  const experiences = [
    {
      title: "Frontend Developer",
      company: "Eagle Inbrit",
      location: "Mumbai",
      period: "May 2025 – Nov 2025",
      type: "Full-time",
      description: "Developed CRM web applications and contributed to scalable design systems at an innovative startup.",
      responsibilities: [
        "Developed CRM web applications using React.js and Next.js, improving internal workflow efficiency and UI performance",
        "Contributed to a reusable NPM-based UI component library (@onehaul/ui), enabling consistent design systems across multiple products",
        "Built and maintained the company website using Next.js and Sanity CMS, improving content management and scalability",
        "Improved website performance and load time by implementing React Lazy Loading and code splitting",
        "Enhanced SEO and accessibility by using semantic HTML tags and optimized page structure",
        "Collaborated with designers and backend developers to integrate REST APIs and build responsive UI components"
      ],
      technologies: ["React.js", "Next.js", "Sanity CMS", "TailwindCSS", "REST APIs", "NPM"]
    },
    {
      title: "Frontend Developer",
      company: "Revivo Technologies",
      location: "Gurgaon",
      period: "Jun 2023 – Apr 2025",
      type: "Full-time",
      description: "Built web and mobile interfaces for a hotel management SaaS platform handling bookings, POS, and analytics.",
      responsibilities: [
        "Enabled hotels to manage bookings, POS, housekeeping, OTA integrations, and payments from a single platform",
        "Built web and mobile interfaces using React.js and React Native for booking engine, POS, and operational dashboards",
        "Improved UI responsiveness for large booking datasets by implementing React Window (virtualized lists)",
        "Enhanced performance using useMemo, useCallback, and lazy loading to minimize unnecessary re-renders",
        "Integrated REST APIs to synchronize bookings, payments, and OTA channels through a centralized dashboard",
        "Developed analytics dashboards enabling hotel owners to track revenue and operational performance"
      ],
      technologies: ["React.js", "React Native", "Redux", "React Window", "REST APIs", "TypeScript"]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My professional journey building scalable web applications
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="card-glow">
              <CardHeader>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div>
                    <CardTitle className="text-2xl mb-2">{exp.title}</CardTitle>
                    <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Building className="h-4 w-4" />
                        <span className="font-medium">{exp.company}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        <span>{exp.location}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>{exp.period}</span>
                      </div>
                    </div>
                  </div>
                  <Badge variant="secondary" className="w-fit">{exp.type}</Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-muted-foreground">{exp.description}</p>
                
                <div>
                  <h4 className="font-semibold mb-3 flex items-center gap-2">
                    <Trophy className="h-4 w-4 text-primary" />
                    Key Contributions
                  </h4>
                  <ul className="space-y-2">
                    {exp.responsibilities.map((resp, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-muted-foreground">
                        <span className="text-primary mt-1.5">•</span>
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-3">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, idx) => (
                      <Badge key={idx} variant="outline" className="border-primary text-primary">{tech}</Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
