import { Mail, Phone, MapPin, Send, MessageSquare, Clock, Globe2, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState } from 'react';

export function Contact() {
  const [formState, setFormState] = useState('idle'); // idle, sending, success

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('sending');
    setTimeout(() => setFormState('success'), 1500);
  };

  const contactOptions = [
    { 
      icon: <Mail className="text-[#D4A85E]" />, 
      title: "Email Us", 
      value: "info@eurodream.com",
      desc: "Fast response within 24h"
    },
    { 
      icon: <Phone className="text-[#D4A85E]" />, 
      title: "Call Anytime", 
      value: "+01 23 456588 660",
      desc: "Mon - Fri, 9am - 6pm"
    },
    { 
      icon: <MapPin className="text-[#D4A85E]" />, 
      title: "Visit Office", 
      value: "Brussels, Belgium",
      desc: "Main European HQ"
    }
  ];

  return (
    <div className="bg-white overflow-hidden">
      {/* 1. Hero Section */}
      <section className="relative bg-[#0D4D85] pt-32 pb-20 px-4 text-white overflow-hidden">
        {/* Abstract Background */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#D4A85E]/5 rounded-full blur-[100px] translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-white/5 rounded-full blur-[80px] -translate-x-1/2 translate-y-1/2"></div>

        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-7xl font-black mb-6">
              Let's Start Your <br />
              <span className="text-[#D4A85E]">European Journey</span>
            </h1>
            <p className="text-xl text-white/70 max-w-2xl mx-auto leading-relaxed">
              Have questions about study programs or work permits? Our expert consultants are ready to guide you across the continent.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. Contact Interface */}
      <section className="py-24 px-4 relative -mt-10">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12">
          
          {/* Left Panel: The Form */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 md:p-12 rounded-[40px] shadow-2xl border border-gray-100"
          >
            <div className="mb-10">
               <h2 className="text-3xl font-bold text-[#0D4D85] mb-2">Send a Message</h2>
               <p className="text-gray-500">We respond to all inquiries within one business day.</p>
            </div>

            {formState === 'success' ? (
              <motion.div 
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="text-center py-20"
              >
                <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 text-green-600">
                   <CheckCircle2 size={40} />
                </div>
                <h3 className="text-2xl font-bold text-[#0D4D85] mb-2">Message Sent!</h3>
                <p className="text-gray-500 mb-8">Thank you for reaching out. Our team will contact you shortly.</p>
                <button 
                  onClick={() => setFormState('idle')}
                  className="text-[#D4A85E] font-bold border-b-2 border-[#D4A85E] pb-1"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-400 ml-1">FULL NAME</label>
                    <input 
                      type="text" required
                      placeholder="John Doe"
                      className="w-full bg-gray-50 border-2 border-transparent focus:border-[#D4A85E] focus:bg-white p-4 rounded-2xl outline-none transition-all placeholder:text-gray-300"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-400 ml-1">EMAIL ADDRESS</label>
                    <input 
                      type="email" required
                      placeholder="john@example.com"
                      className="w-full bg-gray-50 border-2 border-transparent focus:border-[#D4A85E] focus:bg-white p-4 rounded-2xl outline-none transition-all placeholder:text-gray-300"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-400 ml-1">INTERESTED IN</label>
                  <select className="w-full bg-gray-50 border-2 border-transparent focus:border-[#D4A85E] focus:bg-white p-4 rounded-2xl outline-none transition-all appearance-none cursor-pointer">
                    <option>Study in Europe</option>
                    <option>Work in Europe</option>
                    <option>Other / General Inquiry</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-400 ml-1">MESSAGE</label>
                  <textarea 
                    rows={4} required
                    placeholder="Tell us about your dreams..."
                    className="w-full bg-gray-50 border-2 border-transparent focus:border-[#D4A85E] focus:bg-white p-4 rounded-2xl outline-none transition-all placeholder:text-gray-300 resize-none"
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  disabled={formState === 'sending'}
                  className="w-full bg-[#0D4D85] text-white py-5 rounded-2xl font-black text-lg flex items-center justify-center gap-3 hover:bg-[#0a3a63] transition-colors shadow-lg disabled:opacity-50"
                >
                  {formState === 'sending' ? 'SENDING...' : (
                    <>
                      SEND MESSAGE <Send size={20} />
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>

          {/* Right Panel: Info & Visuals */}
          <div className="space-y-8 flex flex-col justify-center">
             
             {/* Info Cards */}
             <div className="grid sm:grid-cols-2 lg:grid-cols-1 gap-6">
                {contactOptions.map((opt, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex gap-6 items-center p-6 rounded-3xl bg-[#0D4D85]/5 hover:bg-white hover:shadow-xl transition-all border border-transparent hover:border-gray-100 group"
                  >
                     <div className="bg-white p-4 rounded-2xl shadow-sm group-hover:bg-[#0D4D85] group-hover:text-white transition-colors">
                        {opt.icon}
                     </div>
                     <div>
                        <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-1">{opt.title}</h3>
                        <p className="text-xl font-bold text-[#0D4D85]">{opt.value}</p>
                        <p className="text-sm text-gray-500">{opt.desc}</p>
                     </div>
                  </motion.div>
                ))}
             </div>

             {/* Visual "Pulse" Section */}
             <motion.div 
               initial={{ opacity: 0 }}
               whileInView={{ opacity: 1 }}
               className="bg-[#D4A85E] p-10 rounded-[40px] text-white relative overflow-hidden group"
             >
                <div className="absolute top-0 right-0 p-8 opacity-20 group-hover:scale-110 transition-transform">
                   <Globe2 size={120} />
                </div>
                <h3 className="text-2xl font-bold mb-4">Global Reach, <br />Local Support</h3>
                <p className="text-white/80 mb-6 leading-relaxed">
                   Our consultants operate across 6 timezones to ensure you're never alone in your application process.
                </p>
                <div className="flex gap-2">
                   {[1,2,3,4,5].map(dot => (
                     <div key={dot} className="w-2 h-2 rounded-full bg-white opacity-40 animate-pulse" style={{ animationDelay: `${dot * 300}ms` }}></div>
                   ))}
                </div>
             </motion.div>
          </div>
        </div>
      </section>

      {/* 3. Help Grid */}
      <section className="py-20 px-4 bg-gray-50">
         <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
               {[
                 { icon: <Clock />, title: "24/7 Portal", desc: "Access your documents anytime via our secure dashboard." },
                 { icon: <MessageSquare />, title: "Live Chat", desc: "Available for premium candidates during business hours." },
                 { icon: <CheckCircle2 />, title: "Zero Risks", desc: "Consultation is 100% free with no hidden fees." }
               ].map((item, i) => (
                 <div key={i} className="text-center p-8">
                    <div className="text-[#D4A85E] mb-4 flex justify-center transform scale-125">
                       {item.icon}
                    </div>
                    <h3 className="text-[#0D4D85] font-bold text-lg mb-2">{item.title}</h3>
                    <p className="text-gray-500 text-sm">{item.desc}</p>
                 </div>
               ))}
            </div>
         </div>
      </section>
    </div>
  );
}
