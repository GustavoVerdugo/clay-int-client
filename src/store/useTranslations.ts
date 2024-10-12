import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

type languageType = {
  code: string,
  name: string
}

interface AppState {
  language: languageType;
  setLanguage: (lang: languageType) => void;
}

export const useTranslations = create<AppState>()(
  persist(
    (set) => ({
      language: { code: 'es', name: 'Spanish' },
      setLanguage: (newLang: languageType) => set({ language: newLang }),
    }),
    {
      name: 'clay-store',
      storage: createJSONStorage(() => localStorage),
    }
  )
);
