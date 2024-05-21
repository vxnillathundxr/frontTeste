import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


// import { HandleClick} from './inicio.tsx'
import './index.css'
import { Inicio } from './inicio';

const router = createBrowserRouter([

  {
    path: "/",
    element: <Inicio />
  }

])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
