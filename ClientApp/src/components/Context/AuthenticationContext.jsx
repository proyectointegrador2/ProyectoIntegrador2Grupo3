
import React, { createContext, useContext, useEffect, useState } from 'react'

const AuthenticationContext = createContext();
export const useAuthentication = () => useContext(AuthenticationContext)

export const AuthenticationProvider = ({children}) => {
    const [isLoggedIn, setIsLoggedIn] = useState(null)

    const checkAuth = async () => {
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
                    }else{
                        setIsLoggedIn(false)    
                    }
                }
                else{
                    setIsLoggedIn(false)
                }
            }else{
                setIsLoggedIn(false)
            }

        } catch(error){
            setIsLoggedIn(false)
        }
    }

    useEffect(() => {
        checkAuth()
    },[])

    const handleLogout = () => {
        localStorage.removeItem("token")
        setIsLoggedIn(false)
    }

    return (
        <AuthenticationContext.Provider value={{checkAuth, handleLogout, isLoggedIn}}>
            {children}
        </AuthenticationContext.Provider>
    )
}

export default AuthenticationContext