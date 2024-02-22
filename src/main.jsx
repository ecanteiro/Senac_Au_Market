import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bulma/css/bulma.css'
import './index.css'
import './js/main.js'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Menu from "./components/Menu.jsx";
import Login from "./screens/Login.jsx";
import SignUp from "./screens/SignUp.jsx";
import AboutYou from "./screens/AboutYou.jsx";
import Address from "./screens/Address.jsx";
import Cadastropet from './screens/Cadastropet';

const appRoutes = [
  {
    path: "/",
    element: <Login/>
  },
  {
    path: "/sign-up",
    element: <SignUp/>
  },
  {
    path: "/about-you",
    element: <AboutYou/>
  },
  {
    path: "/address",
    element: <Address/>
  },
  {
    path: "/Cadastropet",
    element: <Cadastropet/>
  }
];

const router = createBrowserRouter(appRoutes);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <>
      <Menu/>
      <RouterProvider router={router}/>
    </>
  </React.StrictMode>
);
