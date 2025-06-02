'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';

export default function Introduction() {
  const sectionRef = useRef(null);

  // GSAP live animation
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to('.floating-heading', {
        y: -10,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });

      gsap.to('.waving-subtext', {
        rotation: 1,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="introduction"
      ref={sectionRef}
      className="w-full px-6 py-20 bg-sky-950 text-white scroll-mt-20 overflow-hidden"
    >
      <div className="max-w-5xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="floating-heading text-5xl sm:text-6xl font-[var(--font-poppins)] mb-6"
        >
          What is Nextgen Solution?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="waving-subtext  sm:text-3xl font-semibold text-gray-100 mb-8"
        >
          <span className="text-black font-[var(--font-poppins)]">
            "NextGen solution" is an innovative, user-friendly website designed to revolutionize the construction industry.
          </span>
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1 }}
          className="text-base sm:text-xl leading-relaxed tracking-wide"
        >
          Leveraging machine learning, the platform provides automated solutions for various construction tasks. Key features
          include accurate cost estimation based on neck circumference data, personalized material recommendations, solar panel
          specifications, and interior design suggestions.
          <br /><br />
          By integrating advanced AI technologies, NextGen Construction aims to streamline the construction process,
          enhance efficiency, and reduce costs, making construction more accessible and sustainable for all users.
          This platform sets the foundation for the future of intelligent, automated construction.
        </motion.p>
      </div>
    </section>
  );
}
