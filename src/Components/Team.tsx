'use client';
import { motion } from 'framer-motion';
import { Linkedin, Facebook, Mail } from 'lucide-react';

type Member = {
  name: string;
  role: string;
  image: string;
  linkedin?: string;
  facebook?: string;
  email?: string;
};

const teamMembers: Member[] = [
  {
    name: 'Mr.N.H.P.Ravi Supunya Swarnakantha',
    role: 'Supervisor',
    image: '/team/Ravi.jpg',
    linkedin: 'https://linkedin.com/in/ravi-supunya-2b2774ab',
    facebook: '#',
    email: 'mailto:ravi.s@sliit.lk',
  },
  {
    name: 'Sathurjan.K',
    role: 'Team Leader',
    image: '/team/sathu.jpg',
    linkedin: 'https://linkedin.com/in/sathurjan-karunanithy-bb4bb31a0',
    facebook: '#',
    email: 'mailto:it21188718@my.sliit.lk',
  },
  {
    name: 'Linganathan J ',
    role: 'Member',
    image: '/team/Jathursika.jpg',
    linkedin: 'https://linkedin.com/in/jathursika-linganathan',
    facebook: '#',
    email: 'mailto:it21223808@my.sliit.lk',
  },
  {
    name: 'R A AHAMED ',
    role: 'Member',
    image: '/team/asry.jpg',
    linkedin: 'https://linkedin.com/in/asry-ahamed-41664b218',
    facebook: '#',
    email: 'mailto:it20158018@my.sliit.lk',
  },
  {
    name: 'Silva A A I',
    role: 'Member',
    image: '/team/inoka.jpg',
    linkedin: 'https://linkedin.com/in/ann-inokka',
    facebook: '#',
    email: 'mailto:it21301254@my.sliit.lk',
  },
  {
    name: 'Dr.Dharshana Kasthurirathna',
    role: 'Co-Supervisor',
    image: '/team/Dharshana.jpg',
    linkedin: 'https://linkedin.com/in/dharshana-kasthurirathna-a4a3275',
    facebook: '#',
    email: 'mailto:dharshana.k@sliit.lk',
  },
];

export default function Team() {
  return (
    <section id="team" className="bg-cyan-500 text-center py-20 px-4 text-white">
      <h2 className="text-4xl font-bold mb-12">Team</h2>

      <div className="flex flex-wrap justify-center gap-8">
        {teamMembers.map((member, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.6, delay: idx * 0.15, ease: 'easeOut' }}
            className="bg-white text-gray-800 rounded-xl shadow-md w-60 flex flex-col items-center py-6 px-4 hover:shadow-lg transition-shadow"
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-28 h-28 object-cover rounded-full shadow-md mb-4"
            />
            <h3 className="font-bold text-lg text-center">{member.name}</h3>
            <p className="text-sm text-gray-600">{member.role}</p>

            <div className="flex gap-3 mt-4">
              {member.linkedin && (
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded border hover:bg-blue-600 hover:text-white transition"
                >
                  <Linkedin size={18} />
                </a>
              )}
              {member.facebook && (
                <a
                  href={member.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded border hover:bg-blue-600 hover:text-white transition"
                >
                  <Facebook size={18} />
                </a>
              )}
              {member.email && (
                <a
                  href={member.email}
                  className="p-2 rounded border hover:bg-blue-600 hover:text-white transition"
                >
                  <Mail size={18} />
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
