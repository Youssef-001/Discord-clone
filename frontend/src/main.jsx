import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Signup from './components/Signup.jsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from './components/Login.jsx';

const router = createBrowserRouter([


  {
    path: '/',
    element: <App/>,
  },

  {
    path: 'signup',
    element: <Signup/>
  },

  {
    path: 'login',
    element: <Login/>
  }


])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
