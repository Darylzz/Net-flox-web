import { Navigate } from "react-router-dom"
import useAuth from "../hook/useAuth"

export default function ProtectedAdminRoute( { children }) {
    const { authenticatedUser } = useAuth()
    if (authenticatedUser?.role !== "admin") {
        return <Navigate to={"/login"} />
    }
    return children
}