import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import { ThreeCanvas } from './ThreeCanvas';

export const Hero = () => {
  const { t, lang } = useLanguage();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const canvasY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Side: Text Content */}
        <motion.div style={{ y: textY, opacity }} className="w-full">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-left rtl:text-right"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-sans font-medium text-[var(--color-sarmad-text)] mb-6 leading-tight">
              {t.hero_title}
            </h1>
            <p className="text-lg md:text-xl text-[var(--color-sarmad-text-muted)] font-light max-w-lg mb-10">
              {t.hero_tagline}
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col sm:flex-row items-center gap-4"
            >
              <a
                href="#experience"
                className="px-8 py-3 bg-[#4A3B32] text-[#F2EBE3] rounded-lg font-medium tracking-wide text-sm hover:bg-[#342921] transition-transform hover:scale-105 w-full sm:w-auto text-center"
              >
                {t.hero_cta_menu}
              </a>
              <a
                href="#contact"
                className="px-8 py-3 bg-transparent border border-[#A09388] text-[#4A3B32] rounded-lg font-medium tracking-wide text-sm hover:bg-[#A09388]/10 transition-transform hover:scale-105 w-full sm:w-auto text-center"
              >
                {t.hero_cta_reserve}
              </a>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Right Side: 3D Mug Canvas */}
        <motion.div style={{ y: canvasY, opacity }} className="w-full h-full">
          <motion.div 
            initial={{ opacity: 0, y: 80, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1.4, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="relative h-[50vh] md:h-[70vh] w-full"
          >
            <ThreeCanvas />
          </motion.div>
        </motion.div>
      </div>

    </section>
  );
};
