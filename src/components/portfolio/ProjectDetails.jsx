import React from 'react';
import { X, ExternalLink, Github } from 'lucide-react';

const ProjectDetails = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4">
      <div className="bg-gray-800 rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-2xl font-bold text-white">{project.title}</h3>
            <button
              onClick={onClose}
              className="p-1 hover:bg-gray-700 rounded-full transition-colors"
              aria-label="Close details"
            >
              <X className="w-6 h-6 text-gray-400" />
            </button>
          </div>
          
          <img
            src={project.image.full}
            alt={project.title}
            className="w-full rounded-lg mb-6"
            loading="lazy"
          />

          <p className="text-gray-300 mb-6">{project.description}</p>

          <div className="flex space-x-4">
            <a
              href={project.demoUrl}
              className="inline-flex items-center px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              View Demo
            </a>
            <a
              href={project.githubUrl}
              className="inline-flex items-center px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="w-4 h-4 mr-2" />
              View Source
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;