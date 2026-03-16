import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroBg from '@/assets/hero-bg.jpg';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})`, filter: 'brightness(0.3)' }}
      />
      <div className="absolute inset-0 hero-gradient opacity-60" />
      
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6">
          <span className="gradient-text">Subroto Chakraborty</span>
        </h1>
        
        <p className="text-xl sm:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Frontend focused Full Stack Developer
        </p>
        
        <p className="text-lg text-foreground/80 mb-10 max-w-3xl mx-auto">
          3+ years building scalable SaaS platforms & high-performance web apps with React, Next.js & TypeScript. 
          Specialized in data-intensive dashboards, reusable component libraries, and performance-optimized applications.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground" asChild>
            <a href="#contact">Get In Touch</a>
          </Button>
          <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground" asChild>
            <a href="#projects">View Projects</a>
          </Button>
        </div>

        <div className="flex justify-center space-x-6 mb-12">
          <a href="https://github.com/subroto18" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
            <Github className="h-6 w-6" />
          </a>
          <a href="https://linkedin.com/in/subrotochakraborty18" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
            <Linkedin className="h-6 w-6" />
          </a>
          <a href="mailto:subrotochakraborty18@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
            <Mail className="h-6 w-6" />
          </a>
        </div>

        <div className="animate-bounce">
          <ArrowDown className="h-6 w-6 mx-auto text-muted-foreground" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
