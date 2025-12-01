import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { PERSONAL_INFO } from '../data';
import { useAnalytics } from './GoogleAnalytics';

const Footer = () => {
  const { trackSocialClick } = useAnalytics();

  const handleSocialClick = (platform, url) => {
    trackSocialClick(platform);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <footer id="contact" className="bg-slate-900 py-12 border-t border-fuchsia-900/50">
      <div className="container mx-auto px-6 text-center">
        <h3 className="text-2xl font-bold text-white mb-8">Let's connect and build the future.</h3>
        <div className="flex justify-center gap-6 mb-8">
          {/* GitHub with cyan glow */}
          <button
            onClick={() => handleSocialClick('GitHub', PERSONAL_INFO.socials.github)}
            className="p-3 bg-slate-800 rounded-full text-slate-400 hover:text-white hover:bg-cyan-600 transition-all duration-300 shadow-lg hover:shadow-cyan-500/50"
            aria-label="GitHub Profile"
          >
            <Github size={24} />
          </button>
          {/* LinkedIn with blue glow */}
          <button
            onClick={() => handleSocialClick('LinkedIn', PERSONAL_INFO.socials.linkedin)}
            className="p-3 bg-slate-800 rounded-full text-slate-400 hover:text-white hover:bg-blue-600 transition-all duration-300 shadow-lg hover:shadow-blue-500/50"
            aria-label="LinkedIn Profile"
          >
            <Linkedin size={24} />
          </button>
          {/* Email with fuchsia glow */}
          <a 
            href={PERSONAL_INFO.socials.email}
            onClick={() => trackSocialClick('Email')}
            className="p-3 bg-slate-800 rounded-full text-slate-400 hover:text-white hover:bg-fuchsia-600 transition-all duration-300 shadow-lg hover:shadow-fuchsia-500/50"
            aria-label="Email"
          >
            <Mail size={24} />
          </a>
        </div>
        <p className="text-slate-600 text-sm pt-8 border-t border-slate-800 mt-8">
          © {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;