import {createBrowserRouter} from "react-router-dom"
import MainLayout from "./layout/MainLayout";
import Home from "./pages/home/Home";
import Cart from "./pages/cart/Cart";
import AuthLayout from "./layout/AuthLayout";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import SendCode from "./pages/sendCode/SendCode";
import ResetPassword from "./pages/forgetPassword/ResetPassword";
import Products from "./pages/products/Products";


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children:[
        {
            path:'home',
            element:<Home />
        },
        {
            path:'cart',
            element:<Cart />
        },
        {
            path:'products',
            element:<Products />
        }
    ],
  },
  {
    path:'/auth',
    element:<AuthLayout />,
    children:[
        {
            path:'login',
            element:<Login />
        },
        {
            path:'register',
            element:<Register />
        },
        {
            path:'sendCode',
            element:<SendCode />
        },
        {
            path:'resetPassword',
            element:<ResetPassword />
        },
    ],
  },
]);

export default router;