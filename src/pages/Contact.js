import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, ExternalLink, Linkedin, Github, Calendar } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    project: '',
    budget: '',
    timeline: '',
    message: ''
  });

  const [hoveredButton, setHoveredButton] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Add form submission logic here
    setTimeout(() => {
      setIsSubmitting(false);
      alert('Thank you for your message! I\'ll get back to you soon.');
      setFormData({
        name: '',
        email: '',
        company: '',
        project: '',
        budget: '',
        timeline: '',
        message: ''
      });
    }, 1000);
  };

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
        <div className="max-w-6xl mx-auto text-left">
          <h1 className="text-6xl md:text-8xl font-light text-slate-900 mb-8 leading-tight slide-in">
            Get in touch
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed mb-12">
            Ready to start your next project? I'd love to hear from you. 
            Let's discuss how we can work together to create something amazing.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="pb-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            
            {/* Contact Form */}
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-slate-200">
              <h2 className="text-3xl font-light text-slate-900 mb-8">Send me a message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-slate-700 mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                      placeholder="Company name"
                    />
                  </div>
                  <div>
                    <label htmlFor="project" className="block text-sm font-medium text-slate-700 mb-2">
                      Project Type
                    </label>
                    <select
                      id="project"
                      name="project"
                      value={formData.project}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                    >
                      <option value="">Select project type</option>
                      <option value="ui-ux">UI/UX Design</option>
                      <option value="branding">Branding & Identity</option>
                      <option value="web">Web Design</option>
                      <option value="mobile">Mobile App Design</option>
                      <option value="consultation">Design Consultation</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="budget" className="block text-sm font-medium text-slate-700 mb-2">
                      Budget Range
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                    >
                      <option value="">Select budget range</option>
                      <option value="5k-10k">$5k - $10k</option>
                      <option value="10k-25k">$10k - $25k</option>
                      <option value="25k-50k">$25k - $50k</option>
                      <option value="50k+">$50k+</option>
                      <option value="discuss">Let's discuss</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="timeline" className="block text-sm font-medium text-slate-700 mb-2">
                      Timeline
                    </label>
                    <select
                      id="timeline"
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                    >
                      <option value="">Select timeline</option>
                      <option value="asap">ASAP</option>
                      <option value="1-2months">1-2 months</option>
                      <option value="3-6months">3-6 months</option>
                      <option value="6months+">6+ months</option>
                      <option value="flexible">Flexible</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                    Project Details *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows="6"
                    className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all resize-none"
                    placeholder="Tell me about your project, goals, and any specific requirements..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 px-8 rounded-xl font-medium text-lg transition-all duration-300 flex items-center justify-center gap-2"
                  style={{
                    background: isSubmitting 
                      ? '#94a3b8' 
                      : hoveredButton === 'submit' 
                        ? 'linear-gradient(to right, #c53030, #991b1b)' 
                        : 'linear-gradient(to right, #ed5c5c, #c53030)',
                    color: 'white'
                  }}
                  onMouseEnter={() => !isSubmitting && setHoveredButton('submit')}
                  onMouseLeave={() => setHoveredButton(null)}
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send message <Send size={20} />
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              
              {/* Contact Details */}
              <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-200">
                <h2 className="text-2xl font-light text-slate-900 mb-6">Contact Information</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail className="text-red-500" size={20} />
                    </div>
                    <div>
                      <h3 className="font-medium text-slate-900 mb-1">Email</h3>
                      <a href="mailto:kathleen@example.com" className="text-slate-600 hover:text-red-500 transition-colors">
                        kathleen@example.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone className="text-red-500" size={20} />
                    </div>
                    <div>
                      <h3 className="font-medium text-slate-900 mb-1">Phone</h3>
                      <a href="tel:+1234567890" className="text-slate-600 hover:text-red-500 transition-colors">
                        +1 (234) 567-8900
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="text-red-500" size={20} />
                    </div>
                    <div>
                      <h3 className="font-medium text-slate-900 mb-1">Location</h3>
                      <p className="text-slate-600">New York, NY</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Calendar className="text-red-500" size={20} />
                    </div>
                    <div>
                      <h3 className="font-medium text-slate-900 mb-1">Response Time</h3>
                      <p className="text-slate-600">Usually within 24 hours</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-200">
                <h2 className="text-2xl font-light text-slate-900 mb-6">Connect with me</h2>
                
                <div className="space-y-4">
                  <a 
                    href="https://linkedin.com" 
                    className="flex items-center gap-4 p-4 rounded-xl hover:bg-slate-50 transition-colors group"
                  >
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <Linkedin className="text-blue-600" size={20} />
                    </div>
                    <div>
                      <h3 className="font-medium text-slate-900 group-hover:text-blue-600 transition-colors">LinkedIn</h3>
                      <p className="text-slate-600 text-sm">Professional network</p>
                    </div>
                    <ExternalLink className="text-slate-400 ml-auto" size={16} />
                  </a>

                  <a 
                    href="https://github.com" 
                    className="flex items-center gap-4 p-4 rounded-xl hover:bg-slate-50 transition-colors group"
                  >
                    <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center">
                      <Github className="text-slate-700" size={20} />
                    </div>
                    <div>
                      <h3 className="font-medium text-slate-900 group-hover:text-slate-700 transition-colors">GitHub</h3>
                      <p className="text-slate-600 text-sm">Code & projects</p>
                    </div>
                    <ExternalLink className="text-slate-400 ml-auto" size={16} />
                  </a>

                  <a 
                    href="https://dribbble.com" 
                    className="flex items-center gap-4 p-4 rounded-xl hover:bg-slate-50 transition-colors group"
                  >
                    <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center">
                      <ExternalLink className="text-pink-600" size={20} />
                    </div>
                    <div>
                      <h3 className="font-medium text-slate-900 group-hover:text-pink-600 transition-colors">Dribbble</h3>
                      <p className="text-slate-600 text-sm">Design inspiration</p>
                    </div>
                    <ExternalLink className="text-slate-400 ml-auto" size={16} />
                  </a>
                </div>
              </div>

              {/* FAQ */}
              <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-200">
                <h2 className="text-2xl font-light text-slate-900 mb-6">Frequently Asked</h2>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="font-medium text-slate-900 mb-2">How do you approach new projects?</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      Every project starts with understanding your goals, users, and constraints. 
                      I believe in collaborative processes and keeping you involved throughout.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-medium text-slate-900 mb-2">What's your typical timeline?</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      Project timelines vary based on scope, but most projects range from 4-12 weeks. 
                      I'll provide a detailed timeline during our initial consultation.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-medium text-slate-900 mb-2">Do you work remotely?</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      Yes! I work with clients globally and have experience collaborating remotely. 
                      I'm also available for in-person meetings in the NYC area.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;