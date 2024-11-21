import React, { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      title: 'E-commerce Platform',
      category: 'web',
      image: 'https://images.unsplash.com/photo-1661956602116-aa6865609028?auto=format&fit=crop&q=80',
      description: 'A modern e-commerce platform built with React and Node.js',
      demoUrl: '#',
      githubUrl: '#',
    },
    {
      title: 'Mobile Banking App',
      category: 'mobile',
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80',
      description: 'Secure and user-friendly mobile banking application',
      demoUrl: '#',
      githubUrl: '#',
    },
    {
      title: 'Portfolio Website',
      category: 'web',
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&q=80',
      description: 'Personal portfolio website with modern design',
      demoUrl: '#',
      githubUrl: '#',
    },
    {
      title: 'Task Management',
      category: 'web',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80',
      description: 'Collaborative task management platform',
      demoUrl: '#',
      githubUrl: '#',
    },
    {
      title: 'Social Media Dashboard',
      category: 'web',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80',
      description: 'Analytics dashboard for social media management',
      demoUrl: '#',
      githubUrl: '#',
    },
    {
      title: 'AI Image Generator',
      category: 'ai',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80',
      description: 'AI-powered image generation tool',
      demoUrl: '#',
      githubUrl: '#',
    },
  ];

  const filters = ['all', 'web', 'mobile', 'ai'];

  const filteredProjects = projects.filter(
    project => activeFilter === 'all' || project.category === activeFilter
  );

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
          {filters.map((filter) => (
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
            <div
              key={index}
              className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="relative group">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center space-x-4">
                  <a
                    href={project.demoUrl}
                    className="p-2 bg-gray-800 rounded-full hover:bg-indigo-600 text-white transition-colors"
                  >
                    <ExternalLink size={20} />
                  </a>
                  <a
                    href={project.githubUrl}
                    className="p-2 bg-gray-800 rounded-full hover:bg-indigo-600 text-white transition-colors"
                  >
                    <Github size={20} />
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;