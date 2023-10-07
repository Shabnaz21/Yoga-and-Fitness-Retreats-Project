import { createBrowserRouter } from "react-router-dom";
import Root from "../../components/Layout/Root";
import Home from "../../pages/Home/Home";
import Error from "../../pages/ErrorPage/Error";
import Register from "../../pages/auth/Register";
import Login from "../../pages/auth/Login";



const routes = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement: <Error></Error>,
        children: [
            {
                path: '/',
                element:<Home></Home>,
            }, {
                path: '/register',
                element:<Register></Register>
            }, {
                path: '/login',
                element:<Login></Login>
            }
        ]
    }
])
export default routes;