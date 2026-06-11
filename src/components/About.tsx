import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';

export const About = () => {
  const { t } = useLanguage();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section ref={ref} id="about" className="relative py-24 md:py-32 outline-none">
      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 items-center">
          
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="order-2 md:order-1 relative h-[40vh] md:h-[70vh] w-full"
          >
            {/* The dual experience image */}
            <motion.div style={{ y: imageY }} className="absolute inset-0 bg-[#E8DDCE] rounded-r-3xl overflow-hidden shadow-2xl">
              <img 
                src="/cafe.png" 
                alt="Cafe Counter" 
                className="w-full h-full object-cover rounded-r-3xl transition-transform duration-1000 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#D1BDAD]/40 via-transparent to-transparent opacity-40 group-hover:opacity-60 transition-opacity duration-1000 pointer-events-none" />
            </motion.div>
            {/* Decorative element (Subtle border overlay) */}
            <div className="absolute -left-6 top-12 bottom-12 w-[1px] bg-gradient-to-b from-transparent via-[#A09388] to-transparent opacity-50" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="order-1 md:order-2 flex flex-col justify-center"
          >
            <h3 className="text-[#A09388] tracking-[0.2em] uppercase text-sm mb-4 font-medium">
              {t.about_subtitle}
            </h3>
            <h2 className="text-4xl md:text-5xl font-sans font-medium text-[var(--color-sarmad-text)] mb-8 leading-tight">
              {t.about_title}
            </h2>
            <div className="space-y-6 text-[#7A6B62] leading-relaxed font-light">
              <p>{t.about_text_1}</p>
              <p>{t.about_text_2}</p>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};
