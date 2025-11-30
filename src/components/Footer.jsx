import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { PERSONAL_INFO } from '../data';

const Footer = () => {
  return (
    <footer id="contact" className="bg-slate-950 py-12 border-t border-slate-900">
      <div className="container mx-auto px-6 text-center">
        <h3 className="text-2xl font-bold text-white mb-8">Let's work together</h3>
        <div className="flex justify-center gap-6 mb-8">
          <a 
            href={PERSONAL_INFO.socials.github} 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-3 bg-slate-900 rounded-full text-slate-400 hover:text-white hover:bg-emerald-600 transition-all"
          >
            <Github size={24} />
          </a>
          <a 
            href={PERSONAL_INFO.socials.linkedin} 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-3 bg-slate-900 rounded-full text-slate-400 hover:text-white hover:bg-blue-600 transition-all"
          >
            <Linkedin size={24} />
          </a>
          <a 
            href={PERSONAL_INFO.socials.email} 
            className="p-3 bg-slate-900 rounded-full text-slate-400 hover:text-white hover:bg-red-500 transition-all"
          >
            <Mail size={24} />
          </a>
        </div>
        <p className="text-slate-600 text-sm">
          © {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;