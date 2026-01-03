import { Facebook, Instagram, Linkedin, Mail, Phone } from 'lucide-react';
import logoImage from "../../assets/c7549884d38f4442fcdd80c5647962fd6928ee11.png";
import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="bg-[#0D4D85] text-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Logo */}
          <div className="flex justify-center md:justify-start">
            <img src={logoImage} alt="Euro Dream Consultants" className="h-24 w-24" />
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-[#D4A85E] transition-colors flex items-center gap-2">
                  <span className="text-[#D4A85E]">•</span>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/study" className="hover:text-[#D4A85E] transition-colors flex items-center gap-2">
                  <span className="text-[#D4A85E]">•</span>
                  Study in Europe
                </Link>
              </li>
              <li>
                <Link to="/work" className="hover:text-[#D4A85E] transition-colors flex items-center gap-2">
                  <span className="text-[#D4A85E]">•</span>
                  Work in Europe
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#D4A85E] transition-colors flex items-center gap-2">
                  <span className="text-[#D4A85E]">•</span>
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="text-xl mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <Mail size={18} />
                <a href="mailto:info@eurodream.com" className="hover:text-[#D4A85E] transition-colors">
                  info@eurodream.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={18} />
                <a href="tel:+0123456588660" className="hover:text-[#D4A85E] transition-colors">
                  +01 23 456588 660
                </a>
              </li>
              <li className="flex items-center gap-3 mt-4">
                <a href="#" className="hover:text-[#D4A85E] transition-colors" aria-label="Facebook">
                  <Facebook size={20} />
                </a>
                <a href="#" className="hover:text-[#D4A85E] transition-colors" aria-label="Instagram">
                  <Instagram size={20} />
                </a>
                <a href="#" className="hover:text-[#D4A85E] transition-colors" aria-label="LinkedIn">
                  <Linkedin size={20} />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/20 pt-6 text-center text-sm">
          <p>© 2024 Eurodream Consultants. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
