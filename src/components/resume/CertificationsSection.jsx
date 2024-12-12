import React from 'react';
import { Award } from 'lucide-react';

const CertificationsSection = () => {
  const certifications = [
    {
      name: 'Salesforce Platform Developer II',
      issuer: 'Salesforce',
      date: 'Jan 2023',
      credentialId: 'SF-PDev2-123'
    },
    {
      name: 'Salesforce Platform Developer I',
      issuer: 'Salesforce',
      date: 'Mar 2022',
      credentialId: 'SF-PDev1-456'
    },
    {
      name: 'Salesforce Administrator',
      issuer: 'Salesforce',
      date: 'Jun 2021',
      credentialId: 'SF-Admin-789'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {certifications.map((cert, index) => (
        <div 
          key={index} 
          className="bg-gray-800 rounded-lg p-6 hover:shadow-xl transition-all transform hover:scale-[1.02]"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="p-2 bg-indigo-600/20 rounded-lg">
              <Award className="h-6 w-6 text-indigo-400" />
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-bold text-white">{cert.name}</h3>
              <p className="text-indigo-400">{cert.issuer}</p>
            </div>
          </div>
          <div className="ml-12">
            <p className="text-gray-400 text-sm">{cert.date}</p>
            <p className="text-gray-500 text-sm mt-1">ID: {cert.credentialId}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CertificationsSection;