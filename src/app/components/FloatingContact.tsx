import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, Instagram, Phone as WhatsApp } from 'lucide-react';
import { useState } from 'react';

export function FloatingContact() {
  const [isOpen, setIsOpen] = useState(false);

  // Social Link Data
  const socials = [
    {
      name: 'WhatsApp',
      icon: <WhatsApp size={24} />,
      color: 'bg-[#25D366]',
      href: 'https://wa.me/0123456588660', // Placeholder phone from footer
      label: 'Chat on WhatsApp'
    },
    {
      name: 'Instagram',
      icon: <Instagram size={24} />,
      color: 'bg-gradient-to-tr from-[#F58529] via-[#DD2A7B] to-[#8134AF]',
      href: '#', // Placeholder
      label: 'Follow on Instagram'
    }
  ];

  return (
    <div className="fixed bottom-8 right-8 z-[100] flex flex-col items-end gap-4">
      {/* Social Buttons Stack */}
      <AnimatePresence>
        {isOpen && (
          <div className="flex flex-col items-end gap-4 mb-2">
            {socials.map((social, index) => (
              <motion.a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.5, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.5, y: 20 }}
                transition={{ 
                  delay: (socials.length - index - 1) * 0.1,
                  type: "spring",
                  stiffness: 260,
                  damping: 20 
                }}
                className={`flex items-center gap-3 group`}
                aria-label={social.label}
              >
                <span className="bg-white px-3 py-1.5 rounded-lg text-sm font-bold text-[#0D4D85] shadow-lg border border-gray-100 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  {social.label}
                </span>
                <div className={`${social.color} text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform`}>
                  {social.icon}
                </div>
              </motion.a>
            ))}
          </div>
        )}
      </AnimatePresence>

      {/* Main Toggle Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={`p-5 rounded-full shadow-2xl transition-all duration-300 ${
          isOpen ? 'bg-gray-800 rotate-90' : 'bg-[#D4A85E] hover:bg-[#c49a54]'
        } text-white relative group`}
      >
        <div className="absolute inset-0 rounded-full bg-inherit blur-xl opacity-40 group-hover:opacity-60 transition-opacity animate-pulse"></div>
        <MessageCircle size={32} className="relative z-10" />
      </motion.button>
    </div>
  );
}
