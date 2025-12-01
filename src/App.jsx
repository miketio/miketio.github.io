import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import VideoResume from './components/VideoResume';
import Footer from './components/Footer';
import GoogleAnalytics from './components/GoogleAnalytics';

const App = () => {
  return (
    <>
      <GoogleAnalytics measurementId="G-E89R47FNDF" />
      <div 
        className="bg-slate-950 min-h-screen text-slate-200 font-sans selection:bg-cyan-500/30"
        style={{
          // Subtle grid pattern for "Deep Space" theme
          backgroundImage: 'repeating-linear-gradient(0deg, #1E293B 0, #1E293B 1px, transparent 1px, transparent 40px), repeating-linear-gradient(90deg, #1E293B 0, #1E293B 1px, #0F172A 1px, #0F172A 40px)',
          backgroundSize: '40px 40px'
        }}
      >
        <Navbar />
        <main>
          <Hero />
          <Projects />
          <VideoResume />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default App;