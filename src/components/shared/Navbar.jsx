import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
    const menus = <>
        <li><NavLink to='/'>Home</NavLink> </li>
        <li><NavLink to='/services'>Services</NavLink> </li>
        <li><NavLink to='/packages'>Pricing & Packages</NavLink> </li>
        <li><NavLink to='/exclusive-offer'>Exclusive offer</NavLink> </li>
        <li><NavLink to='/workshops'>Workshops</NavLink> </li>
        <li><NavLink to='/register'>Register</NavLink> </li>
    </>
    return (
        <div>
            <div className="navbar bg-base-100 container mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {menus}
                        </ul>
                    </div>
                    <Link to='/'><h3 className="text-3xl font-medium">ZenFitEscapes</h3></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                       {menus}
                    </ul>
                </div>
                <div className="navbar-end">
                    <Link to='/login' className="btn bg-[#ffcf3c] normal-case">Login</Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;