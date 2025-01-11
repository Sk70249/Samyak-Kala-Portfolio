import React, { useState, useCallback, lazy, Suspense } from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      title: 'E-commerce Platform',
      category: 'web',
      image: 'https://images.unsplash.com/photo-1661956602116-aa6865609028?auto=format&fit=crop&q=80&w=800',
      description: 'A modern e-commerce platform built with React and Node.js',
      demoUrl: '#',
      githubUrl: 'https://github.com/Sk70249'
    },
    {
      title: 'Mobile Banking App',
      category: 'mobile',
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800',
      description: 'Secure and user-friendly mobile banking application',
      demoUrl: '#',
      githubUrl: 'https://github.com/Sk70249'
    },
    {
      title: 'Portfolio Website',
      category: 'web',
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&q=80&w=800',
      description: 'Personal portfolio website with modern design',
      demoUrl: '#',
      githubUrl: 'https://github.com/Sk70249'
    }
  ];

  const filteredProjects = React.useMemo(() => 
    projects.filter(project => activeFilter === 'all' || project.category === activeFilter),
    [activeFilter]
  );

  const ProjectCard = useCallback(({ project }) => (
    <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
      <div className="relative group">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-48 object-cover"
          loading="lazy"
          width="800"
          height="400"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center space-x-4">
          <a
            href={project.demoUrl}
            className="p-2 bg-gray-800 rounded-full hover:bg-indigo-600 text-white transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ExternalLink className="w-5 h-5" />
          </a>
          <a
            href={project.githubUrl}
            className="p-2 bg-gray-800 rounded-full hover:bg-indigo-600 text-white transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github className="w-5 h-5" />
          </a>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-white mb-2">
          {project.title}
        </h3>
        <p className="text-gray-300">{project.description}</p>
        <div className="mt-4">
          <span className="inline-block px-3 py-1 text-sm font-semibold text-indigo-400 bg-gray-700 rounded-full">
            {project.category}
          </span>
        </div>
      </div>
    </div>
  ), []);

  return (
    <section id="portfolio" className="py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">My Portfolio</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Explore my latest projects and creative works
          </p>
        </div>

        <div className="flex justify-center space-x-4 mb-12">
          {['all', 'web', 'mobile', 'ai'].map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2 rounded-full capitalize ${
                activeFilter === filter
                  ? 'bg-indigo-600 text-white'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default React.memo(Portfolio);