import { createBrowserRouter } from "react-router-dom";
import MainHomeLayout from "../MainLayout/MainHomeLayout";

import ErrorPage from "../Pages/ErrorPage";
import About from "../MainLayout/About";
import Blog from "../MainLayout/Blog";
import Work from "../MainLayout/Work";
import Home from "../MainLayout/Home";


const Router = createBrowserRouter([
    {
        path: "/",
        element: <MainHomeLayout></MainHomeLayout>,
        children:[
            {
                path: "/",
                element: <Home></Home>,
            },
            {
                path: "/about",
                element:<About></About> ,
            },
            {
                path: "/blog",
                element: <Blog></Blog>,
            },
            {
                path: "/work",
                element: <Work></Work>,
            },
            // {
            //     path: "/resume",
            //     element: <MainHomeLayout></MainHomeLayout>,
            // },
        ]
    },
    {
        path: "*",
        element: <ErrorPage></ErrorPage>,
    },

]);

export default Router;