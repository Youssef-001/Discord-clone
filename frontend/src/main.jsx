  import { StrictMode } from 'react'
  import { createRoot } from 'react-dom/client'
  import './index.css'
  import App from './App.jsx'
  import Signup from './components/Signup.jsx'
  import { createBrowserRouter, RouterProvider } from "react-router-dom";
  import Login from './components/Login.jsx';
import DiscoverLayout from './components/DiscoverLayout.jsx'
  import { AppProvider } from "./components/Context.jsx"; // 
  import DmLayout from './components/DmLayout.jsx'

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
      path: 'discover',
      element: <DiscoverLayout/>
    },
    {
      path: 'server/:serverId/channel/:channelId',
      element: <ServerLayout/>
    },

    {
      path : 'dm/:user1/:user2',
      element : <DmLayout></DmLayout>
    }


  ])

  createRoot(document.getElementById('root')).render(
    <AppProvider>
    <RouterProvider router={router} />
  </AppProvider>
  )
