import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

//style
import './index.css'

//component
// import HomeDesktop from './HomeDesktop.jsx'
// import Projects from './projects';
// import App from './App.jsx'
// import Window from './components/window.jsx';
import Home from './pages/Home.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  // {
  //   path: '/projects',
  //   element: <Projects />
  // },
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}>
    <Home />
  </RouterProvider>
)
