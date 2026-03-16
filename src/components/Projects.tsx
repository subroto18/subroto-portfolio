import { ExternalLink, Github } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

type Project = {
  title: string;
  description: string;
  highlights: string[];
  techStack: string[];
  liveLink: string | null;
  githubLink: string | null;
};

type Category = {
  key: string;
  label: string;
  projects: Project[];
};

const categories: Category[] = [
  {
    key: 'fullstack',
    label: 'Full Stack',
    projects: [
      {
        title: "Vartalap – Real-Time Chat Application",
        description: "A WhatsApp-like real-time chat app supporting one-to-one and group messaging with live updates using Socket.io.",
        highlights: [
          "Real-time messaging with Socket.io for one-to-one and group chats",
          "Secure auth with Passport.js, JWT, and bcrypt password hashing",
          "Scalable REST APIs with Node.js and MongoDB for chat history and user sessions",
          "Cloudinary integration for user profile image storage"
        ],
        techStack: ["React", "Node.js", "MongoDB", "Express.js", "Socket.io", "Passport.js", "JWT", "Cloudinary", "Tailwind CSS"],
        liveLink: null,
        githubLink: "#"
      }
    ]
  },
  {
    key: 'frontend',
    label: 'Frontend',
    projects: [
      {
        title: "XFlix – Movie Browsing & Rating Platform",
        description: "A responsive movie browsing platform with dynamic routing, global state management, and optimized search performance.",
        highlights: [
          "Built with React, TypeScript, and Tailwind CSS with dynamic routing via React Router",
          "Redux Toolkit for global state management and optimized search with debouncing",
          "Shimmer loading states and lazy loading for enhanced perceived performance",
          "Reusable UI components with Headless UI and robust error handling"
        ],
        techStack: ["React", "TypeScript", "Redux Toolkit", "Tailwind CSS", "React Router", "Headless UI", "Netlify"],
        liveLink: "#",
        githubLink: "#"
      },
      {
        title: "Flight Seat Booking System",
        description: "A flight seat booking interface allowing users to reserve seats by date with duplicate booking prevention.",
        highlights: [
          "Built with React, Vite, and Tailwind CSS for seat reservation by date",
          "Redux for global state management with localStorage persistence",
          "Dynamic seat availability tracking with flight-based filtering",
          "Optimized performance using debouncing and throttling"
        ],
        techStack: ["React", "Redux", "Tailwind CSS", "Vite", "LocalStorage"],
        liveLink: "#",
        githubLink: "#"
      }
    ]
  },
  {
    key: 'backend',
    label: 'Backend',
    projects: []
  },
  {
    key: 'ai',
    label: 'AI / AI-Integrated',
    projects: []
  },
  {
    key: 'clones',
    label: 'Clone Projects',
    projects: []
  },
  {
    key: 'landing',
    label: 'Landing Pages',
    projects: []
  }
];

const ProjectCard = ({ project }: { project: Project }) => (
  <Card className="card-glow flex flex-col">
    <CardHeader>
      <CardTitle className="text-lg leading-snug">{project.title}</CardTitle>
      <p className="text-sm text-muted-foreground mt-2">{project.description}</p>
    </CardHeader>
    <CardContent className="flex-1 flex flex-col justify-between space-y-5">
      <ul className="space-y-2">
        {project.highlights.map((h, idx) => (
          <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
            <span className="text-primary mt-1">•</span>
            <span>{h}</span>
          </li>
        ))}
      </ul>
      <div className="flex flex-wrap gap-1.5">
        {project.techStack.map((tech, idx) => (
          <Badge key={idx} variant="secondary" className="text-xs border border-primary/20">
            {tech}
          </Badge>
        ))}
      </div>
      <div className="flex gap-3 pt-2">
        {project.githubLink && (
          <Button variant="outline" size="sm" className="flex-1 border-primary text-primary hover:bg-primary hover:text-primary-foreground" asChild>
            <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
              <Github className="h-4 w-4 mr-1.5" />
              GitHub
            </a>
          </Button>
        )}
        {project.liveLink && (
          <Button size="sm" className="flex-1" asChild>
            <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="h-4 w-4 mr-1.5" />
              Live Demo
            </a>
          </Button>
        )}
      </div>
    </CardContent>
  </Card>
);

const EmptyCategory = ({ label }: { label: string }) => (
  <div className="flex flex-col items-center justify-center py-16 text-center">
    <div className="rounded-full bg-muted p-4 mb-4">
      <Github className="h-8 w-8 text-muted-foreground" />
    </div>
    <h3 className="text-lg font-semibold mb-2">Coming Soon</h3>
    <p className="text-sm text-muted-foreground max-w-md">
      {label} projects are on the way. Stay tuned for updates!
    </p>
  </div>
);

const Projects = () => {
  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A growing collection of projects organized by category
          </p>
        </div>

        <Tabs defaultValue="fullstack" className="w-full">
          <TabsList className="flex flex-wrap h-auto gap-1 bg-muted/50 p-1.5 mb-8">
            {categories.map((cat) => (
              <TabsTrigger
                key={cat.key}
                value={cat.key}
                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground text-xs sm:text-sm px-3 py-1.5"
              >
                {cat.label}
                {cat.projects.length > 0 && (
                  <span className="ml-1.5 text-[10px] opacity-70">({cat.projects.length})</span>
                )}
              </TabsTrigger>
            ))}
          </TabsList>

          {categories.map((cat) => (
            <TabsContent key={cat.key} value={cat.key}>
              {cat.projects.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {cat.projects.map((project, index) => (
                    <ProjectCard key={index} project={project} />
                  ))}
                </div>
              ) : (
                <EmptyCategory label={cat.label} />
              )}
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default Projects;
