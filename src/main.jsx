import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Menu from "./components/Menu.jsx";
import {
    createBrowserRouter,
    RouterProvider,
} from 'react-router-dom'
import Login from "./screens/Login.jsx";
import 'bulma/css/bulma.css'
import SignUp from "./screens/SignUp.jsx";
import AboutYou from "./screens/AboutYou.jsx";
import Address from "./screens/Address.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Login />
    },
    {
        path: "/sign-up",
        element: <SignUp />
    },
    {
        path: "/about-you",
        element: <AboutYou />
    },
    {
        path: "/address",
        element: <Address />
    }
])

ReactDOM.createRoot(document.getElementById('root')).render(
<React.StrictMode>
    <>
        <Menu></Menu>
        <RouterProvider router={router}/>
    </>
</React.StrictMode>,
)
