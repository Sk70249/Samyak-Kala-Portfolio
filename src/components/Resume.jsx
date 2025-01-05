import React, { useState } from "react";
import { Download } from "lucide-react";
import ResumeHeader from "./resume/ResumeHeader";
import ExperienceSection from "./resume/ExperienceSection";
import EducationSection from "./resume/EducationSection";
import CertificationsSection from "./resume/CertificationsSection";
import SkillsSection from "./resume/SkillsSection";

const Resume = () => {
  const [activeTab, setActiveTab] = useState("experience");

  return (
    <section id="resume" className="py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ResumeHeader activeTab={activeTab} setActiveTab={setActiveTab} />

        <div className="mt-12">
          {activeTab === "experience" && <ExperienceSection />}
          {activeTab === "education" && <EducationSection />}
          {activeTab === "certifications" && <CertificationsSection />}
          {activeTab === "skills" && <SkillsSection />}
        </div>

        <div className="mt-12 text-center">
          <button className="inline-flex items-center px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-all transform hover:scale-105">
            <Download className="h-5 w-5 mr-2" />
            Download Full Resume
          </button>
        </div>
      </div>
    </section>
  );
};

export default Resume;
