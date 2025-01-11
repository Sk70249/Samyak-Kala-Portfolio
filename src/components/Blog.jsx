import React from "react";
import { ArrowRight } from "lucide-react";

const Blog = () => {
  const posts = [
    {
      title: "Traffic Signs Recognition: CNN",
      excerpt:
        "Exploring upcoming trends and technologies that will shape the future of web development.",
      image:
        "https://miro.medium.com/v2/resize:fit:1400/format:webp/1*7XdsUAH4aCs_xiF6NEXLsA.png",
      date: "Mar 15, 2024",
      readTime: "5 min read",
      link: "https://medium.com/swlh/traffic-signs-recognition-cnn-ebaa0d18f6ad",
    },
    {
      title:
        "Language Models are Unsupervised Multitask Learners React Performance",
      excerpt:
        "An insight on research paper “Language Models are Unsupervised Multitask Learners” by Alec Radford, Jeffrey Wu, Rewon Child, David Luan, Dario Amodei, and Ilya Sutskever from OpenAI introduces groundbreaking insights into the capabilities of language models, specifically GPT-2.",
      image:
        "https://miro.medium.com/v2/resize:fit:1400/format:webp/1*YpanoKK0olFZxfLMby6kaA.jpeg",
      date: "Mar 10, 2024",
      readTime: "7 min read",
      link: "https://medium.com/analytics-vidhya/language-models-are-unsupervised-multitask-learners-e82c5b671544",
    },
    {
      title: "Non-Linear Regression Analysis",
      excerpt:
        "Essential design principles every developer should know for better user experience.",
      image:
        "https://miro.medium.com/v2/resize:fit:2000/format:webp/1*hccTducJo17wcYBGazQwag.jpeg",
      date: "Mar 5, 2024",
      readTime: "6 min read",
      link: "https://medium.com/analytics-vidhya/non-linear-regression-analysis-e150447ac1a3",
    },
  ];

  return (
    <section id="blog" className="py-24 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            Latest Blog Posts
          </h2>
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
                  className="inline-flex items-center text-indigo-400 hover:text-indigo-300"
                >
                  Read More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://medium.com/@samyakkala128"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 transition-colors"
          >
            View All Posts
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Blog;
