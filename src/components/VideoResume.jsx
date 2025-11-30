import React from 'react';
import { PlayCircle } from 'lucide-react';
import { PERSONAL_INFO } from '../data';

const VideoResume = () => {
  return (
    <section id="resume" className="py-24 bg-slate-800/50 border-y border-slate-800">
      <div className="container mx-auto px-6 text-center">
        <div className="flex items-center justify-center gap-3 mb-6">
          <PlayCircle className="text-emerald-400" size={32} />
          <h2 className="text-3xl md:text-4xl font-bold text-white">Video Resume</h2>
        </div>
        
        <p className="text-slate-400 mb-12 max-w-2xl mx-auto">
          A quick introduction to who I am, my communication style, and why I love what I do.
        </p>

        <div className="max-w-4xl mx-auto bg-slate-900 p-2 rounded-2xl shadow-2xl border border-slate-700">
          <div className="relative pb-[56.25%] h-0 rounded-xl overflow-hidden bg-black">
            <video
              controls
              preload="metadata"
              className="absolute top-0 left-0 w-full h-full object-cover"
              poster={PERSONAL_INFO.videoPosterUrl}
            >
              <source src={PERSONAL_INFO.videoResumeUrl} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
        
        <div className="mt-8 flex justify-center gap-4">
          <a 
            href="/TiuterevCV.pdf" 
            download 
            className="text-slate-400 hover:text-white text-sm font-medium transition-colors"
          >
            Download PDF Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default VideoResume;