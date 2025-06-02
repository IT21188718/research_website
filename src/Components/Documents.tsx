'use client';
import { useState, useEffect } from 'react';
import gsap from 'gsap'; // Import GSAP

const allDocuments: Record<string, { name: string; file: string }[]> = {
  'Project Registration Documents': [
    { name: 'TAF-2024-25J-201', file: '/docs/prf/IT4010-TAF-2024-25J-201.pdf' },
  ],
  'Project Proposal': [
    { name: 'Proposal IT21188718', file: '/docs/proposal/IT21188718 Sathurjan.K .pdf' },
    { name: 'Proposal IT21223808', file: '/docs/proposal/IT21223808 Linganathan . J .pdf' },
    { name: 'Proposal IT20158018', file: '/docs/proposal/IT21158018-R.A.AHAMED.pdf' },
    { name: 'Proposal IT21301254', file: '/docs/proposal/IT21301254_Silva A.A.I.pdf' },
  ],
  'Proposal Presentation': [
    { name: 'RPJ_24-25_201_Propsal_Presentation', file: '/docs/proposalPresentation/RPJ_24-25_201_Propsal_Presentation.pptx' },
  ],
  'Status Document 01': [
    { name: 'Status Phase 1', file: '/docs/status1/status-phase1.pdf' },
  ],
  'Progress Presentation 01': [
    { name: 'RPJ_24-25_201_Progress_Presentation1', file: '/docs/pp1/RPJ_24-25_201_Progress_Presentation1.pptx' },
  ],
  'Research Paper': [
    { name: 'RPJ_24-25J-201', file: '/docs/researchpaper/RPJ_24-25J-201.pdf' },
  ],
  'Progress Presentation 02': [
    { name: 'RPJ_24-25_201_Progress_Presentation1', file: '/docs/pp2/RPJ_24-25_201_Progress_Presentation2.pptx' },
  ],
  'Status Document 02': [
    { name: 'Status Phase 2', file: '/docs/status2/status-phase2.pdf' },
  ],
  'Final Reports': [
    { name: 'FinalReport_IT21188718', file: '/docs/finalreport/IT21188718-Sathurjan.K.pdf' },
    { name: 'FinalReport_IT21223808', file: '/docs/finalreport/IT21223808-Linganathan.J.pdf' },
    { name: 'FinalReport_IT20158018', file: '/docs/finalreport/IT21158018-R.A.AHAMED.pdf' },
    { name: 'FinalReport_IT21301254', file: '/docs/finalreport/IT21301254-SilvaA.A.I.pdf' },
  ],
  'Final Presentation': [
    { name: 'RPJ_24-25_201_Final_Presentation', file: '/docs/final-presentation/defense-slides.pdf' },
  ],
  'Logbook': [
    { name: 'IT21188718_Logbook', file: '/docs/logbook/IT21188718_Logbook1.pdf' },
    { name: 'IT21223808_Logbook', file: '/docs/logbook/IT21223808_Logbook[1].pdf' },
    { name: 'IT20158018_Logbook', file: '/docs/logbook/IT21158018_Logbook.pdf' },
    { name: 'IT21301254_Logbook', file: '/docs/logbook/IT21301254_Logbook.pdf' },
  ],
};

export default function Documents() {
  const [activeTab, setActiveTab] = useState('Project Proposal');
  const [filesLoaded, setFilesLoaded] = useState(false);

  // Animate file cards when tab changes
  useEffect(() => {
    gsap.fromTo(
      '.file-card',
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, stagger: 0.2 }
    );
    setFilesLoaded(true);
  }, [activeTab]);

  // Animate tab buttons when clicked
  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
    gsap.to('.tab-btn', {
      scale: 1.2,
      duration: 0.3,
      ease: 'ease-out',
      onComplete: () => {
        gsap.to('.tab-btn', { scale: 1, duration: 0.3 });
      },
    });
  };

  return (
    <section id="documents" className="w-full py-20 px-6 bg-gradient-to-br from-white to-blue-50 scroll-mt-20">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-blue-700 mb-10">📁 Project Documents</h2>

        {/* 🟦 Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {Object.keys(allDocuments).map((tab) => (
            <button
              key={tab}
              onClick={() => handleTabClick(tab)}
              className={`tab-btn px-4 py-2 rounded-full text-sm font-medium transition cursor-pointer ${
                tab === activeTab
                  ? 'bg-blue-600 text-white shadow'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* 🧾 File Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-items-center">
          {allDocuments[activeTab]?.map((file, index) => (
            <div
              key={index}
              className="file-card bg-white shadow-md rounded-lg p-5 w-full max-w-xs flex flex-col items-center hover:shadow-xl transition"
            >
              {/* Icon */}
              <img
                src="https://cdn-icons-png.flaticon.com/512/337/337946.png"
                alt="PDF Icon"
                className="w-14 h-14 mb-4"
              />
              <p className="text-md font-semibold mb-2 text-gray-800">{file.name}</p>
              <a
                href={file.file}
                download
                className="text-sm text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded"
              >
                Download
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
