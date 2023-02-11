import {createBrowserRouter, RouterProvider} from "react-router-dom"
import Home from "../layout/Home/Home"
import Register from "../layout/Register/Register"
import SignIn from "../layout/Sign in/SignIn"
import RedirectIfAuthenticate from "../auth/RedirectIfAuthenticate"
import Profile from "../layout/Profile/Profile"
import Admin from "../layout/Admin/Admin"
import ProtectedRoute from "../auth/ProtectedRoute"
import UIProfile from "../layout/UIProfile/UIProfile"
// import useAuth from "../hook/useAuth"

// const {authUser} = useAuth()
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
    },
    {
        path: "/admin",
        element: <Admin />
        // authUser?.role === "admin" (
        //     <Admin />
        // )
    }

])
export default function Router() {
    return <RouterProvider router={router} />
}


// const Router = () => {
    
//     const {authUser} = useContext(AuthContext)
//     const router = createBrowserRouter([
//         {
//             path: "/",
//             element: <Home />
//         },
//         {
//             path: "/register",
//             element: <Register />
//         },
//         {
//             path: "/login",
//             element: (
//                 <RedirectIfAuthenticate>
//                     <SignIn />
//                 </RedirectIfAuthenticate>
//             )
//         },
//         {
//             path: "/profile",
//             element: (
//                 <ProtectedRoute>
//                     <Profile />
//                 </ProtectedRoute>
//             ),
//         },
//         {
//             path: "/profile/:profileId",
//             element: (
//                 <ProtectedRoute>
//                     <UIProfile />
//                 </ProtectedRoute>
//             )
//         },
//         {
//             path: "/admin",
//             element: (
//                 <ProtectedRoute>
//                     {authUser && authUser.role === "user" && <Admin />}
//                 </ProtectedRoute>
//             )
//         }
    
//     ])
//     return <RouterProvider router={router} />
// }
// export default Router