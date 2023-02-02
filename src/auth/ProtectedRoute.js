import { Navigate } from "react-router-dom";
import useAuth from "../hook/useAuth";

export default function ProtectedRoute({children}) {
    const { authenticatedUser } = useAuth()
    console.log(authenticatedUser);
    if (!authenticatedUser) {
        return <Navigate to={"/"} />
    }
    return children
}