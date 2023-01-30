import {createBrowserRouter, RouterProvider} from "react-router-dom"
import Home from "../layout/Home/Home"
import Register from "../layout/Register/Register"
import SignIn from "../layout/Sign in/SignIn"

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/login",
        element: <SignIn />
    },
    {
        path: "/register",
        element: <Register />
    }
])

export default function Router() {
    return <RouterProvider router={router} />
}