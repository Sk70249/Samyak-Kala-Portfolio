import React from 'react';
import { ArrowRight } from 'lucide-react';

const Blog = () => {
  const posts = [
    {
      title: 'The Future of Web Development',
      excerpt: 'Exploring upcoming trends and technologies that will shape the future of web development.',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80',
      date: 'Mar 15, 2024',
      readTime: '5 min read',
      link: 'https://github.com/Sk70249/Wind-Energy-Analysis-and-Forecast-using-Deep-Learning-LSTM'
    },
    {
      title: 'Mastering React Performance',
      excerpt: 'Tips and tricks to optimize your React applications for better performance.',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80',
      date: 'Mar 10, 2024',
      readTime: '7 min read',
      link: 'https://github.com/Sk70249/Wind-Energy-Analysis-and-Forecast-using-Deep-Learning-LSTM'
    },
    {
      title: 'UI/UX Design Principles',
      excerpt: 'Essential design principles every developer should know for better user experience.',
      image: 'https://images.unsplash.com/photo-1561736778-92e52a7769ef?auto=format&fit=crop&q=80',
      date: 'Mar 5, 2024',
      readTime: '6 min read',
      link: 'https://github.com/Sk70249/Wind-Energy-Analysis-and-Forecast-using-Deep-Learning-LSTM'
    },
  ];

  return (
    <section id="blog" className="py-24 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Latest Blog Posts</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Insights and articles about web development and design
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <article
              key={index}
              className="bg-gray-900 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
                loading="lazy"
              />
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-400 mb-4">
                  <span>{post.date}</span>
                  <span className="mx-2">•</span>
                  <span>{post.readTime}</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {post.title}
                </h3>
                <p className="text-gray-300 mb-4">{post.excerpt}</p>
                <a
                  href={post.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-indigo-400 hover:text-indigo-300 transition-colors group"
                >
                  Read More
                  <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default React.memo(Blog);