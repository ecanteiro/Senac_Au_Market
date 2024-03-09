import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bulma/css/bulma.css'
import './index.css'
import './js/main.js'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Menu from "./components/Menu.jsx";
import Login from "./screens/Login.jsx";
import SignUp from "./screens/SignUp.jsx";
import SignUpEmail from "./screens/SignUpEmail.jsx";
import AboutYou from "./screens/AboutYou.jsx";
import Address from "./screens/Address.jsx";
import PetProfile from './screens/PetProfile.jsx';
import SignUpTel from './screens/SignUpTel.jsx'
import PurchaseOrder from "./screens/PurchaseOrder.jsx";
import Payment from "./screens/Payment.jsx";
import ShoppingCart from "./screens/ShoppingCart.jsx";

// localStorage.clear();

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
    path: "/sign-up-email",
    element: <SignUpEmail />
  },
  {
    path: "/sign-up-tel",
    element: <SignUpTel />
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
    path: "/pet-profile",
    element: <PetProfile/>
  },
  {
    path: "/order",
    element: <PurchaseOrder />
  },
  {
    path: "/Payment",
    element: <Payment />
  },
  {
    path: "/shopping-cart",
    element: <ShoppingCart/>
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
