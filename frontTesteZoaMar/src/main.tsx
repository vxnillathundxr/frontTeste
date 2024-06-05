import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import './index.css'
import { Inicio } from './inicio';
import { CartPage } from './abas/cart';
import { UserPage } from './abas/user';
import { SignIn } from './abas/signin';
import { Camisetas } from './abas/camisetas';
import { Moletons } from './abas/moletons';
import { Calcas } from './abas/calcas';
import { Tenis } from './abas/tenis';

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
  {
    path: "/signin",
    element: <SignIn />
  },
  {
    path: "/camisetas",
    element: <Camisetas />
  },
  {
    path: "/moletons",
    element: <Moletons />
  },
  {
    path: "/calcas",
    element: <Calcas />
  },
  {
    path: "/tenis",
    element: <Tenis />
  },

])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
