import {createBrowserRouter, RouterProvider} from "react-router-dom"
import Home from "../layout/Home/Home"
import Register from "../layout/Register/Register"
import SignIn from "../layout/Sign in/SignIn"
import RedirectIfAuthenticate from "../auth/RedirectIfAuthenticate"
import Profile from "../layout/Profile/Profile"
import ProtectedRoute from "../auth/ProtectedRoute"
import UIProfile from "../layout/UIProfile/UIProfile"
 
const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/register",
        element: <Register />
    },
    {
        path: "/login",
        element: (
            <RedirectIfAuthenticate>
                <SignIn />
            </RedirectIfAuthenticate>
        )
    },
    {
        path: "/profile",
        element: (
            <ProtectedRoute>
                <Profile />
            </ProtectedRoute>
        ),
    },
    {
        path: "/profile/:profileId",
        element: (
            <ProtectedRoute>
                <UIProfile />
            </ProtectedRoute>
        )
    }

])

export default function Router() {
    return <RouterProvider router={router} />
}