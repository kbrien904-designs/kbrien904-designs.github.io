import React, { useState, useMemo, useEffect } from 'react';
import { ExternalLink, Mail, Github, Linkedin, ArrowRight, Calendar, Sparkles, Download, Menu, X } from 'lucide-react';

const DesignPortfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [hoveredProject, setHoveredProject] = useState(null);
  const [hoveredNavItem, setHoveredNavItem] = useState(null);
  const [scrollY, setScrollY] = useState(0);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [hoveredButton, setHoveredButton] = useState(null);
  const [hoveredCategoryButton, setHoveredCategoryButton] = useState(null);

  // Parallax scroll effect
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Check if mobile screen
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile(); // Check on mount
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Auto-rotate testimonials
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  // Portfolio data
  const PORTFOLIO_DATA = [
    {
      id: 1,
      title: "E-commerce Mobile App",
      category: "ui-ux",
      image: "https://via.placeholder.com/600x400/e2e8f0/64748b?text=E-commerce+Mobile+App",
      description: "Complete redesign of a fashion e-commerce mobile experience focusing on conversion optimization.",
      tags: ["Mobile Design", "User Research", "Prototyping"],
      year: "2025",
      link: "#"
    },
    {
      id: 2,
      title: "Brand Identity System",
      category: "branding",
      image: "https://via.placeholder.com/600x400/f1f5f9/475569?text=Brand+Identity+System",
      description: "Full brand identity development for a sustainable tech startup, including logo, guidelines, and applications.",
      tags: ["Brand Strategy", "Logo Design", "Guidelines"],
      year: "2025",
      link: "#"
    },
    {
      id: 3,
      title: "IBM Digital IT Support experience",
      category: "ui-ux",
      image: "https://via.placeholder.com/600x400/e2e8f0/64748b?text=IBM+Digital+IT+Support+experience",
      description: "Redesigned analytics dashboard improving user engagement by 40% through better information hierarchy.",
      tags: ["Dashboard Design", "Data Visualization", "UX Research"],
      year: "2023",
      link: "#"
    },
    {
      id: 4,
      title: "Marketing Website",
      category: "web",
      image: "https://via.placeholder.com/600x400/f8fafc/334155?text=Marketing+Website",
      description: "Modern marketing website with custom animations and optimized conversion funnels.",
      tags: ["Web Design", "Animation", "Conversion Optimization"],
      year: "2023",
      link: "#"
    },
    {
      id: 5,
      title: "Package Design Collection",
      category: "print",
      image: "https://via.placeholder.com/600x400/f1f5f9/475569?text=Package+Design+Collection",
      description: "Series of premium package designs for artisanal food products emphasizing sustainability.",
      tags: ["Package Design", "Sustainability", "Print Design"],
      year: "2023",
      link: "#"
    },
    {
      id: 6,
      title: "Healthcare App UX",
      category: "ui-ux",
      image: "https://via.placeholder.com/600x400/e2e8f0/64748b?text=Healthcare+App+UX",
      description: "Patient management app focusing on accessibility and ease of use for elderly users.",
      tags: ["Healthcare", "Accessibility", "User Testing"],
      year: "2023",
      link: "#"
    }
  ];

  const CATEGORIES = [
    { id: 'all', name: 'All work', count: 6 },
    { id: 'ui-ux', name: 'UI/UX', count: 3 },
    { id: 'branding', name: 'Branding', count: 1 },
    { id: 'web', name: 'Web design', count: 1 },
    { id: 'print', name: 'Print', count: 1 }
  ];

  const TESTIMONIALS = [
    {
      text: "Kathleen's design thinking and attention to detail transformed our product. She doesn't just create beautiful interfaces; she solves real business problems.",
      author: "Sarah Johnson",
      role: "Product Manager, TechCorp",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face"
    },
    {
      text: "Working with Kathleen was a game-changer for our brand. Her strategic approach and creative execution exceeded all our expectations.",
      author: "Michael Chen",
      role: "CEO, StartupX",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
    },
    {
      text: "Kathleen has an incredible ability to translate complex requirements into intuitive, user-friendly designs. She's been instrumental in our product's success.",
      author: "Emily Rodriguez",
      role: "Head of Design, Innovation Labs",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face"
    }
  ];

  const EXPERIENCE = [
    {
      title: "Visual Designer",
      company: "IBM",
      period: "2022 - Present",
      description: "Leading design initiatives for AI-powered enterprise solutions, focusing on human-centered design and accessibility.",
      achievements: ["Designed AI assistant interface used by 100K+ employees", "Led design system implementation across 5 product teams", "Improved user satisfaction scores by 35%"]
    },
    {
      title: "Senior Product Designer",
      company: "Design Studio X",
      period: "2020 - 2022",
      description: "Collaborated with Fortune 500 clients to deliver innovative digital experiences across web and mobile platforms.",
      achievements: ["Managed design for 20+ client projects", "Mentored junior designers", "Established design processes that reduced delivery time by 30%"]
    },
    {
      title: "UX Designer",
      company: "Creative Agency",
      period: "2018 - 2020",
      description: "Focused on user research and interface design for consumer-facing applications in healthcare and fintech sectors.",
      achievements: ["Conducted 50+ user research sessions", "Designed award-winning healthcare app", "Increased client retention by 40%"]
    }
  ];

  // Memoized filtered projects
  const filteredProjects = useMemo(() => 
    selectedCategory === 'all' 
      ? PORTFOLIO_DATA 
      : PORTFOLIO_DATA.filter(project => project.category === selectedCategory),
    [selectedCategory]
  );

  // Components
  const NavItem = ({ href, children, navKey, mobile = false }) => (
    <a 
      href={href} 
      className={`relative group nav-hover transition-colors py-2 ${
        mobile 
          ? 'block text-slate-600 text-lg py-3 border-b border-slate-100 last:border-b-0' 
          : 'text-slate-600'
      }`}
      onMouseEnter={() => !mobile && setHoveredNavItem(navKey)}
      onMouseLeave={() => !mobile && setHoveredNavItem(null)}
      onClick={mobile ? () => setMobileMenuOpen(false) : undefined}
    >
      {children}
      {!mobile && <WiggleLine isVisible={hoveredNavItem === navKey} variant={navKey} />}
    </a>
  );

  const WiggleLine = ({ isVisible, variant }) => {
    const paths = {
      work: "M2,4 Q10,1 18,3 T34,2 Q42,4 50,2 T66,3 Q74,1 82,4 T98,3",
      about: "M3,5 Q8,2 15,4 T28,3 Q35,5 42,3 T55,4 Q62,2 69,5 T82,4 Q89,6 97,4",
      experience: "M1,3 Q12,6 23,2 T39,4 Q46,1 54,5 T70,3 Q77,6 84,2 T99,5",
      contact: "M2,3 Q9,5 16,2 T32,4 Q39,1 46,5 T62,3 Q69,6 76,2 T92,4 Q98,1 99,3"
    };

    return (
      <svg
        className={`absolute -bottom-1 left-0 w-full h-2 transition-opacity duration-300 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
        viewBox="0 0 100 8"
        preserveAspectRatio="none"
      >
        <path
          d={paths[variant]}
          stroke="#ed5c5c"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          className={`wiggle-line ${isVisible ? 'animate' : ''}`}
        />
      </svg>
    );
  };

  const ProjectCard = ({ project, index }) => (
    <div
      className="group"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-200">
        <div className="relative overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-64 object-cover"
            loading="lazy"
          />
        </div>
        
        <div className="p-6">
          <div className="flex items-center gap-2 text-sm text-slate-500 mb-3">
            <Calendar size={16} />
            <time>{project.year}</time>
          </div>
          <h3 className="text-2xl font-medium text-slate-900 mb-3">
            {project.title}
          </h3>
          <p className="text-slate-600 mb-4 leading-relaxed">
            {project.description}
          </p>
          <a 
            href={project.link} 
            className="inline-block bg-slate-900 text-white px-6 py-2 rounded-full transition-colors text-sm font-medium mb-4"
            style={{
              backgroundColor: hoveredProject === project.id ? '#475569' : '#0f172a'
            }}
            onMouseEnter={() => setHoveredProject(project.id)}
            onMouseLeave={() => setHoveredProject(null)}
          >
            View project
          </a>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm hover:bg-slate-200 transition-colors"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      <style>{`
        @keyframes drawLeftToRight {
          from { stroke-dashoffset: 120; }
          to { stroke-dashoffset: 0; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes slideInUp {
          from { 
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .wiggle-line {
          stroke-dasharray: 120;
          stroke-dashoffset: 120;
          transition: none;
        }
        .wiggle-line.animate {
          animation: drawLeftToRight 0.6s ease-out forwards;
        }
        .custom-red { color: #ed5c5c; }
        .nav-hover:hover { color: #ed5c5c; }
        .custom-red-gradient {
          background: linear-gradient(135deg, #ed5c5c, #c53030);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .pink-highlight {
          padding: 2px 6px;
          border-radius: 4px;
          position: relative;
          color: inherit;
          background: linear-gradient(to right, #fed7d7 0%, #fed7d7 100%);
          background-size: 0% 100%;
          background-repeat: no-repeat;
          background-position: left center;
          animation: highlightSwipe 1.5s ease-out 1s forwards;
        }
        @keyframes highlightSwipe {
          0% { background-size: 0% 100%; color: inherit; }
          50% { background-size: 100% 100%; color: inherit; }
          100% { background-size: 100% 100%; color: #c53030; }
        }
        .float-animation { animation: float 6s ease-in-out infinite; }
        .slide-in { animation: slideInUp 0.8s ease-out forwards; }
        .gradient-border {
          position: relative;
          background: linear-gradient(white, white) padding-box,
                      linear-gradient(135deg, #ed5c5c, #c53030) border-box;
          border: 2px solid transparent;
        }
      `}</style>
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-slate-200 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold custom-red-gradient">
            Kathleen O'Brien
          </div>
          
          {/* Desktop Navigation */}
          {!isMobile && (
            <div className="flex space-x-8">
              <NavItem href="#work" navKey="work">Work</NavItem>
              <NavItem href="#about" navKey="about">About</NavItem>
              <NavItem href="#contact" navKey="contact">Contact</NavItem>
            </div>
          )}
          
          {/* Mobile Menu Button */}
          {isMobile && (
            <button 
              className="text-slate-600 hover:text-red-500 transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          )}
        </div>
        
        {/* Mobile Navigation Menu */}
        {isMobile && mobileMenuOpen && (
          <div className="bg-white border-t border-slate-200 shadow-lg">
            <div className="px-6 py-4 space-y-1">
              <NavItem href="#work" navKey="work" mobile>Work</NavItem>
              <NavItem href="#about" navKey="about" mobile>About</NavItem>
              <NavItem href="#contact" navKey="contact" mobile>Contact</NavItem>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section with Parallax */}
      <section className="pt-24 pb-16 px-6 overflow-hidden">
        <div className="max-w-6xl mx-auto relative">
          {/* Floating shapes */}
          <div 
            className="absolute -top-20 -right-20 w-96 h-96 bg-gradient-to-br from-pink-200/20 to-red-200/20 rounded-full blur-3xl"
            style={{ transform: `translateY(${scrollY * 0.2}px)` }}
          />
          <div 
            className="absolute -bottom-20 -left-20 w-80 h-80 bg-gradient-to-tr from-slate-200/30 to-blue-200/30 rounded-full blur-3xl"
            style={{ transform: `translateY(${scrollY * -0.15}px)` }}
          />
          
          <div className="max-w-4xl relative z-10">
            <h1 className="text-6xl md:text-8xl font-light text-slate-900 mb-6 leading-tight slide-in">
              <span className="text-3xl md:text-5xl block mb-4 text-slate-700 leading-relaxed">
                I am a <span className="pink-highlight font-semibold">multidisciplinary product designer</span> interested in designing thoughtful experiences that solve problems for both business and users.
              </span>
            </h1>
            <p className="text-xl text-slate-600 mb-8 max-w-2xl leading-relaxed">
              Currently employed as a Visual Designer at <span className="font-semibold">IBM</span>, working on AI-powered enterprise solutions.
            </p>
            <div className="flex flex-wrap gap-4 mb-12">
              <button 
                className="bg-gradient-to-r from-slate-900 to-slate-700 text-white px-8 py-3 rounded-full shadow-lg transition-all duration-300 flex items-center gap-2"
                style={{
                  background: hoveredButton === 'work' ? 'linear-gradient(to right, #475569, #64748b)' : undefined
                }}
                onMouseEnter={() => setHoveredButton('work')}
                onMouseLeave={() => setHoveredButton(null)}
              >
                View my work <ArrowRight size={16} />
              </button>
              <button 
                className="px-8 py-3 rounded-full shadow-lg transition-all duration-300 flex items-center gap-2"
                style={{
                  background: hoveredButton === 'resume' 
                    ? '#ed5c5c' 
                    : 'linear-gradient(white, white) padding-box, linear-gradient(135deg, #ed5c5c, #c53030) border-box',
                  border: '2px solid transparent',
                  color: hoveredButton === 'resume' ? 'white' : '#374151'
                }}
                onMouseEnter={() => setHoveredButton('resume')}
                onMouseLeave={() => setHoveredButton(null)}
              >
                <Download size={16} /> Download resume
              </button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 max-w-2xl">
              <div>
                <p className="text-3xl font-bold custom-red-gradient">6+</p>
                <p className="text-slate-600">Years Experience</p>
              </div>
              <div>
                <p className="text-3xl font-bold custom-red-gradient">50+</p>
                <p className="text-slate-600">Projects Completed</p>
              </div>
              <div>
                <p className="text-3xl font-bold custom-red-gradient">95%</p>
                <p className="text-slate-600">Client Satisfaction</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="work" className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-12">
            <div>
              <h2 className="text-4xl font-light text-slate-900 mb-2">Selected work</h2>
              <p className="text-slate-600">Showcasing my best design projects</p>
            </div>
            
            {/* Filter Categories */}
            <div className="flex flex-wrap gap-2 mt-6 md:mt-0" role="tablist">
              {CATEGORIES.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-2 rounded-full transition-all duration-300 relative ${
                    selectedCategory === category.id
                      ? 'text-white shadow-lg'
                      : 'bg-white text-slate-600 border border-slate-200'
                  }`}
                  style={{
                    backgroundColor: selectedCategory === category.id 
                      ? (hoveredCategoryButton === category.id ? '#475569' : '#0f172a')
                      : (hoveredCategoryButton === category.id ? '#f1f5f9' : undefined)
                  }}
                  onMouseEnter={() => setHoveredCategoryButton(category.id)}
                  onMouseLeave={() => setHoveredCategoryButton(null)}
                  role="tab"
                  aria-selected={selectedCategory === category.id}
                >
                  {category.name}
                  <span className="ml-2 text-xs opacity-70">({category.count})</span>
                </button>
              ))}
            </div>
          </div>

          {/* Project Grid */}
          <div className="grid gap-8" style={{ gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr' }}>
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-6 bg-gradient-to-br from-slate-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-light text-slate-900 mb-12">Testimonials</h2>
          <div className="relative">
            <div className="p-8">
              <p className="text-xl text-slate-700 mb-8 italic leading-relaxed">
                "{TESTIMONIALS[activeTestimonial].text}"
              </p>
              <div className="flex items-center justify-center gap-4">
                <img
                  src={TESTIMONIALS[activeTestimonial].image}
                  alt={TESTIMONIALS[activeTestimonial].author}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div className="text-left">
                  <p className="font-medium text-slate-900">{TESTIMONIALS[activeTestimonial].author}</p>
                  <p className="text-slate-600">{TESTIMONIALS[activeTestimonial].role}</p>
                </div>
              </div>
            </div>
            <div className="flex justify-center gap-2 mt-6">
              {TESTIMONIALS.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    activeTestimonial === index 
                      ? 'w-8 bg-red-400' 
                      : 'bg-slate-300 hover:bg-slate-400'
                  }`}
                  aria-label={`View testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-slate-900 to-slate-700 rounded-3xl p-12 text-center text-white relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-10 right-10 w-64 h-64 bg-white rounded-full blur-3xl"></div>
              <div className="absolute bottom-10 left-10 w-48 h-48 bg-red-300 rounded-full blur-3xl"></div>
            </div>
            
            <div className="relative z-10">
              <Sparkles className="mx-auto mb-4 text-red-300" size={32} />
              <h2 className="text-4xl font-light mb-6">Let's create something amazing</h2>
              <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto leading-relaxed">
                Have a project in mind? I'd love to hear about it. Let's discuss how we can 
                bring your vision to life with thoughtful design.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <a 
                  href="mailto:kathleen@example.com" 
                  className="bg-white text-slate-900 px-8 py-4 rounded-full hover:shadow-2xl transition-all duration-300 text-lg font-medium flex items-center justify-center gap-2"
                >
                  <Mail size={20} />
                  kathleen@example.com
                </a>
                <button className="border-2 border-white text-white px-8 py-4 rounded-full hover:bg-white hover:text-slate-900 transition-all duration-300 text-lg font-medium">
                  Schedule a call
                </button>
              </div>
              
              <div className="flex justify-center space-x-6">
                <a href="https://linkedin.com" className="text-white/70 hover:text-white transition-colors">
                  <Linkedin size={24} />
                </a>
                <a href="https://github.com" className="text-white/70 hover:text-white transition-colors">
                  <Github size={24} />
                </a>
                <a href="https://dribbble.com" className="text-white/70 hover:text-white transition-colors">
                  <ExternalLink size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-slate-200">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-slate-600">
              © 2025 Kathleen O'Brien. All rights reserved.
            </p>
            <p className="text-sm text-slate-500 mt-1">
              Designed with ❤️ in New York
            </p>
          </div>
          <div className="flex space-x-6">
            <a href="#" className="text-slate-600 hover:text-red-500 transition-colors">Privacy</a>
            <a href="#" className="text-slate-600 hover:text-red-500 transition-colors">Terms</a>
            <a href="#" className="text-slate-600 hover:text-red-500 transition-colors">Sitemap</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default DesignPortfolio;
