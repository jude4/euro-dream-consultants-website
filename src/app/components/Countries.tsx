import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, GraduationCap, Briefcase, Landmark, Coins, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { 
  Carousel, 
   CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from './ui/carousel';

const countries = [
  { 
    name: "Germany", 
    code: "de",
    education: "Free tuition at public universities. Home to world-class technical education.",
    career: "Europe's largest economy. High demand for Engineers and Tech specialists.",
    visa: "EU Blue Card & Opportunity Card. Clear path to permanent residency.",
    cost: "$$$"
  },
  { 
    name: "France", 
    code: "fr",
    education: "Prestigious 'Grandes Écoles'. World-leading Business and Art schools.",
    career: "Global hub for Aerospace, Luxury, and Pharmaceutical industries.",
    visa: "Talent Passport for high-value professionals. 2-year masters visa.",
    cost: "$$$"
  },
  { 
    name: "Sweden", 
    code: "se",
    education: "Innovative teaching methods. Focus on sustainability and group work.",
    career: "Tech startup hub of Europe (Spotify, Ericsson). Zero-hierarchical work culture.",
    visa: "Permit for highly qualified persons. Straightforward family reunification.",
    cost: "$$$$"
  },
  { 
    name: "Finland", 
    code: "fi",
    education: "Ranked #1 for happiest people and best education system in the world.",
    career: "Booming Game-Dev and Green-Tech sectors. Most advanced digital economy.",
    visa: "Fast-track for Specialists. 2-year job seeker visa after graduation.",
    cost: "$$$"
  },
  { 
    name: "Netherlands", 
    code: "nl",
    education: "Extensive English-taught programs. Practical and research-based learning.",
    career: "Major logistics & trade hub. Home to ASML and Philips. 30% tax ruling perk.",
    visa: "Orientation Year visa for global top-university graduates.",
    cost: "$$$$"
  },
  { 
    name: "Spain", 
    code: "es",
    education: "Excellent lifestyle-education balance. Top-ranked Global MBA programs.",
    career: "Rapidly growing tech scene in Madrid/Barcelona. Leader in Renewable Energy.",
    visa: "Digital Nomad Visa & specialized permits for International Professionals.",
    cost: "$$"
  },
  { 
    name: "Italy", 
    code: "it",
    education: "World's oldest universities. Unmatched focus on Design and Heritage.",
    career: "Powerhouse in Manufacturing, Fashion, and Automotive design.",
    visa: "Self-employment and highly skilled worker permits available.",
    cost: "$$"
  },
  { 
    name: "Belgium", 
    code: "be",
    education: "Bilingual environment. Exceptional Engineering and Pol-Sci programs.",
    career: "Heart of Europe. EU HQ located in Brussels. High NGO & Tech demand.",
    visa: "Fast processing for Professional Cards and Work Permits.",
    cost: "$$$"
  },
  { 
    name: "Austria", 
    code: "at",
    education: "Affordable tuition. Strong focus on Music, Culture, and Applied Sciences.",
    career: "High quality of life. Hub for international organizations and tourism.",
    visa: "Red-White-Red Card for skilled workers from non-EU countries.",
    cost: "$$$"
  },
  { 
    name: "Switzerland", 
    code: "ch",
    education: "highest global rankings for ETH Zurich. Private Banking & Hospitality.",
    career: "Highest salaries in the world. Global center for Finance and Biotech.",
    visa: "Quota-based permits for high-value specialists. High requirements.",
    cost: "$$$$$"
  },
  { 
    name: "Norway", 
    code: "no",
    education: "Free tuition for PhD students. Research-rich environment.",
    career: "Leader in Energy, Marine, and Deep-Tech. Wealthiest sovereign fund.",
    visa: "Specialist visa for skilled workers. Reliable PR path.",
    cost: "$$$$$"
  },
  { 
    name: "Denmark", 
    code: "dk",
    education: "Student-centered learning. Strong industry-university collaboration.",
    career: "Global leader in Green Energy and Life Sciences (Novo Nordisk).",
    visa: "Fast-Track Scheme and Green Card options for experts.",
    cost: "$$$$"
  },
];



export function Countries() {
  const [selectedCountry, setSelectedCountry] = useState<typeof countries[0] | null>(null);

  return (
    <section id="countries" className="py-24 px-4 bg-gray-50 overflow-hidden relative min-h-[700px]">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
        <Landmark className="absolute -left-20 top-20 w-80 h-80 rotate-12" />
        <Landmark className="absolute -right-20 bottom-20 w-80 h-80 -rotate-12" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#D4A85E] font-bold tracking-[0.34em] uppercase text-xs mb-4 block">Destination Guide</span>
          <h2 className="text-[#0D4D85] text-3xl md:text-4xl font-black mb-6">
            Where Your Dreams Begin
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg leading-relaxed">
            Explore the most sought-after European destinations. Swipe or use arrows to discover your next path.
          </p>
        </motion.div>
        
        <div className="relative px-12">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {countries.map((country, i) => (
                <CarouselItem key={country.name} className="pl-4 basis-1/2 md:basis-1/4 lg:basis-1/6">
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    onClick={() => setSelectedCountry(country)}
                    className="group flex flex-col items-center cursor-pointer py-4"
                  >
                    <div className="relative mb-6">
                      <div className="absolute inset-x-0 bottom-0 h-4 bg-[#0D4D85]/10 blur-xl group-hover:bg-[#D4A85E]/30 transition-all rounded-full scale-75 group-hover:scale-100"></div>
                      <div className="relative p-1 rounded-full border-2 border-transparent group-hover:border-[#D4A85E] transition-all duration-500 transform group-hover:-translate-y-3 z-10">
                        <img 
                          src={`https://flagcdn.com/w160/${country.code}.png`}
                          alt={`${country.name} flag`}
                          className="w-20 h-20 md:w-24 md:h-24 rounded-full object-cover shadow-2xl grayscale-[30%] group-hover:grayscale-0 transition-all duration-500 border-4 border-white"
                          loading="lazy"
                        />
                      </div>
                    </div>
                    <div className="text-center">
                      <span className="text-[#0D4D85] font-black text-sm md:text-base tracking-tight group-hover:text-[#D4A85E] transition-all block mb-1">
                        {country.name}
                      </span>
                      <div className="w-0 h-0.5 bg-[#D4A85E] mx-auto group-hover:w-full transition-all duration-300"></div>
                    </div>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-12 bg-white text-[#0D4D85] border-gray-200 hover:bg-[#D4A85E] hover:text-white" />
            <CarouselNext className="hidden md:flex -right-12 bg-white text-[#0D4D85] border-gray-200 hover:bg-[#D4A85E] hover:text-white" />
            
            {/* Mobile swipe indicator */}
            <div className="flex md:hidden justify-center gap-1.5 mt-8">
              {[...Array(6)].map((_, i) => (
                <div key={i} className={`h-1 rounded-full transition-all ${i === 0 ? 'w-4 bg-[#D4A85E]' : 'w-1 bg-gray-300'}`}></div>
              ))}
            </div>
          </Carousel>
        </div>
      </div>

      {/* Country Spotlight Modal */}
      <AnimatePresence>
        {selectedCountry && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCountry(null)}
              className="absolute inset-0 bg-[#0D4D85]/80 backdrop-blur-md"
            ></motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-2xl bg-white rounded-[40px] shadow-2xl overflow-hidden border border-white/20"
            >
              <button 
                onClick={() => setSelectedCountry(null)}
                className="absolute top-6 right-6 p-2 rounded-full bg-gray-100 hover:bg-gray-200 text-[#0D4D85] transition-colors z-20"
              >
                <X size={24} />
              </button>

              {/* Modal Header */}
              <div className="relative h-48 bg-[#0D4D85] flex items-end p-8 overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10">
                   <img 
                     src={`https://flagcdn.com/w320/${selectedCountry.code}.png`} 
                     alt="" 
                     className="w-64 h-64 object-cover rounded-full"
                   />
                </div>
                <div className="relative z-10 flex items-center gap-6">
                  <img 
                    src={`https://flagcdn.com/w160/${selectedCountry.code}.png`}
                    className="w-20 h-20 rounded-2xl border-4 border-white/20 shadow-lg object-cover"
                    alt=""
                  />
                  <div>
                    <h3 className="text-white text-3xl font-black mb-1">{selectedCountry.name}</h3>
                    <div className="flex gap-1 text-[#D4A85E]">
                       <Coins size={16} />
                       <span className="text-sm font-bold opacity-80 uppercase tracking-widest">Cost of Living: {selectedCountry.cost}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Modal Content */}
              <div className="p-8 md:p-10 bg-white grid gap-6">
                <div className="grid md:grid-cols-2 gap-6">
                   <div className="p-6 rounded-3xl bg-[#0D4D85]/5 border border-[#0D4D85]/10">
                      <div className="flex items-center gap-3 mb-3 text-[#0D4D85]">
                         <GraduationCap size={20} />
                         <h4 className="font-bold uppercase text-xs tracking-wider">Academic Path</h4>
                      </div>
                      <p className="text-gray-600 text-sm leading-relaxed">{selectedCountry.education}</p>
                   </div>
                   <div className="p-6 rounded-3xl bg-[#D4A85E]/5 border border-[#D4A85E]/10">
                      <div className="flex items-center gap-3 mb-3 text-[#D4A85E]">
                         <Briefcase size={20} />
                         <h4 className="font-bold uppercase text-xs tracking-wider">Career Market</h4>
                      </div>
                      <p className="text-gray-600 text-sm leading-relaxed">{selectedCountry.career}</p>
                   </div>
                </div>

                <div className="p-6 rounded-3xl border-2 border-dashed border-gray-100 flex items-start gap-4">
                  <div className="bg-gray-50 p-3 rounded-2xl">
                    <Landmark className="text-gray-400" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#0D4D85] mb-1">Visa & Residency</h4>
                    <p className="text-sm text-gray-500">{selectedCountry.visa}</p>
                  </div>
                </div>

                <Link 
                  to="/contact"
                  className="w-full bg-[#0D4D85] text-white py-5 rounded-2xl font-black text-lg flex items-center justify-center gap-3 hover:bg-[#0a3a63] transition-all shadow-lg group mt-4"
                  onClick={() => setSelectedCountry(null)}
                >
                  INQUIRE ABOUT {selectedCountry.name.toUpperCase()}
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
