'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

const tools = [
  { name: 'Machine Learning', src: '/assets/ml.png' },
  { name: 'Python', src: '/assets/python.png' },
  { name: 'Google Colab', src: '/assets/colab.png' },
  { name: 'React (Vite)', src: '/assets/reactvite.png' },
  { name: 'Tailwind CSS', src: '/assets/tailwind.png' },
  { name: 'Stable Diffusion', src: '/assets/stability.png' },
  { name: 'Flask API', src: '/assets/flask.png' },
  { name: 'MongoDB', src: '/assets/mongodb.png' },
  { name: 'Nodejs', src: '/assets/node-js.png' },
  { name: 'Hugging Face', src: '/assets/hugging-face.png' },
  { name: 'GitHub', src: '/assets/git.png' },
];

export default function Tools() {
  return (
    <section
      id="toolstechnologies"
      className="relative w-full py-20 px-6 bg-gradient-to-br from-black via-gray-900 to-black text-white scroll-mt-20"
    >
      {/* Background stars */}
      <div className="absolute inset-0 bg-[url('/backgrounds/stars.png')] bg-cover bg-center opacity-20 z-0" />

      <div className="max-w-6xl mx-auto text-center relative z-10">
        <motion.h2
          className="text-4xl font-bold mb-12 text-white"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          🛠️ Tools and Technologies Used
        </motion.h2>

        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 justify-items-center"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          {tools.map((tool, index) => (
            <motion.div
              key={index}
              whileHover={{
                scale: 1.1,
                rotate: 3,
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 300, damping: 15 }}
              className="backdrop-blur-lg bg-white/10 border border-white/20 hover:shadow-[0_0_20px_2px_rgba(255,255,255,0.2)] rounded-2xl p-6 w-full max-w-[160px] flex items-center justify-center"
            >
              <Image
                src={tool.src}
                alt={tool.name}
                width={50}
                height={50}
                className="object-contain"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
