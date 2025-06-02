'use client';
import { JSX, useState, useEffect } from 'react';
import { Globe, BarChart3, HelpCircle, Send } from 'lucide-react';
import gsap from 'gsap';

const tabs = [
  { name: 'Background', icon: <Globe className="inline w-5 h-5 mr-2" /> },
  { name: 'Research Gap', icon: <BarChart3 className="inline w-5 h-5 mr-2" /> },
  { name: 'Research Problems', icon: <HelpCircle className="inline w-5 h-5 mr-2" /> },
  { name: 'Research Objectives', icon: <Send className="inline w-5 h-5 mr-2" /> },
];

const tabContent: Record<string, JSX.Element> = {
  'Background': (
    <>
      <p className="mb-4 tab-paragraph">
        Our research focuses on developing advanced machine learning systems to optimize critical areas in the construction and real estate sectors. 
        We aim to enhance construction cost estimations, predict land and house prices through data-driven models, and offer efficient solar panel recommendations for sustainable energy solutions.
      </p>
      <p className="tab-paragraph">
        Additionally, we have created a collaborative AI-powered platform for interior design, enabling real-time communication between designers and clients. 
        By integrating these innovative systems, we aim to drive progress, improve decision-making, and increase efficiency across multiple industries.
      </p>
    </>
  ),
  'Research Gap': (
    <>
      <p className="tab-paragraph">
        While there have been advancements in individual aspects like construction cost estimation, land price prediction, solar panel recommendations, and interior design collaboration, most existing systems either focus on isolated tasks or lack comprehensive integration. 
        Additionally, current models often rely on traditional methods that fail to incorporate real-time data, leading to suboptimal predictions. Previous works also neglect the integration of economic feasibility and environmental factors in solar panel recommendations. 
      </p>
      <p className="tab-paragraph">
        There is a clear gap in developing an integrated ML-based system that combines predictive analytics for construction costs, land value estimation, solar power recommendations, and design collaboration, considering real-time data and economic feasibility. 
        This research bridges that gap by creating a unified, automated system that enhances sustainability and decision-making within the construction industry.
      </p>
    </>
  ),
  'Research Problems': (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-sm">
      <div className="card bg-white text-black p-6 rounded-lg shadow-lg">
        <h3 className="font-semibold text-xl mb-3 text-center">Construction Project Costing</h3>
        <p className="tab-paragraph">
          Most construction projects rely on traditional estimation methods that are time-consuming and prone to errors, affecting budget accuracy and leading to cost overruns.
        </p>
      </div>
      <div className="card bg-white text-black p-6 rounded-lg shadow-lg">
        <h3 className="font-semibold text-xl mb-3 text-center">Real Estate Price Prediction</h3>
        <p className="tab-paragraph">
          The real estate market often lacks accurate, data-driven tools for predicting property prices, leading to missed opportunities and uncertain investments for developers and buyers.
        </p>
      </div>
      <div className="card bg-white text-black p-6 rounded-lg shadow-lg">
        <h3 className="font-semibold text-xl mb-3 text-center">Solar Panel Recommendation</h3>
        <p className="tab-paragraph">
          Current systems for solar panel recommendations are limited, often neglecting environmental and cost considerations, leading to inefficient system designs that don’t meet real-world needs.
        </p>
      </div>
      <div className="card bg-white text-black p-6 rounded-lg shadow-lg">
        <h3 className="font-semibold text-xl mb-3 text-center">Interior Design Collaboration</h3>
        <p className="tab-paragraph">
          The lack of efficient, AI-powered design tools for real-time collaboration between clients and designers leads to miscommunications and delays in the interior design process.
        </p>
      </div>
    </div>
  ),
  'Research Objectives': (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 text-sm">
      <div className="card bg-white text-black p-6 rounded-lg shadow-lg">
        <h3 className="font-semibold text-xl mb-3 text-center">Main Objective</h3>
        <p className="tab-paragraph text-sm">
          To develop an "Automated Architectural Planning" system, utilizing machine learning (ML) to automatically generate architectural designs.
        </p>
      </div>
      <div className="card bg-white text-black p-6 rounded-lg shadow-lg">
        <h3 className="font-semibold text-xl mb-3 text-center">Specific Objectives</h3>
        <ul className="space-y-4">
          <li className="text-sm tab-list-item">
            <strong>1.</strong> To integrate advanced data processing techniques for accurately interpreting complex architectural and climatic information.
          </li>
          <li className="text-sm tab-list-item">
            <strong>2.</strong> To ensure the system has a user-friendly interface for widespread accessibility, making it intuitive for users of varying technical expertise.
          </li>
          <li className="text-sm tab-list-item">
            <strong>3.</strong> To maintain high performance and quick response times, ensuring the system operates efficiently under diverse conditions.
          </li>
          <li className="text-sm tab-list-item">
            <strong>4.</strong> To incorporate real-time adjustments based on user inputs and environmental changes, enhancing the system's adaptability and precision in architectural design.
          </li>
        </ul>
      </div>
    </div>
  ),
};

export default function Domain() {
  const [activeTab, setActiveTab] = useState('Background');

  useEffect(() => {
    // Create a GSAP timeline for tab content animations
    const tl = gsap.timeline();

    // Animate the tab content container
    tl.fromTo(
      '.tab-content-container',
      { opacity: 0, scale: 0.95, y: 30 },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 0.8,
        ease: 'power3.out',
      }
    );

    // Animate individual cards with stagger and slight rotation
    tl.fromTo(
      '.card',
      { opacity: 0, y: 50, rotateY: 10 },
      {
        opacity: 1,
        y: 0,
        rotateY: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'back.out(1.7)',
      },
      '-=0.5' // Overlap with container animation
    );

    // Animate text and list items with word-level stagger
    tl.fromTo(
      '.tab-paragraph, .tab-list-item',
      { opacity: 0, y: 15 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power2.out',
      },
      '-=0.3' // Overlap with card animation
    );

    // Animate tab buttons on load
    gsap.from('.tab-button', {
      opacity: 0,
      x: (index) => (index % 2 === 0 ? -20 : 20),
      duration: 0.6,
      stagger: 0.1,
      ease: 'power2.out',
    });

    // Cleanup to prevent animation overlap
    return () => {
      tl.kill();
    };
  }, [activeTab]);

  return (
    <section id="domain" className="w-full px-4 py-20 bg-gray-900 text-white scroll-mt-20">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold mb-10">Our Domain</h2>

        {/* Tabs */}
        <div className="flex justify-center flex-wrap gap-4 mb-8 border-b border-gray-600 pb-2">
          {tabs.map((tab) => (
            <button
              key={tab.name}
              onClick={() => setActiveTab(tab.name)}
              className={`tab-button px-6 py-3 rounded-md text-lg font-medium flex items-center transition-transform duration-300 ${
                activeTab === tab.name
                  ? 'text-blue-400 border-b-2 border-blue-400 scale-105'
                  : 'text-gray-500 hover:text-blue-400 hover:scale-105'
              }`}
            >
              {tab.icon}
              {tab.name}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div key={activeTab} className="bg-cyan-400 p-6 rounded-xl shadow-lg mb-10 tab-content-container">
          <h3 className="text-2xl font-bold mb-6">{activeTab}</h3>
          <div className="bg-white text-black p-6 rounded-lg space-y-4 text-justify">
            {tabContent[activeTab]}
          </div>
        </div>
      </div>
    </section>
  );
}