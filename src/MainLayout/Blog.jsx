import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { animateScroll as scroller } from "react-scroll";
import ThankYou from "../Component/ThankYou";

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
    <div> 
    <div className="px-6 py-24 md:mb-7 w-11/12 mx-auto">
      <h1 className="text-3xl font-bold mb-8">
        Insights on Web Development and Technology
      </h1>
      <ul className="space-y-6">
        {posts.map((post) => (
          <div key={post.id}>
            <li className="group hover:shadow-2xl hover:text-pink-500 transition-all duration-300 ease-in-out pl-4 hover:cursor-pointer">
              <NavLink
                to={`details/${post.id}`}
                className={({ isActive }) =>
                  `text-lg font-semibold ${isActive
                    ? "text-pink-500 underline"
                    : "hover:text-pink-500"
                  }`
                }
                onClick={handleScrollToDetails}
              >
                <span className="bg-left-bottom bg-gradient-to-r from-pink-500 to-pink-500 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                  {post.title}
                </span>
                <span className="dark:text-gray-400 dark:hover:text-teal-400 text-sm block mt-1">
                  {post.date}
                </span>
              </NavLink>
            </li>
          </div>
        ))}
      </ul>

      {/* Outlet for rendering BlogDetails */}
      <div className="mt-12 border-t-2 border-gray-600 pt-6" id="details-section">
        <Outlet />
      </div>
    </div>
    <div className="mt-10 md:w-full">
    <ThankYou></ThankYou>
  </div>

  </div>
  );
};

export default Blog;
