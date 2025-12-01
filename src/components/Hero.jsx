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
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-slate-950 pt-16">
      {/* Background Decor: Cyan and Fuchsia glow effects */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-20%] right-[-10%] w-1/2 h-1/2 bg-cyan-500/10 rounded-full blur-3xl opacity-50 animate-pulse"></div>
        <div className="absolute bottom-[-10%] left-[-5%] w-1/3 h-1/3 bg-fuchsia-500/10 rounded-full blur-3xl opacity-50 animate-pulse" style={{animationDelay: '500ms'}}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        {/* Callout Badge */}
        <div className="inline-block p-2 px-4 rounded-full bg-slate-800/50 border border-slate-700 text-cyan-400 text-sm font-medium mb-6 animate-fade-in-up hover:scale-105 transition-transform drop-shadow-md">
          Based in Bonn, Germany
        </div>
        
        {/* Main Title with glow */}
        <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 tracking-tight drop-shadow-lg" style={{textShadow: '0 0 10px rgba(255,255,255,0.1)'}}>
          Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-fuchsia-300">{PERSONAL_INFO.name}</span>
        </h1>
        
        {/* Dynamic typing text */}
        <div className="h-12 mb-8 text-2xl md:text-3xl text-slate-300 font-light">
          I am an <span className="text-white font-semibold border-r-4 border-cyan-400 pr-2 transition-all duration-75">{displayText}</span>
        </div>

        <p className="max-w-3xl mx-auto text-slate-400 mb-12 text-xl font-light">
          {PERSONAL_INFO.tagline} Experienced in building experiment control software, optimizing system performance, and deploying lightweight ML models for production and competition settings.
        </p>

        {/* Value Props Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
          {VALUE_PROPS.map((prop, idx) => {
            const IconComponent = prop.icon;
            return (
              <div key={idx} className="p-6 rounded-xl bg-slate-800/50 border border-slate-700/50 backdrop-blur-sm shadow-xl shadow-black/30 hover:shadow-cyan-500/15 hover:border-cyan-500/50 transition-all duration-300 group hover:scale-[1.03]">
                <div className="flex flex-col items-center">
                  <div className="mb-4 text-cyan-400 group-hover:scale-110 transition-transform group-hover:drop-shadow-[0_0_10px_rgba(45,212,255,0.8)]">
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
          {/* Primary Button: Cyan to Fuchsia gradient on hover */}
          <button 
            onClick={() => document.getElementById('projects').scrollIntoView({behavior:'smooth'})} 
            className="px-8 py-3 bg-cyan-500 hover:bg-fuchsia-500 text-white font-semibold rounded-lg transition-all duration-300 shadow-xl shadow-cyan-500/25 hover:shadow-fuchsia-500/25 transform hover:-translate-y-0.5"
          >
            View My Projects
          </button>
          {/* Secondary Button */}
          <button 
            onClick={() => document.getElementById('resume').scrollIntoView({behavior:'smooth'})} 
            className="px-8 py-3 bg-slate-800 hover:bg-slate-700 text-cyan-300 font-semibold rounded-lg transition-all border border-slate-700 hover:border-cyan-400/50"
          >
            Watch Resume
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;