import { Outlet } from "react-router-dom";
import Navbar from "../shared/Navbar";

const Root = () => {
    return (
        <div className="font-Montserrat container">
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;