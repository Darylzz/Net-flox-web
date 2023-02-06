import * as authApi from "../api/auth-api"
import jwtDecode from "jwt-decode"
import { createContext, useEffect, useState } from "react"
import { getAccessToken, removeAccessToken, setAccessToken } from "../util/local-storage"

export const AuthContext = createContext()

export default function AuthContextProvider({ children }) {
    const [authenticatedUser,setAuthenticatedUser] = useState(
        getAccessToken() ? true : null
    )
    // useEffect(() => {
    //     const fetchUser = async() => {
    //         try{
    //             const res = await authApi.getMe()
    //             setAuthenticatedUser(res.data.user)
    //         }catch(err) {
    //             removeAccessToken()
    //         }
    //     }
    //     if (getAccessToken()) {
    //         fetchUser()
    //     }
    // },[])
    const login = async (email,password) => {
        const res = await authApi.login({email,password})
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

