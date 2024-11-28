import React from "react";
import { useParams } from "react-router-dom";
import NetworkingBenefits from "../../Component/NetworkingBenefits";
import ATSRejectionInfo from "./ATSRejectionInfo";
import AboutMe from "../../Component/AboutMe";

const BlogDetails = () => {
  const { id } = useParams();

  const details = {
    1: (
     <ATSRejectionInfo></ATSRejectionInfo>
    ),
    2: (
      <div className="">
        <AboutMe></AboutMe>
      </div>
    ),
    3: (
      <div>
        <NetworkingBenefits></NetworkingBenefits>
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
