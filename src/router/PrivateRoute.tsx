import { useContext, useEffect } from "react"
import { AuthContext } from "../auth";
import { Navigate, useLocation } from "react-router-dom";

export const PrivateRoute = ({children}: any) => {

    const { logged } = useContext(AuthContext);
    const { pathname, search } = useLocation();

    useEffect(() => {
        const lastpath = `${pathname}${search}`;
        localStorage.setItem('last_path', lastpath);
        console.log('re-render');
    }, [pathname, search])
    
  return (logged)
    ? children
    : <Navigate to='/login' />
}
