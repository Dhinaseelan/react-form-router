import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from './assets/Home.jsx'
import './index.css'
import App from './App.jsx'
import {createBrowserRouter,RouterProvider}from 'react-router-dom'
const router=createBrowserRouter([
  {
    path:'/',
    element:<Home/>
  }
  ,
  {
    path:'/App',
    element:<App/>
  }
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
