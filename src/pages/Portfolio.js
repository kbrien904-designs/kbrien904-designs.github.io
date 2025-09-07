import React, { useState, useMemo } from 'react';
import { Calendar, ExternalLink } from 'lucide-react';

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [hoveredProject, setHoveredProject] = useState(null);
  const [hoveredCategoryButton, setHoveredCategoryButton] = useState(null);

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
    },
    {
      id: 7,
      title: "Fintech Dashboard",
      category: "ui-ux",
      image: "https://via.placeholder.com/600x400/e2e8f0/64748b?text=Fintech+Dashboard",
      description: "Complex financial dashboard with real-time data visualization and trading capabilities.",
      tags: ["Fintech", "Data Visualization", "Real-time UI"],
      year: "2022",
      link: "#"
    },
    {
      id: 8,
      title: "Restaurant Branding",
      category: "branding",
      image: "https://via.placeholder.com/600x400/f1f5f9/475569?text=Restaurant+Branding",
      description: "Complete brand identity for a farm-to-table restaurant including menus and signage.",
      tags: ["Restaurant Design", "Print Collateral", "Brand Identity"],
      year: "2022",
      link: "#"
    }
  ];

  const CATEGORIES = [
    { id: 'all', name: 'All work', count: PORTFOLIO_DATA.length },
    { id: 'ui-ux', name: 'UI/UX', count: PORTFOLIO_DATA.filter(p => p.category === 'ui-ux').length },
    { id: 'branding', name: 'Branding', count: PORTFOLIO_DATA.filter(p => p.category === 'branding').length },
    { id: 'web', name: 'Web design', count: PORTFOLIO_DATA.filter(p => p.category === 'web').length },
    { id: 'print', name: 'Print', count: PORTFOLIO_DATA.filter(p => p.category === 'print').length }
  ];

  // Memoized filtered projects
  const filteredProjects = useMemo(() => 
    selectedCategory === 'all' 
      ? PORTFOLIO_DATA 
      : PORTFOLIO_DATA.filter(project => project.category === selectedCategory),
    [selectedCategory]
  );

  const ProjectCard = ({ project, index }) => (
    <div
      className="group"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-200 hover:shadow-lg transition-all duration-300">
        <div className="relative overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
            <a 
              href={project.link}
              className="opacity-0 group-hover:opacity-100 bg-white text-slate-900 px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center gap-2"
            >
              View project <ExternalLink size={16} />
            </a>
          </div>
        </div>
        
        <div className="p-6">
          <div className="flex items-center gap-2 text-sm text-slate-500 mb-3">
            <Calendar size={16} />
            <time>{project.year}</time>
          </div>
          <h3 className="text-2xl font-medium text-slate-900 mb-3 group-hover:text-red-500 transition-colors">
            {project.title}
          </h3>
          <p className="text-slate-600 mb-4 leading-relaxed">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm hover:bg-red-100 hover:text-red-700 transition-colors"
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
        .slide-in { animation: slideInUp 0.8s ease-out forwards; }
      `}</style>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-6xl md:text-8xl font-light text-slate-900 mb-8 leading-tight slide-in">
            Portfolio
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed mb-12">
            A collection of selected projects showcasing my approach to solving design challenges 
            across different industries and platforms. Each project represents a unique journey 
            of research, strategy, and creative execution.
          </p>
        </div>
      </section>

      {/* Filter and Projects Section */}
      <section className="pb-16 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Filter Categories */}
          <div className="flex flex-wrap gap-2 mb-12 justify-center" role="tablist">
            {CATEGORIES.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full transition-all duration-300 relative text-lg ${
                  selectedCategory === category.id
                    ? 'text-white shadow-lg'
                    : 'bg-white text-slate-600 border border-slate-200 hover:shadow-md'
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
                <span className="ml-2 text-sm opacity-70">({category.count})</span>
              </button>
            ))}
          </div>

          {/* Results Count */}
          <div className="text-center mb-8">
            <p className="text-slate-600">
              Showing <span className="font-medium text-red-500">{filteredProjects.length}</span> projects
              {selectedCategory !== 'all' && (
                <span> in <span className="font-medium">{CATEGORIES.find(c => c.id === selectedCategory)?.name}</span></span>
              )}
            </p>
          </div>

          {/* Project Grid */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>

          {/* Empty State */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-16">
              <div className="text-slate-400 text-6xl mb-4">🎨</div>
              <h3 className="text-2xl font-medium text-slate-900 mb-2">No projects found</h3>
              <p className="text-slate-600">Try selecting a different category to see more work.</p>
            </div>
          )}
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-light text-slate-900 mb-8">My Design Process</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-red-500 font-bold text-lg">1</span>
              </div>
              <h3 className="text-xl font-medium text-slate-900 mb-2">Research</h3>
              <p className="text-slate-600">Understanding users, market, and business requirements</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-red-500 font-bold text-lg">2</span>
              </div>
              <h3 className="text-xl font-medium text-slate-900 mb-2">Strategy</h3>
              <p className="text-slate-600">Defining goals, user flows, and design principles</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-red-500 font-bold text-lg">3</span>
              </div>
              <h3 className="text-xl font-medium text-slate-900 mb-2">Design</h3>
              <p className="text-slate-600">Creating wireframes, prototypes, and final designs</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-red-500 font-bold text-lg">4</span>
              </div>
              <h3 className="text-xl font-medium text-slate-900 mb-2">Test</h3>
              <p className="text-slate-600">Validating solutions through testing and iteration</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-slate-900 to-slate-700 rounded-3xl p-12 text-center text-white relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-10 right-10 w-64 h-64 bg-white rounded-full blur-3xl"></div>
              <div className="absolute bottom-10 left-10 w-48 h-48 bg-red-300 rounded-full blur-3xl"></div>
            </div>
            
            <div className="relative z-10">
              <h2 className="text-4xl font-light mb-6">Interested in working together?</h2>
              <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto leading-relaxed">
                I'm always excited to take on new challenges and collaborate on innovative projects. 
                Let's discuss how we can bring your vision to life.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="mailto:kathleen@example.com" 
                  className="bg-white text-slate-900 px-8 py-4 rounded-full hover:shadow-2xl transition-all duration-300 text-lg font-medium"
                >
                  Start a project
                </a>
                <a 
                  href="/contact"
                  className="border-2 border-white text-white px-8 py-4 rounded-full hover:bg-white hover:text-slate-900 transition-all duration-300 text-lg font-medium"
                >
                  Get in touch
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;