import { Navigate } from 'react-router-dom'
import { useAuthentication } from '../components/Context/AuthenticationContext'
import { useEffect } from 'react'

export default function PublicRoute({ children }) {
    const { isLoggedIn, checkAuth } = useAuthentication()

    useEffect(() => {
      checkAuth()
    },[])
    
    if(isLoggedIn === true){
      return <Navigate to="/" replace />
    }
    
    return children
  }