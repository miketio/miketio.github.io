import React, { useState, useEffect } from 'react';
import { PERSONAL_INFO, VALUE_PROPS } from '../data';

const Hero = () => {
  const [textIndex, setTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  
  useEffect(() => {
    const currentRole = PERSONAL_INFO.roles[textIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentRole.substring(0, displayText.length + 1));
        if (displayText === currentRole) setTimeout(() => setIsDeleting(true), 2000);
      } else {
        setDisplayText(currentRole.substring(0, displayText.length - 1));
        if (displayText === "") {
          setIsDeleting(false);
          setTextIndex((prev) => (prev + 1) % PERSONAL_INFO.roles.length);
        }
      }
    }, isDeleting ? 50 : 150);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, textIndex]);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-slate-900 pt-16">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-[-10%] left-[-5%] w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <div className="inline-block p-2 px-4 rounded-full bg-slate-800/50 border border-slate-700 text-emerald-400 text-sm font-medium mb-6 animate-fade-in-up">
          Based in Bonn, Germany
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
          Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">{PERSONAL_INFO.name}</span>
        </h1>
        
        <div className="h-12 mb-8 text-2xl md:text-3xl text-slate-400 font-light">
          I am an <span className="text-white border-r-2 border-emerald-400 pr-1">{displayText}</span>
        </div>

        <p className="max-w-2xl mx-auto text-slate-400 mb-12 text-lg">
          {PERSONAL_INFO.tagline} Experienced in building experiment control software, optimizing system performance, and deploying lightweight ML models for production and competition settings.
        </p>

        {/* Value Props Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
          {VALUE_PROPS.map((prop, idx) => {
            const IconComponent = prop.icon;
            return (
              <div key={idx} className="p-6 rounded-2xl bg-slate-800/50 border border-slate-700/50 backdrop-blur-sm hover:border-emerald-500/30 transition-all group">
                <div className="flex flex-col items-center">
                  <div className="mb-4 text-emerald-400 group-hover:scale-110 transition-transform">
                    <IconComponent size={24} />
                  </div>
                  <h3 className="text-white font-semibold mb-1">{prop.title}</h3>
                  <p className="text-slate-400 text-sm">{prop.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            onClick={() => document.getElementById('projects').scrollIntoView({behavior:'smooth'})} 
            className="px-8 py-3 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold rounded-lg transition-all shadow-lg shadow-emerald-500/25"
          >
            View My Projects
          </button>
          <button 
            onClick={() => document.getElementById('resume').scrollIntoView({behavior:'smooth'})} 
            className="px-8 py-3 bg-slate-800 hover:bg-slate-700 text-white font-semibold rounded-lg transition-all border border-slate-700"
          >
            Watch Resume
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;