import logoImage from "../../assets/c7549884d38f4442fcdd80c5647962fd6928ee11.png";
import { Link, NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const activeLinkClass = ({ isActive }: { isActive: boolean }) => 
    `transition-colors font-medium border-b-2 ${
      isActive 
        ? "text-[#D4A85E] border-[#D4A85E]" 
        : "text-[#0D4D85] border-transparent hover:text-[#D4A85E]"
    }`;

  const mobileLinkClass = ({ isActive }: { isActive: boolean }) => 
    `py-2 px-4 rounded-lg transition-colors font-medium ${
      isActive 
        ? "text-[#D4A85E] bg-[#D4A85E]/5" 
        : "text-[#0D4D85] hover:text-[#D4A85E] hover:bg-gray-50"
    }`;

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      {/* Top bar */}
      <div className="bg-[#0D4D85] text-white py-2 px-4 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-end items-center gap-8 text-xs font-bold tracking-widest">
          <Link to="/" className="hover:text-[#D4A85E] transition-colors">HOME</Link>
          <span className="text-white/20">|</span>
          <span>EURO DREAM CONSULTANTS</span>
        </div>
      </div>
      
      {/* Main navigation */}
      <nav className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <Link to="/">
             <img src={logoImage} alt="Euro Dream Consultants" className="h-10 w-10 md:h-14 md:w-14" />
          </Link>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-10">
          <NavLink to="/" className={activeLinkClass} end>
            HOME
          </NavLink>
          <NavLink to="/study" className={activeLinkClass}>
            STUDY IN EUROPE
          </NavLink>
          <NavLink to="/work" className={activeLinkClass}>
            WORK IN EUROPE
          </NavLink>
          <NavLink to="/contact" className={activeLinkClass}>
            CONTACT US
          </NavLink>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-[#0D4D85] p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-xl border-t border-gray-100 animate-in slide-in-from-top-2 duration-300">
          <div className="flex flex-col p-6 gap-2">
            <NavLink 
              to="/" 
              className={mobileLinkClass}
              onClick={() => setIsMenuOpen(false)}
              end
            >
              HOME
            </NavLink>
            <NavLink 
              to="/study" 
              className={mobileLinkClass}
              onClick={() => setIsMenuOpen(false)}
            >
              STUDY IN EUROPE
            </NavLink>
            <NavLink 
              to="/work" 
              className={mobileLinkClass}
              onClick={() => setIsMenuOpen(false)}
            >
              WORK IN EUROPE
            </NavLink>
            <NavLink 
              to="/contact" 
              className={mobileLinkClass}
              onClick={() => setIsMenuOpen(false)}
            >
              CONTACT US
            </NavLink>
          </div>
        </div>
      )}
    </header>
  );
}
