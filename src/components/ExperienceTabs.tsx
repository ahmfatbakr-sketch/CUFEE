import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';

export const ExperienceTabs = () => {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState<'cafe' | 'shisha'>('cafe');

  return (
    <section id="experience" className="relative py-24 md:py-32">
      <div className="max-w-5xl mx-auto px-6 sm:px-12 text-center">
        
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true, margin: "-50px" }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-sans font-medium text-[var(--color-sarmad-text)] mb-12">
            {t.exp_title}
          </h2>

          <div className="flex justify-center items-center space-x-4 rtl:space-x-reverse bg-[#E8DDCE] p-1.5 rounded-full w-max mx-auto border border-[#D1BDAD]">
            <button
              onClick={() => setActiveTab('cafe')}
              className={`px-8 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                activeTab === 'cafe'
                  ? 'bg-[#4A3B32] text-[#F2EBE3] shadow-md'
                  : 'text-[#7A6B62] hover:text-[#4A3B32]'
              }`}
            >
              {t.exp_tab_cafe}
            </button>
            <button
              onClick={() => setActiveTab('shisha')}
              className={`px-8 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                activeTab === 'shisha'
                  ? 'bg-[#4A3B32] text-[#F2EBE3] shadow-md'
                  : 'text-[#7A6B62] hover:text-[#4A3B32]'
              }`}
            >
              {t.exp_tab_shisha}
            </button>
          </div>
        </motion.div>

        <div className="relative min-h-[300px]">
          <AnimatePresence mode="wait">
            {activeTab === 'cafe' ? (
              <motion.div
                key="cafe"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4 }}
                className="glass p-8 md:p-16 rounded-3xl border border-[#D1BDAD]/50"
              >
                <p className="text-xl md:text-2xl font-light text-[#4A3B32] leading-relaxed max-w-3xl mx-auto">
                  {t.exp_cafe_desc}
                </p>
              </motion.div>
            ) : (
              <motion.div
                key="shisha"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4 }}
                className="glass p-8 md:p-16 rounded-3xl border border-[#A09388]"
              >
                <p className="text-xl md:text-2xl font-light text-[#4A3B32] leading-relaxed max-w-3xl mx-auto">
                  {t.exp_shisha_desc}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};
