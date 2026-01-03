import logoImage from "../../assets/c7549884d38f4442fcdd80c5647962fd6928ee11.png";
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      {/* Top bar */}
      <div className="bg-[#0D4D85] text-white py-2 px-4 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-end items-center gap-8">
          <Link to="/" className="hover:opacity-80 transition-opacity">HOME</Link>
          <span className="text-white/60">|</span>
          <span>Euro Dream Consultants</span>
        </div>
      </div>
      
      {/* Main navigation */}
      <nav className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <Link to="/">
             <img src={logoImage} alt="Euro Dream Consultants" className="h-12 w-12 md:h-16 md:w-16" />
          </Link>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <Link to="/" className="text-[#0D4D85] hover:text-[#D4A85E] transition-colors font-medium">
            HOME
          </Link>
          <Link to="/study" className="text-[#0D4D85] hover:text-[#D4A85E] transition-colors font-medium">
            STUDY IN EUROPE
          </Link>
          <Link to="/work" className="text-[#0D4D85] hover:text-[#D4A85E] transition-colors font-medium">
            WORK IN EUROPE
          </Link>
          <Link to="/contact" className="text-[#0D4D85] hover:text-[#D4A85E] transition-colors font-medium uppercase">
            CONTACT US
          </Link>
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
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t border-gray-100 animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col p-4 gap-4">
            <Link 
              to="/" 
              className="text-[#0D4D85] hover:text-[#D4A85E] py-2 px-4 hover:bg-gray-50 rounded-lg transition-colors font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              HOME
            </Link>
            <Link 
              to="/study" 
              className="text-[#0D4D85] hover:text-[#D4A85E] py-2 px-4 hover:bg-gray-50 rounded-lg transition-colors font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              STUDY IN EUROPE
            </Link>
            <Link 
              to="/work" 
              className="text-[#0D4D85] hover:text-[#D4A85E] py-2 px-4 hover:bg-gray-50 rounded-lg transition-colors font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              WORK IN EUROPE
            </Link>
            <a 
              href="#contact" 
              className="text-[#0D4D85] hover:text-[#D4A85E] py-2 px-4 hover:bg-gray-50 rounded-lg transition-colors font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              CONTACT US
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
