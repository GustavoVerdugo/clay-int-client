import { FaCloudArrowUp } from "react-icons/fa6";
import { FaLock } from "react-icons/fa";
import { IoCashOutline } from "react-icons/io5";
import { useTranslations } from "@/store/useTranslations";
import useTranslation from "@/hooks/useTranslation";

interface Feature {
  name: string;
  description: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

const features: Feature[] = [
  {
    name: 'cloud-work',
    description:
      'cloud-work-desc',
    icon: FaCloudArrowUp,
  },
  {
    name: 'secure-work',
    description: 'secure-work-desc',
    icon: FaLock,
  },
  {
    name: 'cash-work',
    description: 'cash-work-desc',
    icon: IoCashOutline,
  },
];

const HeroSection = (translations: any) => {
  const { language } = useTranslations();
  const { getTranslation } = useTranslation(translations);
  return (
    <div className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-sm font-semibold leading-7 text-gray-600 bg-gray-100 rounded-lg py-1.5 px-2 max-w-fit">
                {getTranslation('software-desc', language.code)}
              </h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                {getTranslation('hero-title', language.code)}
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                {getTranslation('hero-desc', language.code)}
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <feature.icon aria-hidden="true" className="absolute left-1 top-1 h-5 w-5 text-sky-500" />
                      {getTranslation(feature.name, language.code)}
                    </dt>{' '}
                    <dd className="inline">
                      {getTranslation(feature.description, language.code)}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <div className="relative">
            <img
              alt="Clay image"
              src="https://framerusercontent.com/images/nabQPDUNR3e9vdEw0mqx2l0xkxE.jpg"
              className="w-[48rem] max-w-lg rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
            />
            <img
              alt="Sup image"
              src="https://framerusercontent.com/images/2jBHMhY4HLJ3D7xHjbbzEI6X0.png?scale-down-to=512"
              className="absolute bottom-10 right-0 w-full max-w-sm h-fit object-contain rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
