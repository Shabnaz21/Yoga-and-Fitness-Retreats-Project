import { useContext } from "react";
import { Link, useLocation, useNavigate} from "react-router-dom";
import { AuthContext } from "../../Hooks/AuthProvide/AuthProvider";
import { ToastContainer, toast } from "react-toastify";

const Login = () => {
    const { signIn } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const handleLogin = event => {
        event.preventDefault();
        const form = new FormData(event.currentTarget);
        const email = form.get('email')
        const password = form.get('password')

        // signIn User
        signIn(email, password)
            .then(result => {
                console.log(result.user);
                toast.success('Congratulations, you are successfully logged in!');
                
                // navigate
                navigate(location?.state ? location.state : '/')
            })
            .catch(error => {
                console.log(error.message);

                if (error.code === 'auth/invalid-login-credentials') {
                    toast.error('Please check email & password. Try again!.');
                } else {
                    toast.warn('An error occurred. Please try again later.');
                }
            });
    }
    return (
        <>
            <div className="relative flex flex-col items-center justify-center h-screen overflow-hidden">
                <div className="w-full p-6 bg-white border-t-4 border-gray-600 rounded-md shadow-md border-top lg:max-w-lg">
                    <h1 className="text-3xl font-semibold text-center text-gray-700">ZenFitEscapes</h1>
                    <form onSubmit={handleLogin}  className="space-y-4">
                        <div>
                            <label className="label">
                                <span className="text-base label-text">Email</span>
                            </label>
                            <input type="text" name="email" placeholder="Email Address" className="w-full input input-bordered" />
                        </div>
                        <div>
                            <label className="label">
                                <span className="text-base label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="Enter Password"
                                className="w-full input input-bordered" />
                        </div>
                        <a href="/" className="text-xs text-gray-600 hover:underline hover:text-blue-600">Forget Password?</a>
                        <div>
                            <button className="btn btn-block hover:bg-slate-800 hover:text-white">Login</button>
                        </div>
                    </form>
                    <span>{`Haven't an account?`}
                        <Link to='/register' className="text-blue-600 ml-2 hover:text-blue-800 hover:underline">Register</Link></span>

                </div>
            </div>
            < ToastContainer />
        </>
    );
};

export default Login;