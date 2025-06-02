import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Github,
  MapPin,
  Mail,
  Phone,
} from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white border-t pt-10">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-5 gap-6 text-gray-700">
        <div>
          <h3 className="text-xl font-bold text-gray-800">Nextgen Solution</h3>
          <p className="mt-2 text-sm">
          "Building smarter futures with next-gen construction solutions. Developed by SLIIT students."
          </p>
          <div className="mt-3 space-y-1 text-sm">
            <p className="flex items-center gap-2"><Phone size={16} /> +94 77 5228 345</p>
            <p className="flex items-center gap-2"><Mail size={16} /> nextgensolution@gmail.com</p>
            <p className="flex items-center gap-2"><MapPin size={16} /> SLIIT Malabe Campus, Sri Lanka</p>
          </div>
        </div>

        <div>
          <h4 className="font-semibold text-gray-900">Quick Links</h4>
          <ul className="mt-2 space-y-1 text-sm">
            <li><a href="#home" className="hover:text-cyan-600">Home</a></li>
            <li><a href="#domin" className="hover:text-cyan-600">Domain</a></li>
             <li><a href="#introduction" className="hover:text-cyan-600">About Us</a></li>
            </ul>
        </div>

        <div>
          <h4 className="font-semibold text-gray-900">Documents</h4>
          <ul className="mt-2 space-y-1 text-sm">
            <li><a href="#documents" className="hover:text-cyan-600">Documentation</a></li>
            <li><a href="#presentations" className="hover:text-cyan-600">Presentations</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-gray-900">Useful Links</h4>
          <ul className="mt-2 space-y-1 text-sm">
            <li><a href="#milestones" className="hover:text-cyan-600">Milestones</a></li>
            <li><a href="#features" className="hover:text-cyan-600">Features</a></li>
            <li><a href="#team" className="hover:text-cyan-600">Our Team</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-gray-900">Follow Us</h4>
          <div className="flex gap-4 mt-2">
            <a href="#" className="text-cyan-600 hover:scale-110 transition"><Twitter size={20} /></a>
            <a href="#" className="text-cyan-600 hover:scale-110 transition"><Facebook size={20} /></a>
            <a href="#" className="text-cyan-600 hover:scale-110 transition"><Instagram size={20} /></a>
            <a href="https://github.com/your-repo" className="text-cyan-600 hover:scale-110 transition"><Github size={20} /></a>
            <a href="https://linkedin.com/in/your-link" className="text-cyan-600 hover:scale-110 transition"><Linkedin size={20} /></a>
          </div>
        </div>
      </div>

      <div className="mt-10 border-t pt-4 pb-6 text-center text-sm text-gray-500 bg-gradient-to-t from-cyan-100 via-transparent to-white">
        &copy; {new Date().getFullYear()} <span className="font-semibold text-gray-700">Nextgen Solution</span>. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
