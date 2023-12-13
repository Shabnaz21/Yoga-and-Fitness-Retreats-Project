import { Link, NavLink } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { RiLogoutBoxLine } from "react-icons/ri";
import { ImProfile } from "react-icons/im";
import { BiStoreAlt } from "react-icons/bi";
import { AiOutlineProfile } from "react-icons/ai";
import useLogOut from "../../components/Hook/useLogOut";


const SideNavbar = () => {
    const logOut = useLogOut();

    return (
        <>
            <div className="relative lg:block navbar-menu">
                <nav
                    className="fixed top-0 transition-all lg:mt-0 
                    left-0  bottom-0 flex flex-col w-[280px] bg-gray-800 overflow-hidden z-50"
                    id="sidenav">
                    <div className="flex items-center w-full px-4 pt-4 pb-4 border-b border-gray-600
                     ">
                        <Link to='/'><h3 className="text-3xl text-white tracking-widest font-medium ">ZenFitEscapes</h3></Link>
                    </div>
                    <div className="pb-6 mt-4 overflow-x-hidden overflow-y-auto">
                        <ul className="mb-8 text-sm">
                            <li className="text-gray-300 text-xl m-2">
                                <NavLink to='/dashboard/user-profile'
                                    className={({ isActive }) =>
                                        isActive ? 'flex items-center px-6 text-[#5fd2e9] md:text-lg' : 'flex px-6 items-center md:text-lg'
                                    }
                                >
                                    <li className="mb-2 flex items-center gap-3">
                                        <ImProfile ></ImProfile>My Profile
                                    </li></NavLink>
                                <NavLink to='/dashboard/wishlist'
                                    className={({ isActive }) =>
                                        isActive ? 'flex items-center px-6 text-[#5fd2e9] md:text-lg' : 'flex px-6 items-center md:text-lg'
                                    }
                                >
                                    <li className="mb-2 flex items-center gap-3">
                                        <AiOutlineProfile />
                                       My Wishlist
                                    </li>
                                </NavLink>

                            </li>


                            {/* shared nav */}
                            <hr className='mx-5' />
                            <li className='space-y-3 mt-5'>
                                <NavLink to='/'
                                    className="flex items-center px-6 text-gray-300
                                     group hover:text-white ">
                                    <span className="inline-block mr-3">
                                        <FaHome className='text-xl' />
                                    </span>
                                    <span className='text-lg'>Home</span>
                                </NavLink>
                                <NavLink to='/services'
                                    className="flex items-center px-6 text-gray-300
                                     group hover:text-white ">
                                    <span className="inline-block mr-3">
                                        <BiStoreAlt className='text-xl' />
                                    </span>
                                    <span className='text-lg'>Services</span>
                                </NavLink>
                                <NavLink to='/packages'
                                    className="flex items-center px-6 text-gray-300
                                     group hover:text-white ">
                                    <span className="inline-block mr-3">
                                        <BiStoreAlt className='text-xl' />
                                    </span>
                                    <span className='text-lg'>Packages</span>
                                </NavLink>
                                <NavLink to='/offers'
                                    className="flex items-center px-6 text-gray-300
                                     group hover:text-white ">
                                    <span className="inline-block mr-3">
                                        <BiStoreAlt className='text-xl' />
                                    </span>
                                    <span className='text-lg'>Exclusive Offer</span>
                                </NavLink>
                                <div onClick={logOut}
                                    className="flex items-center px-6 text-gray-300
                                     group hover:text-white ">
                                    <span className="inline-block mr-3">
                                        <RiLogoutBoxLine className='text-xl' />
                                    </span>
                                    <span className='text-lg'>Sign Out</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </>
    );
};

export default SideNavbar;