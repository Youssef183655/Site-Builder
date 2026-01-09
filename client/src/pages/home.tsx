import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Code2, 
  Sparkles, 
  Target, 
  Mail, 
  User, 
  Send,
  ArrowDown,
  Layers,
  Github,
  Linkedin,
  Twitter,
  Smartphone,
  Globe,
  Menu,
  X
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
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <motion.nav 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-white/5"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between">
          <a href="#" className="text-xl sm:text-2xl font-display font-bold" data-testid="nav-logo">
            <span className="text-primary">M</span>ohammed
          </a>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#about" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300" data-testid="nav-about">About</a>
            <a href="#skills" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300" data-testid="nav-skills">Skills</a>
            <a href="#contact" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300" data-testid="nav-contact">Contact</a>
          </div>
          
          <div className="flex items-center gap-3">
            <a 
              href="#contact"
              className="hidden sm:inline-flex group relative items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-primary text-primary-foreground text-sm font-medium overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-primary/25" 
              data-testid="nav-cta"
            >
              <span className="relative z-10">Let's Talk</span>
              <Mail className="w-4 h-4 relative z-10" />
            </a>
            
            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-lg bg-white/5 border border-white/10"
              data-testid="nav-menu-toggle"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-background/95 backdrop-blur-xl md:hidden"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="flex flex-col items-center justify-center h-full gap-8"
            >
              <a 
                href="#about" 
                onClick={() => setIsOpen(false)}
                className="text-2xl font-display font-medium hover:text-primary transition-colors"
              >
                About
              </a>
              <a 
                href="#skills" 
                onClick={() => setIsOpen(false)}
                className="text-2xl font-display font-medium hover:text-primary transition-colors"
              >
                Skills
              </a>
              <a 
                href="#contact" 
                onClick={() => setIsOpen(false)}
                className="text-2xl font-display font-medium hover:text-primary transition-colors"
              >
                Contact
              </a>
              <a 
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="mt-4 px-8 py-3 rounded-full bg-primary text-primary-foreground font-medium"
              >
                Let's Talk
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4">
      {/* Gradient Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-background to-background" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[400px] sm:w-[600px] lg:w-[800px] h-[400px] sm:h-[600px] lg:h-[800px] bg-primary/10 rounded-full blur-[80px] sm:blur-[120px]" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:32px_32px] sm:bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)]" />

      <div className="relative z-10 max-w-6xl mx-auto px-2 sm:px-6 py-24 sm:py-32">
        <motion.div 
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="text-center"
        >
          {/* Greeting */}
          <motion.p 
            variants={fadeInUp} 
            className="text-base sm:text-lg md:text-xl text-muted-foreground mb-2 sm:mb-4"
          >
            Hello, my name is
          </motion.p>
          
          {/* Name */}
          <motion.h1 
            variants={fadeInUp} 
            className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-display font-bold mb-4 sm:mb-6 tracking-tight"
          >
            <span className="bg-gradient-to-r from-white via-white to-white/60 bg-clip-text text-transparent">
              Mohammed
            </span>
          </motion.h1>
          
          {/* Role Tags */}
          <motion.div 
            variants={fadeInUp} 
            className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-2 sm:gap-3 md:gap-4 mb-6 sm:mb-8"
          >
            <span className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-white/5 border border-white/10 text-xs sm:text-sm md:text-base">
              <Code2 className="w-3 h-3 sm:w-4 sm:h-4 text-primary" />
              Software Engineer
            </span>
            <span className="text-muted-foreground hidden sm:inline">|</span>
            <span className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-white/5 border border-white/10 text-xs sm:text-sm md:text-base">
              <Smartphone className="w-3 h-3 sm:w-4 sm:h-4 text-accent" />
              Mobile Developer
            </span>
            <span className="text-muted-foreground hidden sm:inline">|</span>
            <span className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-white/5 border border-white/10 text-xs sm:text-sm md:text-base">
              <Globe className="w-3 h-3 sm:w-4 sm:h-4 text-purple-400" />
              Tech Enthusiast
            </span>
          </motion.div>
          
          {/* Description */}
          <motion.p 
            variants={fadeInUp} 
            className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-xl md:max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed px-2"
          >
            A passionate engineer who loves turning complex ideas into simple, sleek solutions. 
            Building cool stuff, one line of code at a time.
          </motion.p>
          
          {/* CTA Buttons */}
          <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <a 
              href="#about"
              className="w-full sm:w-auto group relative inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-primary text-primary-foreground font-medium overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-primary/30 hover:scale-105" 
              data-testid="hero-learn-more"
            >
              <span className="relative z-10">Explore My Work</span>
              <ArrowDown className="w-4 h-4 relative z-10 group-hover:translate-y-1 transition-transform" />
            </a>
            <a 
              href="#contact"
              className="w-full sm:w-auto group inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-full border border-white/20 text-foreground font-medium transition-all duration-300 hover:bg-white/5 hover:border-white/30 hover:scale-105" 
              data-testid="hero-contact"
            >
              Get In Touch
              <Mail className="w-4 h-4 group-hover:rotate-12 transition-transform" />
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div 
            variants={fadeInUp} 
            className="flex items-center justify-center gap-3 sm:gap-4 mt-8 sm:mt-12"
          >
            <a href="#" className="p-2.5 sm:p-3 rounded-full bg-white/5 border border-white/10 text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300">
              <Github className="w-4 h-4 sm:w-5 sm:h-5" />
            </a>
            <a href="#" className="p-2.5 sm:p-3 rounded-full bg-white/5 border border-white/10 text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300">
              <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
            </a>
            <a href="#" className="p-2.5 sm:p-3 rounded-full bg-white/5 border border-white/10 text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300">
              <Twitter className="w-4 h-4 sm:w-5 sm:h-5" />
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 hidden sm:block"
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
      description: "A creative technologist on a mission to craft beautiful digital experiences.",
      gradient: "from-primary to-purple-500"
    },
    {
      icon: Sparkles,
      title: "My Passion",
      description: "Turning complex ideas into elegant solutions. Currently diving into mobile development.",
      gradient: "from-accent to-cyan-400"
    },
    {
      icon: Layers,
      title: "What I Do",
      description: "Building innovative software and making products that people love to use.",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: Target,
      title: "My Goal",
      description: "Driven by creativity and striving to become a world-class software engineer.",
      gradient: "from-orange-500 to-yellow-500"
    }
  ];

  return (
    <section id="about" className="relative py-16 sm:py-24 md:py-32 overflow-hidden px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-16"
        >
          <span className="inline-block px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-primary/10 text-primary text-xs sm:text-sm font-medium mb-3 sm:mb-4">
            About Me
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-3 sm:mb-4">
            Get to Know <span className="text-primary">Me</span>
          </h2>
          <p className="text-muted-foreground max-w-xl md:max-w-2xl mx-auto text-sm sm:text-base md:text-lg px-2">
            Discover my journey, passion, and what drives me to create amazing digital experiences.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
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
              <div className="relative bg-white/[0.03] border border-white/10 rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 h-full transition-all duration-500 hover:bg-white/[0.06] hover:border-white/20 overflow-hidden">
                <div className={`absolute -top-16 -right-16 w-32 h-32 bg-gradient-to-br ${card.gradient} rounded-full blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />
                
                <div className={`w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-lg sm:rounded-xl bg-gradient-to-br ${card.gradient} flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <card.icon className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-display font-semibold mb-2 sm:mb-3">{card.title}</h3>
                <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">{card.description}</p>
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
    <section id="skills" className="relative py-16 sm:py-24 md:py-32 overflow-hidden px-4">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      
      <div className="relative max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-16"
        >
          <span className="inline-block px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-accent/10 text-accent text-xs sm:text-sm font-medium mb-3 sm:mb-4">
            My Skills
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-3 sm:mb-4">
            What I'm <span className="text-accent">Good At</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-5 sm:gap-6 md:gap-8 max-w-4xl mx-auto">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex justify-between mb-2">
                <span className="font-medium text-sm sm:text-base">{skill.name}</span>
                <span className="text-muted-foreground text-sm sm:text-base">{skill.level}%</span>
              </div>
              <div className="h-2 sm:h-2.5 bg-white/10 rounded-full overflow-hidden">
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
    <section id="contact" className="relative py-16 sm:py-24 md:py-32 overflow-hidden px-4">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[300px] sm:w-[400px] md:w-[600px] h-[200px] sm:h-[300px] md:h-[400px] bg-primary/10 rounded-full blur-[80px] sm:blur-[120px]" />

      <div className="relative max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            <span className="inline-block px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-primary/10 text-primary text-xs sm:text-sm font-medium mb-3 sm:mb-4">
              Contact Me
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-3 sm:mb-4">
              Let's Work <span className="text-primary">Together</span>
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base md:text-lg mb-6 sm:mb-8 leading-relaxed max-w-lg mx-auto lg:mx-0">
              Have a project in mind? Let's create something amazing together. 
              I'm always open to discussing new opportunities.
            </p>
            
            <div className="flex justify-center lg:justify-start">
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-primary/10 flex items-center justify-center">
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                </div>
                <div className="text-left">
                  <p className="text-xs sm:text-sm text-muted-foreground">Email</p>
                  <p className="font-medium text-sm sm:text-base">hello@mohammed.dev</p>
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
            <form onSubmit={handleSubmit} className="bg-white/[0.03] border border-white/10 rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 space-y-4 sm:space-y-6">
              <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
                <div className="space-y-1.5 sm:space-y-2">
                  <label className="text-xs sm:text-sm text-muted-foreground">Your Name</label>
                  <Input
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="bg-white/5 border-white/10 focus:border-primary/50 h-10 sm:h-12 text-sm sm:text-base"
                    data-testid="contact-name"
                  />
                </div>
                <div className="space-y-1.5 sm:space-y-2">
                  <label className="text-xs sm:text-sm text-muted-foreground">Your Email</label>
                  <Input
                    type="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="bg-white/5 border-white/10 focus:border-primary/50 h-10 sm:h-12 text-sm sm:text-base"
                    data-testid="contact-email"
                  />
                </div>
              </div>
              
              <div className="space-y-1.5 sm:space-y-2">
                <label className="text-xs sm:text-sm text-muted-foreground">Subject</label>
                <Input
                  placeholder="Project Inquiry"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="bg-white/5 border-white/10 focus:border-primary/50 h-10 sm:h-12 text-sm sm:text-base"
                  data-testid="contact-subject"
                />
              </div>
              
              <div className="space-y-1.5 sm:space-y-2">
                <label className="text-xs sm:text-sm text-muted-foreground">Message</label>
                <Textarea
                  placeholder="Tell me about your project..."
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="bg-white/5 border-white/10 focus:border-primary/50 resize-none text-sm sm:text-base"
                  data-testid="contact-message"
                />
              </div>
              
              <button 
                type="submit" 
                className="group relative w-full inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl bg-primary text-primary-foreground font-medium overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-primary/30 text-sm sm:text-base"
                data-testid="contact-submit"
              >
                <span className="relative z-10">Send Message</span>
                <Send className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" />
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
    <footer className="border-t border-white/10 py-6 sm:py-8 px-4">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs sm:text-sm text-muted-foreground text-center sm:text-left">
          © 2024 Mohammed. Built with passion ❤️
        </p>
        <div className="flex items-center gap-4">
          <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
            <Github className="w-4 h-4 sm:w-5 sm:h-5" />
          </a>
          <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
            <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
          </a>
          <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
            <Twitter className="w-4 h-4 sm:w-5 sm:h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Contact />
      <Footer />
    </main>
  );
}