import { useState } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Send } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast({ title: "Error", description: "Please fill in all required fields.", variant: "destructive" });
      return;
    }
    toast({ title: "Message Sent!", description: "Thank you for reaching out. I'll get back to you soon!" });
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    { icon: Mail, label: "Email", value: "subrotochakraborty18@gmail.com", href: "mailto:subrotochakraborty18@gmail.com" },
    { icon: Phone, label: "Phone", value: "+91 9366521885", href: "tel:+919366521885" },
    { icon: MapPin, label: "Location", value: "Kolkata, India", href: null }
  ];

  const socialLinks = [
    { icon: Github, label: "GitHub", href: "https://github.com/subroto18", color: "text-foreground" },
    { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com/in/subrotochakraborty18", color: "text-blue-500" }
  ];

  return (
    <section id="contact" className="py-20 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="gradient-text">Get In Touch</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Let's collaborate on your next project or discuss opportunities
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <Card className="card-glow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Send className="h-5 w-5" />
                Send Me a Message
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name *</Label>
                    <Input id="name" name="name" value={formData.name} onChange={handleChange} placeholder="Your full name" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} placeholder="your.email@example.com" required />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input id="subject" name="subject" value={formData.subject} onChange={handleChange} placeholder="What's this about?" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message *</Label>
                  <Textarea id="message" name="message" value={formData.message} onChange={handleChange} placeholder="Tell me about your project or opportunity!" rows={5} required />
                </div>
                <Button type="submit" className="w-full" size="lg">Send Message</Button>
              </form>
            </CardContent>
          </Card>

          <div className="space-y-8">
            <Card className="card-glow">
              <CardHeader><CardTitle>Contact Information</CardTitle></CardHeader>
              <CardContent className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <info.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">{info.label}</p>
                      {info.href ? (
                        <a href={info.href} className="text-muted-foreground hover:text-primary transition-colors">{info.value}</a>
                      ) : (
                        <p className="text-muted-foreground">{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
                <div className="pt-6 border-t border-border">
                  <h3 className="font-semibold mb-4">Follow Me</h3>
                  <div className="flex gap-4">
                    {socialLinks.map((social, index) => (
                      <a key={index} href={social.href} target="_blank" rel="noopener noreferrer" className={`p-3 bg-secondary/50 rounded-lg hover:bg-secondary transition-colors ${social.color}`} title={social.label}>
                        <social.icon className="h-5 w-5" />
                      </a>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="card-glow">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-3">Let's Work Together!</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  I'm always interested in new opportunities and collaborations. Whether you need a frontend developer 
                  for your startup or want to discuss a web project, feel free to reach out!
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
