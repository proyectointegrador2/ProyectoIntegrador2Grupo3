
import React, { createContext, useContext, useEffect, useState } from 'react'

const AuthenticationContext = createContext();
export const useAuthentication = () => useContext(AuthenticationContext)

export const AuthenticationProvider = ({children}) => {
    const [isLoggedIn, setIsLoggedIn] = useState(null)
    const [role, setRole] = useState(null)

    const checkAuth = async () => {
        let error = false;
        try{
            const token = localStorage.getItem("token")
            if(token){
                const response = await fetch("api/user/verify-token", {
                    headers: {"Content-Type": "application/json", "Authorization": `Bearer ${token}`},
                })

                if(response.ok){
                    const data = await response.json()
                    if(data.success) {
                        setIsLoggedIn(true)
                        setRole(data.dataSession.role)
                    }else{
                        error = true  
                    }
                }
                else{
                    error = true
                }
            }else{
                error = true
            }

        } catch(err){
            error = true
        }

        if(error){
            setIsLoggedIn(false)
            setRole(null)
        }
    }

    useEffect(() => {
        checkAuth()
    },[])

    const handleLogout = () => {
        localStorage.removeItem("token")
        setIsLoggedIn(false)
        setRole(null)
    }

    return (
        <AuthenticationContext.Provider value={{checkAuth, handleLogout, isLoggedIn, role}}>
            {children}
        </AuthenticationContext.Provider>
    )
}

export default AuthenticationContext