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
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/90 backdrop-blur-md" 
      onClick={onClose}
    >
      <div 
        className="bg-slate-800 w-full max-w-4xl rounded-2xl overflow-hidden shadow-2xl border border-slate-700 flex flex-col max-h-[90vh]" 
        onClick={e => e.stopPropagation()}
      >
        <div className="p-4 flex justify-between items-center border-b border-slate-700">
          <h3 className="text-xl font-bold text-white">{project.title}</h3>
          <button 
            onClick={onClose} 
            className="p-2 hover:bg-slate-700 rounded-full text-slate-400 hover:text-white transition-colors"
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
                  className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-black/50 hover:bg-emerald-500 text-white rounded-full opacity-0 group-hover:opacity-100 transition-all"
                >
                  <ChevronLeft size={24} />
                </button>
                <button 
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-black/50 hover:bg-emerald-500 text-white rounded-full opacity-0 group-hover:opacity-100 transition-all"
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
                            ? 'bg-emerald-500 w-4' 
                            : isDot 
                              ? 'bg-purple-400/70 w-2' 
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
                  className="px-3 py-1 bg-slate-700/50 text-emerald-300 text-xs font-medium rounded-full border border-emerald-500/20"
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
                className="flex items-center gap-2 px-6 py-2.5 bg-emerald-500 hover:bg-emerald-600 text-white rounded-lg font-medium transition-colors"
              >
                <ExternalLink size={18} /> View Live
              </a>
              <a 
                href={project.repoLink}
                onClick={() => handleLinkClick('Source Code')}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-2.5 bg-slate-700 hover:bg-slate-600 text-white rounded-lg font-medium transition-colors"
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
    <section id="projects" className="py-24 bg-slate-900 relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-emerald-500 rounded-full"></div>
          <p className="text-slate-400 mt-4 text-center max-w-xl">
            A selection of projects demonstrating ML-driven modeling, system automation, and software engineering.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project) => (
            <div 
              key={project.id}
              onClick={() => handleProjectClick(project)}
              className="group bg-slate-800 rounded-xl overflow-hidden cursor-pointer border border-slate-700 hover:border-emerald-500/50 hover:shadow-2xl hover:shadow-emerald-500/10 transition-all duration-300 hover:-translate-y-2"
            >
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-transparent transition-colors z-10" />
                <img 
                  src={project.images[0]} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-400 text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex items-center text-emerald-500 text-sm font-medium">
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