import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Download, Calendar, Award, Users, Coffee } from 'lucide-react';

const About = () => {
  const [scrollY, setScrollY] = useState(0);
  const [hoveredButton, setHoveredButton] = useState(null);

  // Parallax scroll effect
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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

  const SKILLS = [
    { category: "Design Tools", skills: ["Figma", "Sketch", "Adobe Creative Suite", "Principle", "InVision"] },
    { category: "Research & Strategy", skills: ["User Research", "Usability Testing", "Design Strategy", "Information Architecture"] },
    { category: "Development", skills: ["HTML/CSS", "React", "Design Systems", "Prototyping"] },
    { category: "Collaboration", skills: ["Agile Methodology", "Design Sprints", "Cross-functional Teams", "Stakeholder Management"] }
  ];

  const EDUCATION = [
    {
      degree: "Master of Fine Arts",
      field: "Digital Design",
      school: "Rhode Island School of Design",
      year: "2018"
    },
    {
      degree: "Bachelor of Arts",
      field: "Graphic Design",
      school: "Parsons School of Design",
      year: "2016"
    }
  ];

  const ExperienceCard = ({ experience, index }) => (
    <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200 mb-8">
      <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
        <div>
          <h3 className="text-2xl font-medium text-slate-900 mb-2">{experience.title}</h3>
          <p className="text-xl text-red-500 font-medium mb-2">{experience.company}</p>
        </div>
        <div className="flex items-center gap-2 text-slate-500">
          <Calendar size={16} />
          <span>{experience.period}</span>
        </div>
      </div>
      <p className="text-slate-600 mb-6 leading-relaxed">{experience.description}</p>
      <div>
        <h4 className="font-medium text-slate-900 mb-3">Key Achievements:</h4>
        <ul className="space-y-2">
          {experience.achievements.map((achievement, i) => (
            <li key={i} className="flex items-start gap-3">
              <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
              <span className="text-slate-600">{achievement}</span>
            </li>
          ))}
        </ul>
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
        .custom-red-gradient {
          background: linear-gradient(135deg, #ed5c5c, #c53030);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .slide-in { animation: slideInUp 0.8s ease-out forwards; }
      `}</style>

      {/* Hero Section */}
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
            <h1 className="text-6xl md:text-8xl font-light text-slate-900 mb-8 leading-tight slide-in">
              About me
            </h1>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-xl text-slate-600 mb-6 leading-relaxed">
                  I'm a multidisciplinary product designer with over 6 years of experience creating 
                  digital experiences that balance user needs with business objectives. Currently based 
                  in New York, I work with teams to solve complex design challenges through research, 
                  strategy, and thoughtful execution.
                </p>
                <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                  My approach combines analytical thinking with creative problem-solving, always 
                  keeping the human experience at the center of every decision.
                </p>
                <div className="flex flex-wrap gap-4">
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
                  <Link 
                    to="/contact"
                    className="bg-gradient-to-r from-slate-900 to-slate-700 text-white px-8 py-3 rounded-full shadow-lg transition-all duration-300 flex items-center gap-2 hover:from-slate-700 hover:to-slate-600"
                  >
                    Get in touch <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
              <div className="relative">
                <div className="bg-gradient-to-br from-slate-100 to-slate-200 rounded-3xl h-96 flex items-center justify-center">
                  <div className="text-slate-400 text-center">
                    <Users size={64} className="mx-auto mb-4" />
                    <p className="text-lg">Professional Photo</p>
                    <p className="text-sm">Coming Soon</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold custom-red-gradient mb-2">6+</div>
              <p className="text-slate-600">Years Experience</p>
            </div>
            <div>
              <div className="text-4xl font-bold custom-red-gradient mb-2">50+</div>
              <p className="text-slate-600">Projects</p>
            </div>
            <div>
              <div className="text-4xl font-bold custom-red-gradient mb-2">95%</div>
              <p className="text-slate-600">Client Satisfaction</p>
            </div>
            <div>
              <div className="text-4xl font-bold custom-red-gradient mb-2">15</div>
              <p className="text-slate-600">Awards</p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-light text-slate-900 mb-12 text-center">Experience</h2>
          {EXPERIENCE.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} index={index} />
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 px-6 bg-gradient-to-br from-slate-50 to-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-light text-slate-900 mb-12 text-center">Skills & Expertise</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {SKILLS.map((skillGroup, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
                <h3 className="text-lg font-medium text-slate-900 mb-4">{skillGroup.category}</h3>
                <ul className="space-y-2">
                  {skillGroup.skills.map((skill, i) => (
                    <li key={i} className="text-slate-600">{skill}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-light text-slate-900 mb-12 text-center">Education</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {EDUCATION.map((edu, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200">
                <div className="flex items-start gap-3 mb-4">
                  <Award className="text-red-400 mt-1" size={20} />
                  <div>
                    <h3 className="text-xl font-medium text-slate-900 mb-1">{edu.degree}</h3>
                    <p className="text-red-500 font-medium mb-1">{edu.field}</p>
                    <p className="text-slate-600">{edu.school}</p>
                    <p className="text-slate-500 text-sm mt-2">{edu.year}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Personal Touch Section */}
      <section className="py-16 px-6 bg-gradient-to-br from-slate-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-light text-slate-900 mb-8">Beyond Design</h2>
          <p className="text-xl text-slate-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            When I'm not designing, you'll find me exploring New York's coffee scene, 
            practicing photography, or getting lost in a good book about design theory and psychology.
          </p>
          <div className="flex justify-center items-center gap-8 text-slate-400">
            <Coffee size={32} />
            <span className="text-2xl">+</span>
            <Award size={32} />
            <span className="text-2xl">+</span>
            <Users size={32} />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-br from-slate-900 to-slate-700 rounded-3xl p-12 text-white relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-10 right-10 w-64 h-64 bg-white rounded-full blur-3xl"></div>
              <div className="absolute bottom-10 left-10 w-48 h-48 bg-red-300 rounded-full blur-3xl"></div>
            </div>
            
            <div className="relative z-10">
              <h2 className="text-4xl font-light mb-6">Let's work together</h2>
              <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto leading-relaxed">
                I'm always interested in new opportunities and collaborations. 
                Let's discuss how we can bring your ideas to life.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact"
                  className="bg-white text-slate-900 px-8 py-4 rounded-full hover:shadow-2xl transition-all duration-300 text-lg font-medium"
                >
                  Get in touch
                </Link>
                <Link 
                  to="/portfolio"
                  className="border-2 border-white text-white px-8 py-4 rounded-full hover:bg-white hover:text-slate-900 transition-all duration-300 text-lg font-medium"
                >
                  View my work
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;