import React from 'react'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from '../page/Home';
import Login from '../page/Login';
import Video from '../page/Video';
import Signup from '../page/Signup';
import LikedPage from '../page/LikedPage';


export default function Router() {
    const router = createBrowserRouter([
        {
          path: "/",
          element: <Home/>,
        },
        {
          path: '/Video/:id',
          element: <Video/>
        },
        {
          path:'/Login',
          element:<Login/>
        },
        {
          path:'/Signup',
          element:<Signup/>
        },
        {
          path:'/LikedPage',
          element:<LikedPage/>
        }
      ]);

  return (
    <RouterProvider router={router} />
  )
}