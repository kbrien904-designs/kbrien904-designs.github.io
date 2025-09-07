import React, { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, Mail, Github, Linkedin, ArrowRight, Calendar, Sparkles, Download } from 'lucide-react';

// Constants moved outside component to prevent recreation
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
    }
];

const CATEGORIES = [
    { id: 'all', name: 'All work', count: 4 },
    { id: 'ui-ux', name: 'UI/UX', count: 2 },
    { id: 'branding', name: 'Branding', count: 1 },
    { id: 'web', name: 'Web design', count: 1 }
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

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [scrollY, setScrollY] = useState(0);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [hoverState, setHoverState] = useState({
    project: null,
    button: null,
    categoryButton: null
  });

  // Parallax scroll effect
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Auto-rotate testimonials
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  // Memoized filtered projects
  const filteredProjects = useMemo(() => 
    selectedCategory === 'all' 
      ? PORTFOLIO_DATA 
      : PORTFOLIO_DATA.filter(project => project.category === selectedCategory),
    [selectedCategory]
  );

  const ProjectCard = ({ project, index }) => {
    const [imageError, setImageError] = useState(false);
    const [imageLoading, setImageLoading] = useState(true);

    return (
      <div
        className="group"
        style={{ animationDelay: `${index * 100}ms` }}
      >
        <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-200">
          <div className="relative overflow-hidden">
            {imageLoading && (
              <div className="w-full h-64 bg-slate-200 animate-pulse flex items-center justify-center">
                <span className="text-slate-400">Loading...</span>
              </div>
            )}
            {imageError ? (
              <div className="w-full h-64 bg-slate-100 flex items-center justify-center">
                <span className="text-slate-500">Image not available</span>
              </div>
            ) : (
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover"
                loading="lazy"
                style={{ display: imageLoading ? 'none' : 'block' }}
                onLoad={() => setImageLoading(false)}
                onError={() => {
                  setImageError(true);
                  setImageLoading(false);
                }}
              />
            )}
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
              backgroundColor: hoverState.project === project.id ? '#475569' : '#0f172a'
            }}
            onMouseEnter={() => setHoverState(prev => ({ ...prev, project: project.id }))}
            onMouseLeave={() => setHoverState(prev => ({ ...prev, project: null }))}
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
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      <style>{`
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
        .custom-red { color: #ed5c5c; }
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
      `}</style>
      
      {/* Hero Section with Parallax */}
      <section className="pt-24 pb-16 px-6 overflow-hidden" role="banner" aria-label="Welcome and introduction">
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
            <h1 className="text-6xl md:text-8xl font-light text-slate-900 mb-6 leading-tight slide-in" role="heading" aria-level="1">
              <span className="text-3xl md:text-5xl block mb-4 text-slate-700 leading-relaxed">
                I am a <span className="pink-highlight font-semibold">multidisciplinary product designer</span> interested in designing thoughtful experiences that solve problems for both business and users.
              </span>
            </h1>
            <p className="text-xl text-slate-600 mb-8 max-w-2xl leading-relaxed">
              Currently employed as a Visual Designer at <span className="font-semibold">IBM</span>, working on AI-powered enterprise solutions.
            </p>
            <div className="flex flex-wrap gap-4 mb-12">
              <Link 
                to="/portfolio"
                className="bg-gradient-to-r from-slate-900 to-slate-700 text-white px-8 py-3 rounded-full shadow-lg transition-all duration-300 flex items-center gap-2"
                style={{
                  background: hoverState.button === 'work' ? 'linear-gradient(to right, #475569, #64748b)' : undefined
                }}
                onMouseEnter={() => setHoverState(prev => ({ ...prev, button: 'work' }))}
                onMouseLeave={() => setHoverState(prev => ({ ...prev, button: null }))}
              >
                View my work <ArrowRight size={16} />
              </Link>
              <button 
                className="px-8 py-3 rounded-full shadow-lg transition-all duration-300 flex items-center gap-2"
                style={{
                  background: hoverState.button === 'resume' 
                    ? '#ed5c5c' 
                    : 'linear-gradient(white, white) padding-box, linear-gradient(135deg, #ed5c5c, #c53030) border-box',
                  border: '2px solid transparent',
                  color: hoverState.button === 'resume' ? 'white' : '#374151'
                }}
                onMouseEnter={() => setHoverState(prev => ({ ...prev, button: 'resume' }))}
                onMouseLeave={() => setHoverState(prev => ({ ...prev, button: null }))}
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

      {/* Featured Portfolio Preview */}
      <section className="py-16 px-6" role="main" aria-label="Featured work portfolio">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-12">
            <div>
              <h2 className="text-4xl font-light text-slate-900 mb-2" role="heading" aria-level="2">Featured work</h2>
              <p className="text-slate-600">A selection of my best projects</p>
            </div>
            
            <Link 
              to="/portfolio" 
              className="mt-6 md:mt-0 text-red-500 hover:text-red-600 font-medium flex items-center gap-2"
            >
              View all work <ArrowRight size={16} />
            </Link>
          </div>

          {/* Project Grid - Show first 4 projects */}
          <div className="grid gap-8 md:grid-cols-2" role="region" aria-label="Portfolio projects grid">
            {PORTFOLIO_DATA.slice(0, 4).map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-6 bg-gradient-to-br from-slate-50 to-white" role="region" aria-label="Client testimonials">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-light text-slate-900 mb-12" role="heading" aria-level="2">What clients say</h2>
          <div className="relative">
            <div className="p-8" role="region" aria-live="polite" aria-label="Current testimonial">
              <p className="text-xl text-slate-700 mb-8 italic leading-relaxed">
                "{TESTIMONIALS[activeTestimonial].text}"
              </p>
              <div className="flex items-center justify-center gap-4">
                <img
                  src={TESTIMONIALS[activeTestimonial].image}
                  alt={`Photo of ${TESTIMONIALS[activeTestimonial].author}`}
                  className="w-16 h-16 rounded-full object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.marginLeft = '0';
                  }}
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

      {/* CTA Section */}
      <section className="py-16 px-6" role="region" aria-label="Contact call-to-action">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-slate-900 to-slate-700 rounded-3xl p-12 text-center text-white relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-10 right-10 w-64 h-64 bg-white rounded-full blur-3xl"></div>
              <div className="absolute bottom-10 left-10 w-48 h-48 bg-red-300 rounded-full blur-3xl"></div>
            </div>
            
            <div className="relative z-10">
              <Sparkles className="mx-auto mb-4 text-red-300" size={32} />
              <h2 className="text-4xl font-light mb-6" role="heading" aria-level="2">Let's create something amazing</h2>
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
                <Link 
                  to="/contact"
                  className="border-2 border-white text-white px-8 py-4 rounded-full hover:bg-white hover:text-slate-900 transition-all duration-300 text-lg font-medium"
                >
                  Get in touch
                </Link>
              </div>
              
              <div className="flex justify-center space-x-6" role="navigation" aria-label="Social media links">
                <a href="https://linkedin.com" className="text-white/70 hover:text-white transition-colors" aria-label="Visit LinkedIn profile">
                  <Linkedin size={24} />
                </a>
                <a href="https://github.com" className="text-white/70 hover:text-white transition-colors" aria-label="Visit GitHub profile">
                  <Github size={24} />
                </a>
                <a href="https://dribbble.com" className="text-white/70 hover:text-white transition-colors" aria-label="Visit Dribbble portfolio">
                  <ExternalLink size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;