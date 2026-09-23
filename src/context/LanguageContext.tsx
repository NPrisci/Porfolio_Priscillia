import React, { createContext, useContext, useState, useEffect } from 'react';
import { fr } from '../i18n/fr';
import { en } from '../i18n/en';

type Language = 'fr' | 'en';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  setLanguage: (lang: Language) => void;
  t: typeof fr;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem('pn_portfolio_lang');
    if (saved === 'fr' || saved === 'en') return saved;
    const browserLang = navigator.language.slice(0, 2);
    return browserLang === 'fr' ? 'fr' : 'en';
  });

  useEffect(() => {
    localStorage.setItem('pn_portfolio_lang', language);
    document.documentElement.lang = language;
  }, [language]);

  const toggleLanguage = () => {
    setLanguageState((prev) => (prev === 'fr' ? 'en' : 'fr'));
  };

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
  };

  const t = language === 'fr' ? fr : en;

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
