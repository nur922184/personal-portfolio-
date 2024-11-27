import React from "react";
import { Link, Outlet } from "react-router-dom";
import { animateScroll as scroll, scroller } from "react-scroll";

const Blog = () => {
  const posts = [
    {
      id: 1,
      title: "Why Do I Apply to Hundreds of Jobs but Receive No Responses?",
      date: "November 8, 2024",
    },
    {
      id: 2,
      title: "About me",
      date: "November 6, 2024",
    },
    {
      id: 3,
      title: "The Importance of Networking for Career Growth",
      date: "October 15, 2024",
    },
    {
      id: 4,
      title: "Unlocking the Power of Next.js for Modern Web Development",
      date: "April 20, 2024",
    },
  ];

  const handleScrollToDetails = () => {
    scroller.scrollTo("details-section", {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  };
  return (
    <div className="px-6 py-24 md:mb-7">
      <h1 className="text-3xl font-bold mb-8">
        Insights on Web Development and Technology
      </h1>
      <ul className="space-y-6">
        {posts.map((post) => (
          <li key={post.id} className="border-l-2 border-gray-600 pl-4 hover:cursor-pointer hover:ml-5">
            <Link
              to={`details/${post.id}`}
              className="text-lg font-semibold"
              onClick={handleScrollToDetails}
            >
              {post.title}
            <span className="text-gray-400 text-sm block mt-1">
              {post.date}
            </span>
            </Link>
          </li>
        ))}
      </ul>

      {/* Outlet for rendering BlogDetails */}
      <div className="mt-12 border-t-2 border-gray-600 pt-6" id="details-section">
        <Outlet />
      </div>
    </div>
  );
};

export default Blog;
