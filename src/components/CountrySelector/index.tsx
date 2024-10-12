import React, { useState } from 'react';
import { Listbox } from '@headlessui/react';
import { useTranslations } from '@/store/useTranslations';

// Datos de países
const countries = [
  { code: 'es', name: 'Spanish' },
  { code: 'us', name: 'English' },
];

const CountrySelector = () => {
  const { language, setLanguage } = useTranslations();

  return (
    <div className="w-fit">
      <Listbox value={language} onChange={setLanguage}>
        <div className="relative">
          <Listbox.Button className="relative w-full bg-white border border-gray-300 rounded-lg shadow-md py-2 px-3 text-left cursor-default ring-0 outline-none">
            <img src={`https://flagcdn.com/w20/${language.code.toLowerCase()}.png`} alt={language.name} className="inline-block mr-2 w-full" />
          </Listbox.Button>
          <Listbox.Options className="absolute mt-1 w-full bg-white border border-gray-300 rounded-lg shadow-lg z-10">
            {countries.map((country) => (
              <Listbox.Option key={country.code} value={country} className={({ active, selected }) => `
                cursor-default select-none relative py-2 pl-10 pr-4 ${active ? 'bg-blue-600 text-white' : 'text-gray-900'}
              `}>
                {({ selected }) => (
                  <div className='py-2'>
                    <span className={`absolute inset-y-0 left-0 flex items-center pl-3`}>
                      <img src={`https://flagcdn.com/w20/${country.code.toLowerCase()}.png`} alt={country.name} className="inline-block mr-2 w-full" />
                    </span>
                  </div>
                )}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </div>
      </Listbox>
    </div>
  );
};

export default CountrySelector;
