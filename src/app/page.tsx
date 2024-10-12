"use client"
import ContactSalesForm from "@/components/ContactSalesForm";
import HeroSection from "@/components/HeroSection";
import Loader from "@/components/Loader";
import Navbar from "@/components/Navbar";
import { getTranslationsByLang } from "@/services/translationService";
import { useTranslations } from "@/store/useTranslations";
import Image from "next/image";
import { useEffect } from "react";

export default function Home() {
  const { language } = useTranslations();
  const { data: translations, isLoading, refetch } = getTranslationsByLang(language.code)

  useEffect(() => {
    refetch()
  }, [language])

  return (
    <div>
      {isLoading ? <Loader /> :
        <main className="bg-gray-50">
          <Navbar translations={translations?.data} />
          <HeroSection translations={translations?.data} />
          <ContactSalesForm translations={translations?.data} />
        </main>
      }
    </div>
  );
}
