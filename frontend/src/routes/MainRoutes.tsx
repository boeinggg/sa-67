import { lazy } from "react";

import React from "react";

import { RouteObject } from "react-router-dom";
import Loadable from "../components/third-party/Loadable";
import MinimalLayout from "../layout/MinimallLayout";




const MainPages = Loadable(lazy(() => import("../pages/authentication/Login")));

const Registerages = Loadable(lazy(() => import("../pages/authentication/Register")));

const MainRoutes = (): RouteObject => {
    return {
        path: "/",

        element: <MinimalLayout />,

        children: [
            {
                path: "/",

                element: <MainPages />,
            },

            {
                path: "/signup",

                element: <Registerages />,
            },

            {
                path: "*",

                element: <MainPages />,
            },
        ],
    };
};

export default MainRoutes;
