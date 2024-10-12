type TranslationType = {
  _id: string;
  key: string;
  translations: { language: string; value: string }[];
};

const useTranslation = ({ translations }: { translations: TranslationType[] }) => {
  const getTranslation = (key: string, language: string): string => {
    const translationEntry = translations?.find((t: TranslationType) => t.key === key);
    if (translationEntry) {
      const translation = translationEntry.translations.find(t => t.language === language);
      return translation ? translation.value : key;
    }
    return key;
  };

  return { getTranslation };
};

export default useTranslation;
