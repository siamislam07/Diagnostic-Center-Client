import React from 'react'
import ReactDOM from 'react-dom/client'



import {

  RouterProvider,
} from "react-router-dom";
import { Router } from './Routes/router';
import "react-toastify/dist/ReactToastify.css"
import AuthProvider from './providers/AuthProvider';
import { ToastContainer } from 'react-toastify';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <ToastContainer />
      
      <RouterProvider router={Router} />
    </AuthProvider>
  </React.StrictMode>,
)
