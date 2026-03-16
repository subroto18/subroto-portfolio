import { Heart, Github, Linkedin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold gradient-text">Subroto Chakraborty</h3>
            <p className="text-muted-foreground text-sm">
              Frontend focused Full Stack Developer passionate about building scalable web applications 
              and high-performance user experiences.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold">Quick Links</h4>
            <div className="space-y-2">
              {[
                { name: 'About', href: '#about' },
                { name: 'Tech Stack', href: '#tech-stack' },
                { name: 'Experience', href: '#experience' },
                { name: 'Projects', href: '#projects' },
                { name: 'Contact', href: '#contact' }
              ].map((link) => (
                <a key={link.name} href={link.href} className="block text-muted-foreground hover:text-primary transition-colors text-sm">
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold">Connect With Me</h4>
            <div className="flex gap-4">
              <a href="https://github.com/subroto18" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" title="GitHub">
                <Github className="h-5 w-5" />
              </a>
              <a href="https://linkedin.com/in/subrotochakraborty18" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" title="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
            <p className="text-muted-foreground text-sm">
              Based in Kolkata, India 🇮🇳<br />
              Available for opportunities
            </p>
          </div>
        </div>

        <hr className="my-8 border-border" />

        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">© {currentYear} Subroto Chakraborty. All rights reserved.</p>
          <p className="text-muted-foreground text-sm flex items-center gap-1">
            Made with <Heart className="h-4 w-4 text-red-500" /> using React & TailwindCSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
