import { GraduationCap, BookOpen, Globe, CheckCircle, ArrowRight, ShieldCheck, Users, School } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export function StudyInEurope() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-[#0D4D85] text-white py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 opacity-10 pattern-grid-lg"></div>
        
        {/* Abstract Background Glow */}
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[600px] h-[600px] bg-[#D4A85E]/20 rounded-full blur-[120px] hidden md:block"></div>

        <div className="max-w-7xl mx-auto relative z-10 grid md:grid-cols-2 gap-12 items-center">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Shape Your Future with
                <span className="text-[#D4A85E]"> World-Class Education</span>
              </h1>
              <p className="text-xl text-white/90 mb-8 leading-relaxed max-w-2xl">
                Access top-ranked universities, diverse cultures, and affordable education across Europe. We guide you through every step of your academic journey.
              </p>
              <div className="flex gap-4">
                 <a href="#admission-process" className="bg-[#D4A85E] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#b88e4b] transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all">
                  Start Application
                </a>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Visual Composition */}
          <div className="hidden md:block relative h-[450px]">
            {/* Card 1: Visa Success */}
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: [0, -15, 0], opacity: 1 }}
              transition={{ 
                opacity: { duration: 0.8 },
                y: { repeat: Infinity, duration: 4, ease: "easeInOut" }
              }}
              className="absolute top-0 right-10 bg-white p-6 rounded-2xl shadow-2xl flex items-center gap-4 border-b-4 border-green-500 w-64"
            >
              <div className="bg-green-100 p-3 rounded-full text-green-600">
                <ShieldCheck size={32} />
              </div>
              <div>
                <p className="text-sm text-gray-500 font-medium">Visa Success</p>
                <p className="text-2xl font-bold text-[#0D4D85]">98.5%</p>
              </div>
            </motion.div>

            {/* Card 2: Students Placed */}
            <motion.div 
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: [0, 15, 0], opacity: 1 }}
              transition={{ 
                opacity: { duration: 0.8, delay: 0.2 },
                y: { repeat: Infinity, duration: 5, ease: "easeInOut", delay: 0.5 }
              }}
              className="absolute top-1/3 left-0 bg-white p-6 rounded-2xl shadow-2xl flex items-center gap-4 border-b-4 border-[#D4A85E] w-64"
            >
              <div className="bg-[#D4A85E]/10 p-3 rounded-full text-[#D4A85E]">
                <Users size={32} />
              </div>
              <div>
                <p className="text-sm text-gray-500 font-medium">Students Placed</p>
                <p className="text-2xl font-bold text-[#0D4D85]">500+</p>
              </div>
            </motion.div>

            {/* Card 3: Universities */}
            <motion.div 
              initial={{ y: 60, opacity: 0 }}
              animate={{ y: [0, -10, 0], opacity: 1 }}
              transition={{ 
                opacity: { duration: 0.8, delay: 0.4 },
                y: { repeat: Infinity, duration: 4.5, ease: "easeInOut", delay: 1 }
              }}
              className="absolute bottom-10 right-20 bg-white p-6 rounded-2xl shadow-2xl flex items-center gap-4 border-b-4 border-[#0D4D85] w-64"
            >
              <div className="bg-[#0D4D85]/10 p-3 rounded-full text-[#0D4D85]">
                <School size={32} />
              </div>
              <div>
                <p className="text-sm text-gray-500 font-medium">Partner Universities</p>
                <p className="text-2xl font-bold text-[#0D4D85]">50+</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Why Study in Europe */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-[#0D4D85] text-4xl font-bold mb-4">Why Study in Europe?</h2>
            <div className="h-1 w-24 bg-[#D4A85E] mx-auto rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Globe className="w-12 h-12 text-[#D4A85E]" />,
                title: "Global Perspective",
                desc: "Gain international exposure and broaden your horizons in a multicultural environment."
              },
              {
                icon: <BookOpen className="w-12 h-12 text-[#D4A85E]" />,
                title: "Quality Education",
                desc: "European degrees are recognized globally for their high academic standards and research."
              },
              {
                icon: <GraduationCap className="w-12 h-12 text-[#D4A85E]" />,
                title: "Affordable Tuition",
                desc: "Many European countries offer low or no tuition fees for international students."
              }
            ].map((feature, idx) => (
              <div key={idx} className="bg-gray-50 p-8 rounded-2xl hover:shadow-xl transition-all duration-300 border border-transparent hover:border-[#D4A85E]/20 group">
                <div className="mb-6 bg-white w-20 h-20 rounded-full flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-[#0D4D85] text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section className="py-20 px-4 bg-[#0D4D85]/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 items-center">
          <div className="md:w-1/2">
            <h2 className="text-[#0D4D85] text-4xl font-bold mb-8">Comprehensive Admission Support</h2>
            <div className="space-y-6">
              {[
                "University Shortlisting & Selection",
                "Application Documentation Review",
                "SOP & Letter of Recommendation Editing",
                "Scholarship Application Assistance",
                "Visa Interview Preparation",
                "Pre-departure Briefing"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <CheckCircle className="text-[#D4A85E] w-6 h-6 flex-shrink-0" />
                  <span className="text-lg text-gray-700 font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="md:w-1/2 bg-white p-8 rounded-3xl shadow-2xl relative overflow-hidden border-t-8 border-[#D4A85E]">
            <h3 className="text-2xl font-bold text-[#0D4D85] mb-6">Popular Destinations</h3>
            <div className="grid grid-cols-2 gap-4">
              {['Germany', 'France', 'Netherlands', 'Sweden', 'Spain', 'Italy'].map((country) => (
                <div key={country} className="flex items-center gap-2 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                  <span className="w-2 h-2 rounded-full bg-[#D4A85E]"></span>
                  <span className="text-gray-700 font-medium">{country}</span>
                </div>
              ))}
            </div>
            <div className="mt-8 pt-6 border-t border-gray-100">
               <div className="flex items-center gap-2 text-[#D4A85E] font-semibold">
                  <Globe size={20} />
                  <span>And many more...</span>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="admission-process" className="py-24 px-4 bg-[#0D4D85] text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-6">Ready to Start Your Journey?</h2>
          <p className="text-xl text-white/80 mb-10">
            Book a free consultation with our education counselors today and take things forward.
          </p>
          <Link to="/#contact" className="inline-flex items-center gap-2 bg-[#D4A85E] text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-[#b88e4b] transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1">
            Book Free Consultation
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
}
