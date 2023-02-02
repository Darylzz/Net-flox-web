import { Navigate } from "react-router-dom";
import useAuth from "../hook/useAuth";

export default function RedirectIfAuthenticate({ children }) {
    const { authenticatedUser } = useAuth()
    console.log(authenticatedUser);
    if (authenticatedUser) {
        return <Navigate to={"/profile"} />
    }
    return children
}