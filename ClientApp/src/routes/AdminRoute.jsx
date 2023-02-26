import { Navigate } from 'react-router-dom'
import { useAuthentication } from '../components/Context/AuthenticationContext'

export default function AdminRoute({  children }) {
  const { isLoggedIn, role } = useAuthentication()
  
  if(isLoggedIn && role !== "admin"){
    return <Navigate to="/" replace />
  }
  
  return children
}