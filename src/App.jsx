import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import VideoResume from './components/VideoResume';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="bg-slate-900 min-h-screen text-slate-200 font-sans selection:bg-emerald-500/30">
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <VideoResume />
      </main>
      <Footer />
    </div>
  );
};

export default App;