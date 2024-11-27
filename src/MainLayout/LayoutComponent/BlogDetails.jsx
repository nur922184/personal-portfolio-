import React from "react";
import { useParams } from "react-router-dom";

const BlogDetails = () => {
  const { id } = useParams();

  const details = {
    1: (
      <div>
        <h2 className="text-2xl font-bold mb-4">
          Why Do I Apply to Hundreds of Jobs but Receive No Responses?
        </h2>
        <p className="text-gray-300 mb-4">The answer is that ATS often rejects your resume.</p>
        <p className="text-gray-300 mb-4">
          In today's competitive job market, many companies use Applicant Tracking Systems (ATS) to
          streamline their hiring processes. This software is designed to filter out resumes from
          hundreds or thousands, selecting only those from relevant and qualified candidates. If
          your resume lacks the right keywords or formatting, it may never reach an HR
          representative. Many people apply for hundreds of jobs but receive no responses, leading
          to frustration. According to studies, it's estimated that around 70% of resumes are never
          seen by human eyes because they fail to pass through these automated filters.
        </p>
        <h3 className="text-lg font-bold mb-2">📌 How Does ATS Work?</h3>
        <p className="text-gray-300 mb-4">
          ATS has its own algorithms. These algorithms scan resumes and filter them based on
          specific keywords, experience, skills, and other qualifications. HR sets certain criteria
          for a specific position, and ATS sorts resumes that match those criteria.
        </p>
        <h3 className="text-lg font-bold mb-2">📌 Tips for Creating ATS-Friendly Resumes:</h3>
        <ul className="list-disc ml-6 text-gray-300 space-y-2">
          <li>👉 Include Specific Keywords from the Job Description</li>
          <li>👉 Use Simple Formatting</li>
          <li>👉 Submit in .docx or .pdf Format</li>
          <li>👉 Customize Your Resume for Each Job Application</li>
          <li>👉 Use Short, Specific Sentences and Bullet Points</li>
          <li>👉 Keep Your LinkedIn Profile Updated</li>
          <li>👉 Proofread Your Resume for Spelling and Grammatical Errors</li>
          <li>👉 Use Clear Section Headings</li>
        </ul>
        <p className="text-gray-400 mt-4">
          The article has become a bit lengthy. However, I hope it helps those who read through it.
        </p>
      </div>
    ),
    2: (
      <div>
        <h2 className="text-2xl font-bold mb-4">About me</h2>
        <p className="text-gray-300">This section contains information about the author.</p>
      </div>
    ),
    3: (
      <div>
        <h2 className="text-2xl font-bold mb-4">The Importance of Networking for Career Growth</h2>
        <p className="text-gray-300">Networking helps you expand your professional circle.</p>
      </div>
    ),
    4: (
      <div>
        <h2 className="text-2xl font-bold mb-4">
          Unlocking the Power of Next.js for Modern Web Development
        </h2>
        <p className="text-gray-300">Next.js is a popular framework for building web applications.</p>
      </div>
    ),
  };

  return details[id] || <p className="text-gray-400">Post not found!</p>;
};

export default BlogDetails;
