import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import './index.css'
import { Inicio } from './inicio';
import { CartPage } from './abas/cart';
import { UserLogin } from './abas/usuario/user';
import { SignIn } from './abas/usuario/signin';
import { Camisetas } from './abas/itens/camisetas';
import { Moletons } from './abas/itens/moletons';
import { Calcas } from './abas/itens/calcas';
import { Tenis } from './abas/itens/tenis';
import { AdmPage } from './abas/admPage';
import { PagLogado } from './abas/usuario/pagLogado';

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
    element: <UserLogin />
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
  {
    path: "/adm",
    element: <AdmPage />
  },
  {
    path: "/pagLogado",
    element: <PagLogado />
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
