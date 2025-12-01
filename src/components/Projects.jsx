import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, X, Github, ExternalLink } from 'lucide-react';
import { PROJECTS } from '../data';
import { useAnalytics } from './GoogleAnalytics';

const ProjectModal = ({ project, onClose }) => {
  const [currentImgIndex, setCurrentImgIndex] = useState(0);
  const { trackEvent } = useAnalytics();

  if (!project) return null;

  const nextImage = (e) => {
    e.stopPropagation();
    setCurrentImgIndex((prev) => (prev + 1) % project.images.length);
  };

  const prevImage = (e) => {
    e.stopPropagation();
    setCurrentImgIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
  };

  const handleLinkClick = (linkType) => {
    trackEvent('project_link_click', {
      event_category: 'engagement',
      event_label: `${project.title} - ${linkType}`,
    });
  };

  const currentMedia = project.images[currentImgIndex];
  const isVideo = currentMedia.endsWith('.mp4') || currentMedia.endsWith('.webm') || currentMedia.endsWith('.mov');

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-xl" 
      onClick={onClose}
    >
      <div 
        className="bg-slate-800 w-full max-w-4xl rounded-2xl overflow-hidden shadow-2xl border border-cyan-700/50 flex flex-col max-h-[90vh]" 
        onClick={e => e.stopPropagation()}
      >
        <div className="p-4 flex justify-between items-center border-b border-slate-700">
          <h3 className="text-xl font-bold text-white">{project.title}</h3>
          <button 
            onClick={onClose} 
            className="p-2 hover:bg-cyan-900 rounded-full text-slate-400 hover:text-cyan-400 transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto">
          <div className="relative aspect-video bg-slate-900 group">
            {isVideo ? (
              <video
                key={currentMedia}
                controls
                autoPlay
                loop
                muted
                className="w-full h-full object-cover"
              >
                <source src={currentMedia} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ) : (
              <img 
                src={currentMedia} 
                alt={project.title} 
                className="w-full h-full object-cover transition-opacity duration-300"
              />
            )}
            
            {project.images.length > 1 && (
              <>
                <button 
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-black/60 hover:bg-cyan-500 text-white rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300"
                >
                  <ChevronLeft size={24} />
                </button>
                <button 
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-black/60 hover:bg-cyan-500 text-white rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300"
                >
                  <ChevronRight size={24} />
                </button>
                
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                  {project.images.map((media, idx) => {
                    const isDot = media.endsWith('.mp4') || media.endsWith('.webm') || media.endsWith('.mov');
                    return (
                      <div 
                        key={idx} 
                        className={`h-2 rounded-full transition-all ${
                          idx === currentImgIndex 
                            ? 'bg-cyan-500 w-4' 
                            : isDot 
                              ? 'bg-fuchsia-400/70 w-2' 
                              : 'bg-white/50 w-2'
                        }`}
                      />
                    );
                  })}
                </div>
              </>
            )}
          </div>

          <div className="p-6 md:p-8">
            <div className="flex flex-wrap gap-2 mb-6">
              {project.techStack.map((tech, idx) => (
                <span 
                  key={idx} 
                  className="px-3 py-1 bg-slate-700/50 text-cyan-300 text-xs font-medium rounded-full border border-cyan-500/20"
                >
                  {tech}
                </span>
              ))}
            </div>
            
            <p className="text-slate-300 mb-8 leading-relaxed text-lg">
              {project.description}
            </p>

            <div className="flex gap-4">
              <a 
                href={project.liveLink}
                onClick={() => handleLinkClick('Live Demo')}
                className="flex items-center gap-2 px-6 py-2.5 bg-cyan-500 hover:bg-cyan-600 text-white rounded-lg font-medium transition-colors shadow-lg shadow-cyan-500/20"
              >
                <ExternalLink size={18} /> View Live
              </a>
              <a 
                href={project.repoLink}
                onClick={() => handleLinkClick('Source Code')}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-2.5 bg-slate-700 hover:bg-slate-600 text-white rounded-lg font-medium transition-colors border border-slate-600"
              >
                <Github size={18} /> Source Code
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const { trackProjectView } = useAnalytics();

  const handleProjectClick = (project) => {
    trackProjectView(project.title);
    setSelectedProject(project);
  };

  return (
    <section id="projects" className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Geometric separator */}
      <div className="absolute top-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent"></div>
      
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 drop-shadow-md">Featured Projects</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-fuchsia-400 rounded-full"></div>
          <p className="text-slate-400 mt-4 text-center max-w-xl">
            A selection of projects demonstrating ML-driven modeling, system automation, and software engineering.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {PROJECTS.map((project) => (
            <div 
              key={project.id}
              onClick={() => handleProjectClick(project)}
              className="group bg-slate-800 rounded-xl overflow-hidden cursor-pointer border border-slate-700 shadow-xl shadow-black/40 hover:shadow-cyan-500/20 hover:border-cyan-500/50 transition-all duration-300 hover:-translate-y-2 relative isolate"
            >
              {/* Glow effect on hover */}
              <div 
                className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 via-cyan-500/0 to-fuchsia-500/0 group-hover:from-cyan-500/10 group-hover:via-transparent group-hover:to-fuchsia-500/10 transition-opacity duration-500 opacity-0 group-hover:opacity-100 pointer-events-none"
              ></div>

              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-slate-900/5 transition-colors z-10" />
                <img 
                  src={project.images[0]} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors drop-shadow-sm">
                  {project.title}
                </h3>
                <p className="text-slate-400 text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex items-center text-cyan-500 text-sm font-medium group-hover:text-fuchsia-400 transition-colors">
                  View Details <ChevronRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedProject && (
        <ProjectModal 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />
      )}
    </section>
  );
};

export default Projects;