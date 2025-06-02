'use client';
import { motion, useAnimation } from 'framer-motion';
import { useEffect, useState } from 'react';

const letterVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.05,
      duration: 0.5,
      ease: 'easeOut',
    },
  }),
};

const wordVariants = {
  hover: {
    scale: 1.05,
    color: '#a1a1ff',
    transition: { duration: 0.3 },
  },
};

export default function Hero() {
  const [scrolling, setScrolling] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const x = (clientX - window.innerWidth / 2) / 10;
      const y = (clientY - window.innerHeight / 2) / 10;

      controls.start({
        x,
        y,
        transition: { duration: 0.1 },
      });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [controls]);

  const titleText = 'Nextgen Solution';
  const words = titleText.split(' ');

  return (
    <section
      id="home"
      className="relative w-full min-h-screen pt-24 pb-16 flex items-center justify-center overflow-hidden"
    >
      {/* Background with parallax */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ backgroundPosition: '0% 0%' }}
        animate={{ backgroundPosition: scrolling ? '100% 100%' : '0% 0%' }}
        transition={{
          duration: 1,
          ease: 'linear',
        }}
      >
        <div className="absolute inset-0 bg-[#060d23] backdrop-blur-3xl">
          <img
            src="/assets/hero-bg.png"
            alt="Hero Background"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
      </motion.div>

      {/* Foreground content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative z-10 w-full max-w-[90%] sm:max-w-4xl text-center px-4"
      >
        <h1 className="sm:text-6xl font-bold text-white mb-6 leading-tight break-words">
          <motion.div
            initial="hidden"
            animate="visible"
            whileHover="hover"
            variants={wordVariants}
          >
            {words.map((word, wordIndex) => (
              <span key={wordIndex} className="inline-block mr-2">
                {word.split('').map((letter, letterIndex) => (
                  <motion.span
                    key={letterIndex}
                    custom={letterIndex}
                    variants={letterVariants}
                    className="inline-block"
                  >
                    {letter}
                  </motion.span>
                ))}
              </span>
            ))}
          </motion.div>
        </h1>

        <motion.p
          className="sm:text-2xl font-semibold text-white mb-6 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
        >
          &quot;We shape our buildings; thereafter, they shape us.&quot;
        </motion.p>

        <motion.p
          className="text-sm italic text-gray-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          whileHover={{ color: '#a1a1ff', transition: { duration: 0.3 } }}
        >
          — Winston Churchill
        </motion.p>
      </motion.div>

      {/* Mouse interaction for foreground movement */}
      <motion.div
        className="absolute inset-0 z-0"
        animate={controls}
        initial={{ x: 0, y: 0 }}
        transition={{ duration: 0.1 }}
      />
    </section>
  );
}
