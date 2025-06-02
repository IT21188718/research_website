'use client';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

const milestones = [
  {
    title: 'Project Topic Assessment',
    date: 'May 2024',
    description:
      'Initial topic assessment document of the proposed research was submitted for evaluation. The submitted document included a brief overview on key aspects of the proposed research along with the research problem, research objectives, overall solution as well as member task breakdown.',
    marks: 'No marks allocated',
  },
  {
    title: 'Project Charter Submission',
    date: 'June 2024',
    description:
      'Once the topic was finalized, the project charter document was submitted. It included the finalized problem statement, objectives, scope, timeline, and member contributions.',
    marks: 'No marks allocated',
  },
  {
    title: 'Project Proposal Presentation',
    date: 'February 2024',
    description:
      'Presented to a panel of judges in order to provide an overview of the proposed research.',
    marks: 'Marks Allocation-6%',
  },
  {
    title: 'Project Proposal Report',
    date: 'August 2024',
    description:
      'The submission of a report which provides an in-depth analysis pertaining to key aspects of the proposed research along with the research problem, objectives, as well as the overall proposed solution.',
    marks: 'Marks Allocation-6%',
  },
  {
    title: 'Status Document 1',
    date: 'December 2024',
    description:
      'The submission of a document that provides an overview of key tasks conducted by members during the implementation phase of the research.',
    marks: 'Marks Allocation-1%',
  },
  {
    title: 'Progress Presentation 1',
    date: 'December 2024',
    description:
      'Evaluation of 50% completion of the proposed solution by a panel of judges.',
    marks: 'Marks Allocation-15%',
  },
  {
    title: 'Research Paper draft submission',
    date: 'March 2025',
    description:
      'Draft submission of the research paper submitted to the supervisor for evaluation.',
    marks: 'Marks Allocation-10%',
  },
  {
    title: 'Final Thesis Submission',
    date: 'March 2025',
    description:
      'Submission of the group and individual thesis documents for evaluation.',
    marks: 'Marks Allocation-19%',
  },
  {
    title: 'Progress Presentation 2',
    date: 'March 2025',
    description:
      'Evaluation of 90% completion of the proposed solution by a panel of judges.',
    marks: 'Marks Allocation-18%',
  },
  {
    title: 'Log Book and Status Document 2',
    date: 'June 2025',
    description:
      'Submission of the research logbook and status document 2 which provides an overview of all key tasks conducted by members during the implementation phase of the research. Submission of research website for evaluation.',
    marks: 'Marks Allocation-3%',
  },
  {
    title: 'Website Assessment',
    date: 'June 2025',
    description:
      'Submission of research website for evaluation.',
    marks: 'Marks Allocation-2%',
  },
  {
    title: 'Final Report & Viva',
    date: 'May 2025',
    description:
      'Final evaluation of the completed product(100%).',
    marks: 'Marks Allocation-40%',
  },
];

function MilestoneItem({ item, isLeft, delay }: { item: typeof milestones[0]; isLeft: boolean; delay: number }) {
  const { ref, inView } = useInView({ threshold: 0.2 });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [inView, controls]);

  return (
    <motion.div
      ref={ref}
      variants={{
        hidden: { opacity: 0, y: isLeft ? 80 : -80 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      animate={controls}
      transition={{
        duration: 0.8,
        ease: 'easeOut',
        delay,
      }}
      className={`relative z-10 flex flex-col md:flex-row ${isLeft ? 'md:justify-start' : 'md:justify-end'}`}
    >
      {/* Timeline Dot */}
      <motion.div
        className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-cyan-300 border-4 border-white rounded-full z-10 shadow top-6"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      />

      {/* Card */}
      <div className={`md:w-1/2 px-4 ${isLeft ? 'md:pr-12' : 'md:pl-12'}`}>
        <div className="bg-white text-gray-800 p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-1">{item.title}</h3>
          <p className="text-sm font-medium text-gray-500 mb-2">{item.date}</p>
          <p className="text-base leading-relaxed">{item.description}</p>
          <p className="text-sm font-semibold text-right mt-4">{item.marks}</p>
        </div>
      </div>
    </motion.div>
  );
}

export default function Milestones() {
  return (
    <section id="milestones" className="w-full bg-[#0b143a] text-white py-20 px-4 scroll-mt-20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16">Milestones</h2>

        <div className="relative">
          {/* Vertical Line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full border-l-4 border-white z-0" />

          {/* Timeline Items */}
          <div className="flex flex-col gap-12">
            {milestones.map((item, idx) => {
              const isLeft = idx % 2 === 0;
              return <MilestoneItem key={idx} item={item} isLeft={isLeft} delay={idx * 0.1} />;
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
