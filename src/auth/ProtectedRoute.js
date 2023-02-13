import { Navigate } from "react-router-dom";
import useAuth from "../hook/useAuth";

export default function ProtectedRoute({children}) {
    const { authenticatedUser } = useAuth()
    if (!authenticatedUser) {
        return <Navigate to={"/"} />
    }
    else if (!authenticatedUser?.role === "admin") {
        return <Navigate to={"/"} />
    }
    return children
}

// import { Navigate } from "react-router-dom";
// import useAuth from "../hook/useAuth";

// export default function ProtectedRoute({ children }) {
//     const { authenticatedUser } = useAuth();
//     if (!authenticatedUser || authenticatedUser.role !== "admin") {
//         return <Navigate to={"/"} />;
//     }
//     return children;
// }
