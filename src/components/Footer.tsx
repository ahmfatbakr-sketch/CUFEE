import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer id="contact" className="relative border-t border-[#D1BDAD] bg-[#E8DDCE] pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          
          <div>
            <div className="text-3xl font-sans font-bold tracking-widest text-[#4A3B32] uppercase mb-6">
              Laiali
            </div>
            <p className="text-[#7A6B62] font-light max-w-sm">
              {t.about_text_1}
            </p>
          </div>

          <div className="flex flex-col md:items-end justify-center space-y-4">
            <p className="text-[#4A3B32] font-medium">{t.footer_hours}</p>
            <p className="text-[#7A6B62] text-sm">{t.footer_address}</p>
            
            <div className="flex space-x-6 rtl:space-x-reverse pt-4">
              <a href="#" className="text-[#7A6B62] hover:text-[#4A3B32] transition-colors text-sm uppercase tracking-wider">Instagram</a>
              <a href="#" className="text-[#7A6B62] hover:text-[#4A3B32] transition-colors text-sm uppercase tracking-wider">Twitter</a>
              <a href="#" className="text-[#7A6B62] hover:text-[#4A3B32] transition-colors text-sm uppercase tracking-wider">Maps</a>
            </div>
          </div>
          
        </div>
        
        <div className="text-center border-t border-[#D1BDAD] pt-8 mt-8">
          <p className="text-[#968A7E] text-sm font-light">
            {t.footer_rights}
          </p>
        </div>
      </div>
    </footer>
  );
};
