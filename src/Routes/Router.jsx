
import {
    createBrowserRouter,

} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Error from "../pages/ErrorPage/Error";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import AllTests from "../pages/AllTests/AllTests";
import TestDetails from "../pages/TestDetails/TestDetails";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../Layout/Dashboard";
import UserHome from "../pages/Dashboard/UserHome/UserHome";
import Appointments from "../pages/Dashboard/Appointments/Appointments";
import TestResult from "../pages/Dashboard/Test Result/TestResult";
import AllUsers from "../pages/Dashboard/All users/AllUsers";
import AddTest from "../pages/Dashboard/AddTest/AddTest";

export const Router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <Error />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path:'all-tests',
                element:<AllTests></AllTests>
            },
            {
                path:'/details/:id',
                element:<PrivateRoute><TestDetails></TestDetails></PrivateRoute>
            }
        ]
    },

    {
        path:'/login',
        element:<Login></Login>
    },
    {
        path:'/register',
        element:<Register></Register>
    },

    {
        path:'dashboard',
        element:<PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        children:[
            {
                path:'user',
                element:<UserHome></UserHome>
            },
            {
                path:'appointments',
                element:<Appointments></Appointments>
            },
            {
                path:'testResult',
                element:<TestResult></TestResult>
            },

            //admin routes
            {
                path:'users',
                element:<AllUsers></AllUsers>
            },
            {
                path:'addTest',
                element:<AddTest></AddTest>
            }
        ]

    }
]);
