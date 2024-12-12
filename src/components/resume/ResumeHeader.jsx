import React from 'react';
import PropTypes from 'prop-types';

const ResumeHeader = ({ activeTab, setActiveTab }) => {
  const tabs = ['experience', 'education', 'certifications', 'skills'];

  return (
    <div className="text-center mb-12">
      <h2 className="text-3xl font-bold text-white mb-4">My Resume</h2>
      <p className="text-lg text-gray-300 mb-8">Professional Journey and Achievements</p>
      
      <div className="flex flex-wrap justify-center gap-4">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-6 py-3 rounded-lg font-medium transition-all transform hover:scale-105 ${
              activeTab === tab
                ? 'bg-indigo-600 text-white shadow-lg'
                : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
            }`}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>
    </div>
  );
};

ResumeHeader.propTypes = {
  activeTab: PropTypes.string.isRequired,
  setActiveTab: PropTypes.func.isRequired,
};

export default ResumeHeader;