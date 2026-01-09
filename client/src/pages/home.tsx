import { useState } from "react";
import { motion } from "framer-motion";
import { 
  Code2, 
  Sparkles, 
  Target, 
  Rocket, 
  Mail, 
  User, 
  MessageSquare,
  Send,
  ExternalLink,
  ChevronDown,
  Zap,
  Layers,
  Palette
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import heroBackground from "@assets/generated_images/dark_geometric_abstract_background.png";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

function Navigation() {
  return (
    <motion.nav 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 glass"
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="font-display text-xl font-semibold tracking-tight gradient-text" data-testid="nav-logo">
          Mohammed
        </a>
        <div className="hidden md:flex items-center gap-8">
          <a href="#about" className="text-sm text-muted-foreground hover:text-foreground transition-colors" data-testid="nav-about">About</a>
          <a href="#contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors" data-testid="nav-contact">Contact</a>
        </div>
        <a 
          href="#contact"
          className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium h-9 rounded-md px-4 bg-primary/20 text-primary border border-primary/30 hover:bg-primary/30 transition-colors" 
          data-testid="nav-cta"
        >
          <Mail className="w-4 h-4 mr-2" />
          Get in Touch
        </a>
      </div>
    </motion.nav>
  );
}

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
      </div>

      {/* Animated Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-32 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div 
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="space-y-8"
        >
          <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-muted-foreground">Software Engineer</span>
          </motion.div>
          
          <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-display font-bold leading-tight">
            Hi, I'm{" "}
            <span className="gradient-text">Mohammed</span>
          </motion.h1>
          
          <motion.p variants={fadeInUp} className="text-lg md:text-xl text-muted-foreground max-w-lg leading-relaxed">
            A passionate engineer who loves turning complex ideas into simple, sleek solutions. 
            Building cool stuff, one line of code at a time.
          </motion.p>
          
          <motion.div variants={fadeInUp} className="flex flex-wrap gap-4">
            <a 
              href="#about"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 h-11 rounded-md px-8 bg-primary hover:bg-primary/90 text-primary-foreground group" 
              data-testid="hero-learn-more"
            >
              Learn More About Me
              <ChevronDown className="ml-2 w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
            </a>
            <a 
              href="#contact"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 h-11 rounded-md px-8 border border-border hover:bg-muted/50" 
              data-testid="hero-contact"
            >
              <ExternalLink className="mr-2 w-4 h-4" />
              Get In Touch
            </a>
          </motion.div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="relative hidden lg:flex justify-center"
        >
          <div className="relative">
            {/* Profile Picture Container */}
            <div className="w-80 h-80 rounded-3xl overflow-hidden glass-strong glow animate-float">
              <img 
                src="https://youssef183655.github.io/mo-site/assets/%D8%B1.png" 
                alt="Mohammed Profile"
                className="w-full h-full object-cover"
                data-testid="hero-profile-image"
              />
            </div>
            
            {/* Floating Cards */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 }}
              className="absolute -right-8 top-8 glass-strong rounded-xl px-4 py-3 flex items-center gap-3"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                <Code2 className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Focus</p>
                <p className="text-sm font-medium">Mobile Apps</p>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1 }}
              className="absolute -left-8 bottom-12 glass-strong rounded-xl px-4 py-3 flex items-center gap-3"
            >
              <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center">
                <Zap className="w-5 h-5 text-accent" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Passion</p>
                <p className="text-sm font-medium">Innovation</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2 text-muted-foreground">
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <motion.div 
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ChevronDown className="w-5 h-5" />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

function About() {
  const cards = [
    {
      icon: User,
      title: "Who Am I?",
      description: "A creative technologist building a website to showcase my journey, passion, and favorite things. Made with love and code.",
      color: "primary"
    },
    {
      icon: Sparkles,
      title: "My Passion",
      description: "I'm a Software Engineer who loves turning complex ideas into simple, sleek solutions. Currently diving into mobile app development.",
      color: "accent"
    },
    {
      icon: Layers,
      title: "What I Do",
      description: "I enjoy building cool stuff, experimenting with new tech, and making things look and feel great. Software engineering is my craft.",
      color: "primary"
    },
    {
      icon: Target,
      title: "My Goal",
      description: "Driven by creativity, the satisfaction of solving puzzles, and the challenge of constant learning. Striving for excellence.",
      color: "accent"
    }
  ];

  return (
    <section id="about" className="relative py-32 overflow-hidden noise">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-px h-64 bg-gradient-to-b from-transparent via-primary/30 to-transparent" />
        <div className="absolute top-32 right-1/3 w-px h-48 bg-gradient-to-b from-transparent via-accent/30 to-transparent" />
      </div>

      <div className="max-w-6xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm mb-6">
            <Palette className="w-4 h-4 text-accent" />
            <span className="text-muted-foreground">Get to know me</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Discover my journey, passion, and what drives me to create amazing digital experiences.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {cards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
              data-testid={`about-card-${index}`}
            >
              <div className="relative glass-strong rounded-2xl p-8 h-full transition-all duration-300 hover:scale-[1.02] gradient-border">
                <div className={`w-14 h-14 rounded-xl ${card.color === 'primary' ? 'bg-primary/20' : 'bg-accent/20'} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <card.icon className={`w-7 h-7 ${card.color === 'primary' ? 'text-primary' : 'text-accent'}`} />
                </div>
                <h3 className="text-xl font-display font-semibold mb-3">{card.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{card.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <section id="contact" className="relative py-32 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm mb-6">
              <Rocket className="w-4 h-4 text-primary" />
              <span className="text-muted-foreground">Let's Connect</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
              Contact <span className="gradient-text">Me</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Get in touch for any inquiries or collaboration opportunities. 
              I'm always excited to work on new projects and connect with fellow creators.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center gap-4 text-muted-foreground">
                <div className="w-12 h-12 rounded-xl glass-strong flex items-center justify-center">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider mb-1">Email</p>
                  <p className="text-foreground">hello@mohammed.dev</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="glass-strong rounded-2xl p-8 space-y-6 glow">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm text-muted-foreground flex items-center gap-2">
                    <User className="w-4 h-4" />
                    Your Name
                  </label>
                  <Input
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="bg-background/50 border-border/50 focus:border-primary/50"
                    data-testid="contact-name"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm text-muted-foreground flex items-center gap-2">
                    <Mail className="w-4 h-4" />
                    Your Email
                  </label>
                  <Input
                    type="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="bg-background/50 border-border/50 focus:border-primary/50"
                    data-testid="contact-email"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm text-muted-foreground flex items-center gap-2">
                  <MessageSquare className="w-4 h-4" />
                  Subject
                </label>
                <Input
                  placeholder="What's this about?"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="bg-background/50 border-border/50 focus:border-primary/50"
                  data-testid="contact-subject"
                />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm text-muted-foreground flex items-center gap-2">
                  <MessageSquare className="w-4 h-4" />
                  Message
                </label>
                <Textarea
                  placeholder="Tell me about your project or just say hi..."
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="bg-background/50 border-border/50 focus:border-primary/50 resize-none"
                  data-testid="contact-message"
                />
              </div>
              
              <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90 group" data-testid="contact-submit">
                Send Message
                <Send className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border/50 py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">
          © 2024 Mohammed. Built with passion and code.
        </p>
        <div className="flex items-center gap-6">
          <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Privacy
          </a>
          <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Terms
          </a>
        </div>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}