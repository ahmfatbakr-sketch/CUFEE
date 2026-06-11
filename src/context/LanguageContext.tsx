import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { en, Translations } from '../locales/en';
import { ar } from '../locales/ar';

type Language = 'en' | 'ar';

interface LanguageContextType {
  lang: Language;
  t: Translations;
  dir: 'ltr' | 'rtl';
  toggleLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [lang, setLang] = useState<Language>('en');

  const toggleLanguage = () => {
    setLang((prev) => (prev === 'en' ? 'ar' : 'en'));
  };

  const t = lang === 'en' ? en : ar;
  const dir = lang === 'en' ? 'ltr' : 'rtl';

  useEffect(() => {
    document.documentElement.dir = dir;
    document.documentElement.lang = lang;
  }, [dir, lang]);

  return (
    <LanguageContext.Provider value={{ lang, t, dir, toggleLanguage }}>
      <div className={lang === 'ar' ? 'font-arabic' : 'font-sans'}>
        {children}
      </div>
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
