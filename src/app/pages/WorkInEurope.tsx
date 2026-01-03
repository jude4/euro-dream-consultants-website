import { Briefcase, Building2, Users, FileCheck, ArrowRight, ShieldCheck, HeartPulse, Cpu, Construction, Search, CheckCircle2, Plane } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export function WorkInEurope() {
  const industries = [
    { title: "IT & Tech", icon: <Cpu />, count: "85k+ Positions", color: "blue" },
    { title: "Engineering", icon: <Building2 />, count: "45k+ Positions", color: "amber" },
    { title: "Healthcare", icon: <HeartPulse />, count: "30k+ Positions", color: "rose" },
    { title: "Construction", icon: <Construction />, count: "20k+ Positions", color: "slate" },
  ];

  const roadmap = [
    { title: "Profile Evaluation", desc: "We analyze your skills and choose the best country for you.", icon: <Search /> },
    { title: "Documentation", desc: "Complete support for apostilles, translations, and CV optimization.", icon: <FileCheck /> },
    { title: "Job Matching", desc: "Connecting you with verified European employers in your sector.", icon: <Users /> },
    { title: "Visa & Deployment", desc: "Final visa interview prep and flight booking assistance.", icon: <Plane /> },
  ];

  return (
    <div className="bg-white overflow-x-hidden">
      {/* 1. Animated Career Hero */}
      <div className="relative bg-[#0D4D85] text-white py-24 px-4 overflow-hidden min-h-[600px] flex items-center">
        {/* Animated Background Blobs */}
        <motion.div 
          animate={{ scale: [1, 1.2, 1], x: [0, 50, 0] }}
          transition={{ repeat: Infinity, duration: 20 }}
          className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#D4A85E]/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/4"
        ></motion.div>
        
        <div className="max-w-7xl mx-auto relative z-10 w-full grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
              Your Professional <br />
              <span className="text-[#D4A85E]">Future in Europe</span>
            </h1>
            <p className="text-xl text-white/80 mb-10 leading-relaxed max-w-xl">
              Unlock extraordinary opportunities in the world's most stable economies. We provide the bridge between your skills and Europe's biggest industries.
            </p>
            <div className="flex flex-wrap gap-4">
               <a href="#roadmap" className="bg-[#D4A85E] text-white px-10 py-4 rounded-full font-bold hover:bg-[#b88e4b] transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1">
                Start My Journey
              </a>
               <Link to="/#contact" className="border-2 border-white/20 hover:border-white text-white px-10 py-4 rounded-full font-bold transition-all backdrop-blur-sm">
                Check Eligibility
              </Link>
            </div>
          </motion.div>

          {/* Opportunity Stack Visual */}
          <div className="hidden lg:block relative h-[500px]">
             {/* Base Europe Map Placeholder Glow */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-white/10 rounded-full animate-pulse"></div>
             
             {/* Floating Cards */}
             <motion.div 
               animate={{ y: [0, -20, 0], rotate: [2, 0, 2] }}
               transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
               className="absolute top-10 left-0 bg-white/10 backdrop-blur-xl p-6 rounded-2xl border border-white/10 shadow-2xl w-64"
             >
                <div className="flex gap-3 items-center mb-3">
                   <div className="bg-green-500 w-3 h-3 rounded-full animate-ping"></div>
                   <span className="text-xs font-bold uppercase tracking-widest text-white/60">Success Story</span>
                </div>
                <p className="text-lg font-bold text-[#D4A85E]">Visa Approved</p>
                <p className="text-sm text-white/70">IT Specialist, Germany</p>
             </motion.div>

             <motion.div 
               animate={{ y: [0, 20, 0], rotate: [-2, 0, -2] }}
               transition={{ repeat: Infinity, duration: 6, ease: "easeInOut", delay: 0.5 }}
               className="absolute bottom-20 right-0 bg-white p-6 rounded-2xl shadow-2xl w-64 border-l-4 border-[#0D4D85]"
             >
                <div className="flex gap-3 items-center mb-3">
                   <CheckCircle2 className="text-[#D4A85E]" size={20} />
                   <span className="text-xs font-bold uppercase tracking-widest text-gray-400">Job Match</span>
                </div>
                <p className="text-lg font-bold text-[#0D4D85]">Engineering Lead</p>
                <p className="text-sm text-gray-500">Stockholm, Sweden</p>
             </motion.div>

             <motion.div 
               animate={{ scale: [1, 1.05, 1] }}
               transition={{ repeat: Infinity, duration: 4 }}
               className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#D4A85E] p-8 rounded-full shadow-[0_0_50px_rgba(212,168,94,0.3)] flex items-center justify-center text-white"
             >
                <div className="text-center">
                   <p className="text-3xl font-bold">100%</p>
                   <p className="text-[10px] uppercase font-bold">Support</p>
                </div>
             </motion.div>
          </div>
        </div>
      </div>

      {/* 2. Interactive Industry Cards */}
      <section className="py-24 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-[#0D4D85] text-4xl md:text-5xl font-bold mb-6">High Growth Industries</h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg">Europe's economic powerhouses are actively seeking talented international professionals like you.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {industries.map((item, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="group bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all border border-gray-100 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-gray-50 rounded-bl-[100px] transition-colors group-hover:bg-[#D4A85E]/10 flex items-start justify-end p-4 text-[#0D4D85]/20 group-hover:text-[#D4A85E]">
                   {item.icon}
                </div>
                <div className="text-[#0D4D85] mb-6 inline-block p-4 rounded-2xl bg-[#0D4D85]/5 group-hover:bg-[#0D4D85] group-hover:text-white transition-colors">
                  <div className="transform scale-125">{item.icon}</div>
                </div>
                <h3 className="text-2xl font-bold text-[#0D4D85] mb-2">{item.title}</h3>
                <p className="text-[#D4A85E] font-bold text-sm tracking-wide">{item.count}</p>
                <div className="mt-6 pt-6 border-t border-gray-100 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity">
                   <span className="text-xs font-bold text-gray-400">LEARN REQUIREMENTS</span>
                   <ArrowRight size={16} className="text-[#D4A85E]" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. The EuroPath Roadmap */}
      <section id="roadmap" className="py-24 px-4 bg-[#0D4D85] text-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/3">
              <span className="text-[#D4A85E] font-bold tracking-[0.2em] mb-4 block">PROCESS HUB</span>
              <h2 className="text-4xl md:text-5xl font-bold mb-8">The EuroPath Timeline</h2>
              <p className="text-white/70 text-lg leading-relaxed mb-10">
                A simple, transparent 4-stage process designed to take you from your home country to a successful career in Europe.
              </p>
              <div className="bg-white/5 p-8 rounded-3xl border border-white/10 backdrop-blur-md">
                 <p className="italic text-white/50 mb-0">"Our goal is to make international migration as easy as a domestic move."</p>
              </div>
            </div>

            <div className="lg:w-2/3 grid gap-1 relative">
               {/* Connecting Line (Desktop) */}
               <div className="absolute left-[39px] top-10 bottom-10 w-[2px] bg-gradient-to-b from-[#D4A85E] to-transparent hidden sm:block"></div>
               
               {roadmap.map((step, i) => (
                 <motion.div 
                   key={i}
                   initial={{ opacity: 0, x: 50 }}
                   whileInView={{ opacity: 1, x: 0 }}
                   viewport={{ once: true }}
                   transition={{ delay: i * 0.2 }}
                   className="flex gap-8 items-start mb-12 relative z-10"
                 >
                    <div className="bg-[#D4A85E] w-20 h-20 rounded-2xl flex items-center justify-center shadow-lg transform -rotate-3 hover:rotate-0 transition-transform flex-shrink-0">
                       <div className="text-[#0D4D85] transform scale-125">{step.icon}</div>
                    </div>
                    <div>
                       <span className="text-[#D4A85E] text-xs font-black tracking-widest block mb-1">STAGE 0{i+1}</span>
                       <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                       <p className="text-white/60 max-w-md">{step.desc}</p>
                    </div>
                 </motion.div>
               ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. Visa Power Tiles */}
      <section className="py-24 px-4 bg-gray-50">
         <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
               <h2 className="text-[#0D4D85] text-4xl font-bold">Visa Solutions</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
               {[
                 { title: "EU Blue Card", perks: ["Fast-track to PR", "Family joining", "Cross-border freedom"] },
                 { title: "Job Seeker Visa", perks: ["6 Months stay", "Local interview rights", "Flexible work"] },
               ].map((visa, idx) => (
                 <div key={idx} className="bg-white rounded-[40px] p-10 shadow-xl relative overflow-hidden hover:-translate-y-2 transition-transform">
                    <div className="absolute top-0 right-0 p-8">
                       <ShieldCheck className="text-[#D4A85E]/20" size={80} />
                    </div>
                    <h3 className="text-3xl font-bold text-[#0D4D85] mb-8">{visa.title}</h3>
                    <ul className="space-y-4">
                       {visa.perks.map((p, j) => (
                         <li key={j} className="flex items-center gap-3">
                            <CheckCircle2 className="text-[#D4A85E]" size={18} />
                            <span className="font-medium text-gray-700">{p}</span>
                         </li>
                       ))}
                    </ul>
                    <button className="mt-10 w-full py-4 text-[#D4A85E] font-bold border-2 border-[#D4A85E] rounded-2xl hover:bg-[#D4A85E] hover:text-white transition-all">
                       VIEW FULL DETAILS
                    </button>
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* 5. Enhanced Premium CTA */}
      <section className="relative py-24 px-4 overflow-hidden">
        {/* Background city-glow placeholder Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0D4D85] to-[#1a2a3a]"></div>
        <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-[#D4A85E]/5 rounded-full blur-[150px] translate-y-1/2 translate-x-1/2"></div>
        
        <div className="max-w-7xl mx-auto relative z-10 text-center">
           <motion.div
             initial={{ scale: 0.95, opacity: 0 }}
             whileInView={{ scale: 1, opacity: 1 }}
             viewport={{ once: true }}
           >
              <h2 className="text-4xl md:text-6xl font-black text-white mb-8">
                 Ready to make the <br /> 
                 <span className="text-[#D4A85E]">Great European Move?</span>
              </h2>
              <p className="text-white/60 text-xl max-w-2xl mx-auto mb-12">
                 Join 5,000+ professionals who receive our weekly job alerts and visa guidance. Your European dream is just one click away.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                 <Link to="/#contact" className="bg-[#D4A85E] text-[#0D4D85] px-12 py-5 rounded-full font-black text-xl hover:scale-105 transition-transform shadow-[0_20px_50px_rgba(212,168,94,0.4)]">
                    APPLY NOW
                 </Link>
                 <button className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-12 py-5 rounded-full font-black text-xl hover:bg-white/20 transition-all">
                    FREE EVALUATION
                 </button>
              </div>
           </motion.div>
        </div>
      </section>
    </div>
  );
}
