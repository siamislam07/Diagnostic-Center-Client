import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../Hooks/useAdmin";
import useAuth from "../Hooks/useAuth";
import { Typography } from "@mui/material";
import { toast } from "react-toastify";


const AdminRoute = ({children}) => {
    const {user, isItLoading} = useAuth()
    const [ isAdmin, isAdminLoading] = useAdmin()
    const location = useLocation()

    if (isItLoading || isAdminLoading) {
        return <Typography>Please Wait</Typography>
    }

    if (user && isAdmin) {
        return children
    }

    return  <Navigate state={location.pathname} to='/'> {toast.error("Admins only! Redirecting home. No VIP pass, no entry. 🏠😄 ")}</Navigate>
};

export default AdminRoute;