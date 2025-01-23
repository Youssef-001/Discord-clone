  import { StrictMode } from 'react'
  import { createRoot } from 'react-dom/client'
  import './index.css'
  import App from './App.jsx'
  import Signup from './components/Signup.jsx'
  import { createBrowserRouter, RouterProvider } from "react-router-dom";
  import Login from './components/Login.jsx';

  import { AppProvider } from "./components/Context.jsx"; // 

  import ServerLayout from './components/ServerLayout.jsx'

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
    },

    {
      path: 'server/:serverId/channel/:channelId',
      element: <ServerLayout/>
    }


  ])

  createRoot(document.getElementById('root')).render(
    <AppProvider>
    <RouterProvider router={router} />
  </AppProvider>
  )
