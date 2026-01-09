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
  ArrowDown,
  Zap,
  Layers,
  Palette,
  Github,
  Linkedin,
  Twitter,
  Gamepad2,
  Smartphone,
  Globe
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.15
    }
  }
};

function Navigation() {
  return (
    <motion.nav 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-white/5"
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="text-2xl font-display font-bold" data-testid="nav-logo">
          <span className="text-primary">M</span>ohammed
        </a>
        <div className="hidden md:flex items-center gap-8">
          <a href="#about" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300" data-testid="nav-about">About</a>
          <a href="#skills" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300" data-testid="nav-skills">Skills</a>
          <a href="#contact" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300" data-testid="nav-contact">Contact</a>
        </div>
        <a 
          href="#contact"
          className="group relative inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary text-primary-foreground text-sm font-medium overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-primary/25" 
          data-testid="nav-cta"
        >
          <span className="relative z-10">Let's Talk</span>
          <Mail className="w-4 h-4 relative z-10" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-purple-500 to-primary bg-[length:200%_100%] animate-gradient opacity-0 group-hover:opacity-100 transition-opacity" />
        </a>
      </div>
    </motion.nav>
  );
}

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-background to-background" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)]" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-32">
        <motion.div 
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="text-center"
        >
          {/* Greeting */}
          <motion.p 
            variants={fadeInUp} 
            className="text-lg md:text-xl text-muted-foreground mb-4"
          >
            Hello, my name is
          </motion.p>
          
          {/* Name */}
          <motion.h1 
            variants={fadeInUp} 
            className="text-7xl md:text-9xl font-display font-bold mb-6 tracking-tight"
          >
            <span className="bg-gradient-to-r from-white via-white to-white/60 bg-clip-text text-transparent">
              Mohammed
            </span>
          </motion.h1>
          
          {/* Role Tags */}
          <motion.div 
            variants={fadeInUp} 
            className="flex flex-wrap items-center justify-center gap-3 md:gap-4 mb-8"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm md:text-base">
              <Code2 className="w-4 h-4 text-primary" />
              Software Engineer
            </span>
            <span className="text-muted-foreground hidden md:inline">|</span>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm md:text-base">
              <Smartphone className="w-4 h-4 text-accent" />
              Mobile Developer
            </span>
            <span className="text-muted-foreground hidden md:inline">|</span>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm md:text-base">
              <Globe className="w-4 h-4 text-purple-400" />
              Tech Enthusiast
            </span>
          </motion.div>
          
          {/* Description */}
          <motion.p 
            variants={fadeInUp} 
            className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            A passionate engineer who loves turning complex ideas into simple, sleek solutions. 
            Building cool stuff, one line of code at a time.
          </motion.p>
          
          {/* CTA Buttons */}
          <motion.div variants={fadeInUp} className="flex flex-wrap items-center justify-center gap-4">
            <a 
              href="#about"
              className="group relative inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary text-primary-foreground font-medium overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-primary/30 hover:scale-105" 
              data-testid="hero-learn-more"
            >
              <span className="relative z-10">Explore My Work</span>
              <ArrowDown className="w-4 h-4 relative z-10 group-hover:translate-y-1 transition-transform" />
              <div className="absolute inset-0 bg-gradient-to-r from-primary via-purple-500 to-primary bg-[length:200%_100%] opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
            <a 
              href="#contact"
              className="group inline-flex items-center gap-2 px-8 py-4 rounded-full border border-white/20 text-foreground font-medium transition-all duration-300 hover:bg-white/5 hover:border-white/30 hover:scale-105" 
              data-testid="hero-contact"
            >
              Get In Touch
              <Mail className="w-4 h-4 group-hover:rotate-12 transition-transform" />
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div 
            variants={fadeInUp} 
            className="flex items-center justify-center gap-4 mt-12"
          >
            <a href="#" className="p-3 rounded-full bg-white/5 border border-white/10 text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300">
              <Github className="w-5 h-5" />
            </a>
            <a href="#" className="p-3 rounded-full bg-white/5 border border-white/10 text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="#" className="p-3 rounded-full bg-white/5 border border-white/10 text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300">
              <Twitter className="w-5 h-5" />
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center p-2"
        >
          <motion.div 
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-2 bg-primary rounded-full"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}

