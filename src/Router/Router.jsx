import { createBrowserRouter } from "react-router-dom";
import MainHomeLayout from "../MainLayout/MainHomeLayout";

import ErrorPage from "../Pages/ErrorPage";
import About from "../MainLayout/About";
import Blog from "../MainLayout/Blog";
import Work from "../MainLayout/Work";
import Home from "../MainLayout/Home";
import BlogDetails from "../MainLayout/LayoutComponent/BlogDetails";
import Resume from "../MainLayout/Resume";



const Router = createBrowserRouter([
    {
        path: "/",
        element: <MainHomeLayout></MainHomeLayout>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },
            {
                path: "/about",
                element: <About></About>,
            },
            {
                path: "/blog",
                element: <Blog></Blog>,
                children: [
                    {
                        path: "/blog/details/:id",
                        element: <BlogDetails></BlogDetails>,
                    },
                ]
            },
            {
                path: "/work",
                element: <Work></Work>,
            },
            {
                path: "/resume",
                element: <Resume></Resume>,
            },
        ]
    },
    {
        path: "*",
        element: <ErrorPage></ErrorPage>,
    },

]);

export default Router;