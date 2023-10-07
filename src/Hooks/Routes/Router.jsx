import { createBrowserRouter } from "react-router-dom";
import Root from "../../components/Layout/Root";
import Home from "../../pages/Home/Home";
import Error from "../../pages/ErrorPage/Error";



const routes = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement: <Error></Error>,
        children: [
            {
                path: '/',
                element:<Home></Home>,
            }
        ]
    }
])
export default routes;