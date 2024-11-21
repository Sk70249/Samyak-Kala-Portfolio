import React from 'react';
import { Code, Palette, Globe, Zap, Database, Phone } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Code className="h-8 w-8" />,
      title: 'Web Development',
      description: 'Custom websites and web applications built with modern technologies',
      price: 'From $2,000',
    },
    {
      icon: <Palette className="h-8 w-8" />,
      title: 'UI/UX Design',
      description: 'User-centered design solutions that enhance user experience',
      price: 'From $1,500',
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: 'Digital Marketing',
      description: 'SEO optimization and social media marketing strategies',
      price: 'From $800/month',
    },
    {
      icon: <Database className="h-8 w-8" />,
      title: 'Database Design',
      description: 'Efficient and scalable database architecture solutions',
      price: 'From $1,200',
    },
    {
      icon: <Phone className="h-8 w-8" />,
      title: 'Mobile Development',
      description: 'Native and cross-platform mobile applications',
      price: 'From $3,000',
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: 'Performance Optimization',
      description: 'Speed up your existing applications and websites',
      price: 'From $500',
    },
  ];

  return (
    <section id="services" className="py-24 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Services</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Comprehensive solutions tailored to your needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-900 rounded-lg p-8 hover:shadow-lg transition-shadow"
            >
              <div className="text-indigo-400 mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {service.title}
              </h3>
              <p className="text-gray-300 mb-4">{service.description}</p>
              <p className="text-indigo-400 font-semibold">{service.price}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;