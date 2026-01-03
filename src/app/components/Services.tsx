import { GraduationCap, Briefcase } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Services() {
  return (
    <section id="services" className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-[#0D4D85] text-3xl text-center mb-12">
          OUR SERVICES
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Study in Europe Card */}
          <Link to="/study" className="bg-white rounded-lg shadow-md p-8 hover:shadow-lg transition-shadow group">
            <div className="flex items-start gap-4">
              <div className="text-[#0D4D85] group-hover:text-[#D4A85E] transition-colors">
                <GraduationCap size={48} strokeWidth={1.5} />
              </div>
              <div className="flex-1">
                <h3 className="text-[#0D4D85] text-2xl mb-4 group-hover:underline">
                  STUDY IN EUROPE
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-[#D4A85E] mt-1">•</span>
                    <span>University Admissions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#D4A85E] mt-1">•</span>
                    <span>Course Selection</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#D4A85E] mt-1">•</span>
                    <span>Visa Guidance</span>
                  </li>
                </ul>
              </div>
            </div>
          </Link>

          {/* Work in Europe Card */}
          <Link to="/work" className="bg-white rounded-lg shadow-md p-8 hover:shadow-lg transition-shadow group">
            <div className="flex items-start gap-4">
              <div className="text-[#0D4D85] group-hover:text-[#D4A85E] transition-colors">
                <Briefcase size={48} strokeWidth={1.5} />
              </div>
              <div className="flex-1">
                <h3 className="text-[#0D4D85] text-2xl mb-4 group-hover:underline">
                  WORK IN EUROPE
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-[#D4A85E] mt-1">•</span>
                    <span>Job Search Assistance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#D4A85E] mt-1">•</span>
                    <span>Work Visas</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#D4A85E] mt-1">•</span>
                    <span>Relocation Support</span>
                  </li>
                </ul>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
