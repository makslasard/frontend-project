import {createBrowserRouter} from "react-router-dom";
import {App} from "@/App";
import {Suspense} from "react";
import {About} from "@/pages/about";
import {Shop} from "@/pages/shop";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: '/about',
                element: <Suspense fallback={'Loading...'}><About /></Suspense>
            },
            {
                path: '/shop',
                element: <Suspense fallback={'Loading...'}><Shop /></Suspense>
            }
        ]
    },
]);