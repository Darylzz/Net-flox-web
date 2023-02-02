import * as authApi from "../api/auth-api"
import jwtDecode from "jwt-decode"
import { createContext, useState } from "react"
import { getAccessToken, removeAccessToken, setAccessToken } from "../util/local-storage"

export const AuthContext = createContext()

export default function AuthContextProvider({ children }) {
    const [authenticatedUser,setAuthenticatedUser] = useState(
        getAccessToken() ? true : null
    )
    const login = async (email,password) => {
        const res = await authApi.login({email,password})
        console.log(res)
        setAccessToken(res.data.accessToken)
        setAuthenticatedUser(jwtDecode(res.data.accessToken))
    }
    const logout = () => {
        removeAccessToken()
        setAuthenticatedUser(null)
    }
    return (
        <AuthContext.Provider value={{authenticatedUser, login, logout}}>
            {children}
        </AuthContext.Provider>
    )
}

