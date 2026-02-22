import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from './assets/Home.jsx'
import Counter from './assets/counter.jsx'
import './index.css'
import App from './App.jsx'
import Post from './assets/post.jsx'
import {createBrowserRouter,RouterProvider}from 'react-router-dom'
import Stopwatch from './assets/Stopwatch.jsx'
const router=createBrowserRouter([
  {
    path:'/',
    element:<Home/>
  }
  ,
  {
    path:'/App',
    element:<App/>
  },
  {
    path:'/counter',
    element:<Counter/>
  }
  ,{
    path:'/stop',
    element:<Stopwatch/>
  },
  {
    path:"/post/:is"
    ,element:<Post/>
  }
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
