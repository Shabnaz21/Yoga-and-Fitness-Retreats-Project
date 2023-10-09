import { useContext } from "react";
import { AuthContext } from "../AuthProvide/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from 'prop-types';

const PrivateRoutes = ({ children }) => {
    
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    // loading
    if (loading) {
        return <span className="loading loading-dots text-center loading-lg"></span>
    }
    // user
    if (user) {
        return children;
    }
    return <Navigate state={location.pathname} to='/login'></Navigate>
};

PrivateRoutes.propTypes = {
    children: PropTypes.object
}
export default PrivateRoutes;