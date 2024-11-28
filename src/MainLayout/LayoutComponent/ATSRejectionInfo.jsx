import React from "react";
import { FaInfoCircle, FaClipboardList, FaCheckCircle } from "react-icons/fa";

const ATSRejectionInfo = () => {
  return (
    <section className="py-8 px-4 text-slate-100">
      <h2 className="text-3xl font-bold text-center text-gray-200 mb-6">
        Why Do I Apply to Hundreds of Jobs but Receive No Responses?
      </h2>
      <div className="max-w-4xl mx-auto p-6 rounded-lg shadow-md">
        <p className="text-gray-200 text-lg leading-relaxed mb-6">
          In today's competitive job market, many companies use Applicant
          Tracking Systems (ATS) to streamline their hiring processes. This
          software filters out resumes, selecting only those from relevant and
          qualified candidates. If your resume lacks the right keywords or
          formatting, it may never reach an HR representative. Studies suggest
          that around <strong>70% of resumes</strong> fail to pass through these
          automated filters.
        </p>

        <div className=" p-4 rounded-lg mb-6">
          <h3 className="text-2xl font-semibold flex items-center text-teal-600 mb-3">
            <FaInfoCircle className="mr-2" /> How Does ATS Work?
          </h3>
          <p className="text-gray-200">
            ATS uses algorithms to scan resumes and filter them based on
            specific keywords, experience, skills, and other qualifications. HR
            sets certain criteria for a job position, and ATS sorts resumes
            that meet those criteria.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-semibold flex items-center text-teal-600 mb-4">
            <FaClipboardList className="mr-2 " /> Tips for Creating ATS-Friendly
            Resumes:
          </h3>
          <ul className="space-y-3  hover:text-white transition">
            {[
              "Include Specific Keywords from the Job Description",
              "Use Simple Formatting",
              "Submit in .docx or .pdf Format",
              "Customize Your Resume for Each Job Application",
              "Use Short, Specific Sentences and Bullet Points",
              "Keep Your LinkedIn Profile Updated",
              "Proofread Your Resume for Spelling and Grammatical Errors",
              "Use Clear Section Headings",
            ].map((tip, index) => (
              <li
                key={index}
                className="flex items-center text-gray-400 text-sm p-3 rounded shadow-sm hover:bg-teal-400 hover:text-white transition"
              >
                <FaCheckCircle className="text-teal-600 mr-3 hover:text-white transition" /> {tip}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ATSRejectionInfo;
