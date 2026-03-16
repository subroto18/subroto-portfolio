import { Code, Globe, Server, GraduationCap } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import profilePic from '@/assets/profile-pic.jpg';

const About = () => {
  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="gradient-text">About Me</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A frontend-focused full stack developer from Kolkata, India
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <img src={profilePic} alt="Subroto Chakraborty" className="w-80 h-80 rounded-full object-cover border-4 border-primary/20 shadow-lg" />
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 to-accent/20" />
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-foreground">Hello, I'm Subroto! 👋</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Frontend focused Full Stack Developer with 3+ years of experience building scalable SaaS platforms 
                and high-performance web applications. Specialized in React, Next.js, and TypeScript, with backend 
                experience in Node.js, Express.js, and MongoDB.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Proven ability to develop data-intensive dashboards, reusable component libraries, and 
                performance-optimized applications. Experienced in implementing modern frontend architectures, 
                state management solutions, and scalable REST APIs.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Card className="card-glow">
                <CardContent className="p-6">
                  <Code className="h-8 w-8 tech-icon mb-3" />
                  <h4 className="font-semibold mb-2">Frontend Expert</h4>
                  <p className="text-sm text-muted-foreground">React, Next.js, TypeScript, Redux Toolkit</p>
                </CardContent>
              </Card>
              <Card className="card-glow">
                <CardContent className="p-6">
                  <Server className="h-8 w-8 tech-icon mb-3" />
                  <h4 className="font-semibold mb-2">Backend Skills</h4>
                  <p className="text-sm text-muted-foreground">Node.js, Express.js, MongoDB, Laravel</p>
                </CardContent>
              </Card>
              <Card className="card-glow">
                <CardContent className="p-6">
                  <Globe className="h-8 w-8 tech-icon mb-3" />
                  <h4 className="font-semibold mb-2">Full Stack</h4>
                  <p className="text-sm text-muted-foreground">REST APIs, WebSockets, CMS, AWS</p>
                </CardContent>
              </Card>
              <Card className="card-glow">
                <CardContent className="p-6">
                  <GraduationCap className="h-8 w-8 creative-icon mb-3" />
                  <h4 className="font-semibold mb-2">Crio.do Fellow</h4>
                  <p className="text-sm text-muted-foreground">Full-Stack Specialization, Hall of Fame</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
