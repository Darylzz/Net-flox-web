import {createBrowserRouter, RouterProvider} from "react-router-dom"
import Home from "../layout/Home/Home"
import SignIn from "../layout/Sign in/SignIn"

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/login",
        element: <SignIn />
    }
])

export default function Router() {
    return <RouterProvider router={router} />
}