function About() {
  const cards = [
    {
      icon: User,
      title: "Who Am I?",
      description: "A creative technologist on a mission to craft beautiful digital experiences. Every project is a new adventure.",
      gradient: "from-primary to-purple-500"
    },
    {
      icon: Sparkles,
      title: "My Passion",
      description: "Turning complex ideas into elegant solutions. Currently diving deep into mobile app development to expand my craft.",
      gradient: "from-accent to-cyan-400"
    },
    {
      icon: Layers,
      title: "What I Do",
      description: "Building innovative software, experimenting with cutting-edge tech, and making products that people love to use.",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: Target,
      title: "My Goal",
      description: "Driven by creativity and the thrill of solving complex puzzles. Striving to become a world-class software engineer.",
      gradient: "from-orange-500 to-yellow-500"
    }
  ];

  return (
    <section id="about" className="relative py-32 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            About Me
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Get to Know <span className="text-primary">Me</span>
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
              <div className="relative bg-white/[0.03] border border-white/10 rounded-2xl p-8 h-full transition-all duration-500 hover:bg-white/[0.06] hover:border-white/20 hover:scale-[1.02] overflow-hidden">
                {/* Gradient Glow */}
                <div className={`absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br ${card.gradient} rounded-full blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />
                
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${card.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <card.icon className="w-7 h-7 text-white" />
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

function Skills() {
  const skills = [
    { name: "JavaScript", level: 90 },
    { name: "React / React Native", level: 85 },
    { name: "TypeScript", level: 80 },
    { name: "Python", level: 75 },
    { name: "Mobile Development", level: 85 },
    { name: "UI/UX Design", level: 70 },
  ];

  return (
    <section id="skills" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      
      <div className="relative max-w-6xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
            My Skills
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            What I'm <span className="text-accent">Good At</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex justify-between mb-2">
                <span className="font-medium">{skill.name}</span>
                <span className="text-muted-foreground">{skill.level}%</span>
              </div>
              <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: index * 0.1 }}
                  className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
                />
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
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-primary/10 rounded-full blur-[120px]" />

      <div className="relative max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Contact Me
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
              Let's Work <span className="text-primary">Together</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Have a project in mind? Let's create something amazing together. 
              I'm always open to discussing new opportunities.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="font-medium">hello@mohammed.dev</p>
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
            <form onSubmit={handleSubmit} className="bg-white/[0.03] border border-white/10 rounded-2xl p-8 space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm text-muted-foreground">Your Name</label>
                  <Input
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="bg-white/5 border-white/10 focus:border-primary/50 h-12"
                    data-testid="contact-name"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm text-muted-foreground">Your Email</label>
                  <Input
                    type="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="bg-white/5 border-white/10 focus:border-primary/50 h-12"
                    data-testid="contact-email"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm text-muted-foreground">Subject</label>
                <Input
                  placeholder="Project Inquiry"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="bg-white/5 border-white/10 focus:border-primary/50 h-12"
                  data-testid="contact-subject"
                />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm text-muted-foreground">Message</label>
                <Textarea
                  placeholder="Tell me about your project..."
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="bg-white/5 border-white/10 focus:border-primary/50 resize-none"
                  data-testid="contact-message"
                />
              </div>
              
              <button 
                type="submit" 
                className="group relative w-full inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-primary text-primary-foreground font-medium overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-primary/30"
                data-testid="contact-submit"
              >
                <span className="relative z-10">Send Message</span>
                <Send className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" />
                <div className="absolute inset-0 bg-gradient-to-r from-primary via-purple-500 to-primary bg-[length:200%_100%] opacity-0 group-hover:opacity-100 transition-opacity" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/10 py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">
          © 2024 Mohammed. Built with passion ❤️
        </p>
        <div className="flex items-center gap-4">
          <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
            <Github className="w-5 h-5" />
          </a>
          <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
            <Linkedin className="w-5 h-5" />
          </a>
          <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
            <Twitter className="w-5 h-5" />
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
      <Skills />
      <Contact />
      <Footer />
    </main>
  );
}