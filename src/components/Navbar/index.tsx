"use client"
import React from 'react';
import CountrySelector from '../CountrySelector';
import { useTranslations } from '@/store/useTranslations';
import useTranslation from '@/hooks/useTranslation';

const Navbar = (translations: any) => {
  const { language } = useTranslations();
  const { getTranslation } = useTranslation(translations);

  return (
    <div className="bg-blue-500">
      <nav className="relative px-4 py-4 flex justify-between items-center bg-white">
        <a className="flex flex-shrink-0 items-center" href="/">
          <img
            className='h-18 w-auto'
            src='https://framerusercontent.com/images/yXEKb2ITjOWe8gU3149WkiqWAmA.png?scale-down-to=120' />
        </a>
        <div className="lg:hidden">
          <button className="navbar-burger flex items-center text-blue-600 p-3">
            <svg
              className="block h-4 w-4 fill-current"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Mobile menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <ul className="hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:flex lg:mx-auto lg:items-center lg:w-auto lg:space-x-6">
          <li>
            <a className="text-sm text-gray-800 hover:text-gray-900 font-semibold" href="#">
              {getTranslation('inicio', language.code) || 'Inicio'}
            </a>
          </li>
          <li>
            <a className="text-sm text-gray-800 hover:text-gray-900 font-semibold" href="#">
              {getTranslation('about-menu', language.code) || 'Sobre Nosotros'}
            </a>
          </li>
          <li>
            <a className="text-sm text-gray-800 hover:text-gray-900 font-semibold" href="#">
              {getTranslation('services-menu', language.code) || 'Servicios'}
            </a>
          </li>
        </ul>
        <div className='flex flex-row gap-2'>
          <button className='text-sm font-semibold text-gray-800 hover:text-gray-900 py-1.5 px-2 bg-yellow-300 rounded-md'>
            {getTranslation('try-menu', language.code) || 'Prueba gratis'}
          </button>
          <button className='text-sm font-semibold text-gray-800 hover:text-gray-900 py-1.5 px-2 border border-gray-500 hover:border-yellow-300 hover:border-2 rounded-md'>
            {getTranslation('login-menu', language.code) || 'Iniciar Sesión'}
          </button>
          <div>
            <CountrySelector />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
