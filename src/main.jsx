import React from 'react'
import {createRoot} from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout.jsx';
import AddContact from './pages/AddContact/AddContact.jsx';
import Dashboard from './pages/Dashboard/Dashboard.jsx';
import './App.css'


const router = createBrowserRouter([
  {
    path: "/",
    element: 
      <Layout />
    ,
    children: [
      {
        path: "dashboard",
        element: 
        <div>
          <Dashboard />
        </div>,
      },

      {
        path: "addContact",
        element: 
        <div>
          <AddContact />
        </div>,
      }
    ]
  },
]);

 createRoot(document.getElementById("root")).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
  
  )


