import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import './index.css'
import { Inicio } from './inicio';
import { CartPage } from './cart';
import { UserPage } from './user';

const router = createBrowserRouter([

  {
    path: "/",
    element: <Inicio />
  },
  {
    path: "/cart",
    element: <CartPage />
  },
  {
    path: "/user",
    element: <UserPage />
  },

])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
