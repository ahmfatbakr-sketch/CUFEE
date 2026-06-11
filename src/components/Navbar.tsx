import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'motion/react';
import { Globe } from 'lucide-react';

export const Navbar = () => {
  const { lang, t, toggleLanguage } = useLanguage();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass py-3' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-12 flex justify-between items-center">
        <div className="text-xl font-sans font-bold tracking-widest text-[#4A3B32] uppercase">
          Laiali
        </div>

        <div className="hidden md:flex space-x-8 items-center rtl:space-x-reverse">
          <a href="#home" className="text-sm text-[#4A3B32] hover:text-[#7A6B62] transition-colors">{t.nav_home}</a>
          <a href="#about" className="text-sm text-[#4A3B32] hover:text-[#7A6B62] transition-colors">{t.nav_about}</a>
          <a href="#experience" className="text-sm text-[#4A3B32] hover:text-[#7A6B62] transition-colors">{t.nav_experience}</a>
        </div>

        <button
          onClick={toggleLanguage}
          className="flex items-center space-x-2 rtl:space-x-reverse px-4 py-2 rounded-full border border-[#A09388] hover:bg-[#A09388]/10 transition-all"
        >
          <Globe className="w-4 h-4 text-[#4A3B32]" />
          <span className="text-sm font-medium text-[#4A3B32]">
            {lang === 'en' ? 'العربية' : 'EN'}
          </span>
        </button>
      </div>
    </motion.nav>
  );
};
