import { Navigate, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import useAuth from "../Hooks/useAuth";
import { Typography } from "@mui/material";

const PrivateRoute = ({children}) => {
    const {isItLoading, user} = useAuth()
    const location = useLocation()
    // console.log(location);
    if (isItLoading) {
        return <Typography>Please Wait</Typography>
    }

    if (user) {
        return children
    }

    return  <Navigate state={location.pathname} to='/login'> {toast.error("Oops! It seems my code is on a coffee break ☕. Please login first or register to wake it up!")}</Navigate>
};

export default PrivateRoute;