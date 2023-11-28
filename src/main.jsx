import React from 'react'
import ReactDOM from 'react-dom/client'



import {

  RouterProvider,
} from "react-router-dom";
import { Router } from './Routes/router';
import "react-toastify/dist/ReactToastify.css"
import AuthProvider from './providers/AuthProvider';
import { ToastContainer } from 'react-toastify';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <QueryClientProvider client={queryClient}>
      <ToastContainer />

        <RouterProvider router={Router} />
      
    </QueryClientProvider>
        

    </AuthProvider>
  </React.StrictMode>,
)
