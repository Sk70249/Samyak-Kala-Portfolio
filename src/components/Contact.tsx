import React, { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Get in Touch</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Have a project in mind? Let's discuss how we can work together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div className="bg-gray-800 rounded-lg shadow-lg p-8">
              <h3 className="text-xl font-semibold text-white mb-6">
                Contact Information
              </h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Mail className="h-6 w-6 text-indigo-400 mt-1" />
                  <div>
                    <p className="font-medium text-white">Email</p>
                    <a
                      href="mailto:contact@example.com"
                      className="text-gray-300 hover:text-indigo-400"
                    >
                      samyakkala@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Phone className="h-6 w-6 text-indigo-400 mt-1" />
                  <div>
                    <p className="font-medium text-white">Phone</p>
                    <a
                      href="tel:+1234567890"
                      className="text-gray-300 hover:text-indigo-400"
                    >
                      +91 (XXX) 101-112
                    </a>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-indigo-400 mt-1" />
                  <div>
                    <p className="font-medium text-white">Location</p>
                    <p className="text-gray-300">
                      Indore, MP - 452001
                      <br />
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <form
              onSubmit={handleSubmit}
              className="bg-gray-800 rounded-lg shadow-lg p-8"
            >
              <div className="grid grid-cols-1 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-300 mb-1"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md focus:ring-indigo-500 focus:border-indigo-500 text-white"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-300 mb-1"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md focus:ring-indigo-500 focus:border-indigo-500 text-white"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-300 mb-1"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md focus:ring-indigo-500 focus:border-indigo-500 text-white"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-300 mb-1"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md focus:ring-indigo-500 focus:border-indigo-500 text-white"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 transition-colors"
                >
                  Send Message
                  <Send className="ml-2 h-5 w-5" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
