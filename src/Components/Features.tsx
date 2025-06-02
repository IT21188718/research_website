'use client';
import { useEffect, useRef } from 'react';
import { MdOutlineSolarPower } from "react-icons/md";
import { TfiHome } from "react-icons/tfi";
import { MdOutlinePriceChange } from "react-icons/md";
import { TbHomeDollar } from "react-icons/tb";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    title: 'Construction Cost Estimation',
    icon: <MdOutlinePriceChange className="w-12 h-12 mx-auto text-white" />,
    description: 'Predictive Costing: Accurate budgeting using machine learning to forecast construction expenses based on real-time data.',
    bgColor: 'bg-rose-500',
    textColor: 'text-white',
  },
  {
    title: 'Land & House Price Prediction',
    icon: <TbHomeDollar className="w-12 h-12 mx-auto text-white" />,
    description: 'Real Estate Forecasting: Machine learning models to predict property prices based on location, features, and market trends.',
    bgColor: 'bg-green-500',
    textColor: 'text-white',
  },
  {
    title: 'Solar Panel Recommendation',
    icon: <MdOutlineSolarPower className="w-12 h-12 mx-auto text-black" />,
    description: 'Energy Efficiency: Optimized solar panel suggestions based on land size, weather conditions, and location for cost-effective solutions.',
    bgColor: 'bg-yellow-300',
    textColor: 'text-black',
  },
  {
    title: 'Interior Design Collaboration',
    icon: <TfiHome className="w-12 h-12 mx-auto text-white" />,
    description: 'AI Design Suggestions: Real-time collaboration and design recommendations based on client preferences and space requirements.',
    bgColor: 'bg-blue-600',
    textColor: 'text-white',
  },
];

export default function Features() {
  const featureRefs = useRef<(HTMLDivElement | null)[]>([]);

  // GSAP Animation Logic
  useEffect(() => {
    featureRefs.current.forEach((feature, idx) => {
      gsap.from(feature, {
        opacity: 0,
        y: 50,
        scale: 0.8,
        duration: 1,
        delay: idx * 0.2,
        scrollTrigger: {
          trigger: feature,
          start: 'top 80%',
          end: 'bottom top',
          scrub: true,
        }
      });

      gsap.to(feature, {
        scale: 1.05,
        opacity: 1,
        duration: 0.3,
        ease: 'power1.inOut',
        scrollTrigger: {
          trigger: feature,
          start: 'top 90%',
          end: 'bottom 70%',
          scrub: true,
          toggleActions: 'play none none reverse',
        },
      });
    });
  }, []);

  return (
    <section
      id="features"
      className="w-full py-20 px-4 bg-gray-900 text-white scroll-mt-20"
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12">What do we provide?</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {features.map((feature, idx) => (
            <div
              key={idx}
              ref={(el) => { featureRefs.current[idx] = el; }}
              className={`rounded-lg p-6 shadow-md text-center ${feature.bgColor} ${feature.textColor} group relative`}
            >
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              {feature.icon}
              <p className="mt-4 text-base leading-relaxed">{feature.description}</p>

              {/* Hover effect with GSAP */}
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-25 rounded-lg" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
