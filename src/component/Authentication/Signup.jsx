import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const SignUp=()=>{
    const [isLoading, setIsLoading] = useState(false);
    const { createUser } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/login';
    const handleSignup = async (event) => {
        event.preventDefault();
        setIsLoading(true)
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        try {
          const userCredential = await createUser(email, password);
          
          if (userCredential.user) {
            navigate(from, { replace: true });
            toast.success("Account created")
          }
        } catch (error) {
          toast.error(error.message);
        } finally {
          console.log(false);
        }
        setIsLoading(false)
    };


    return(
        <main className="w-full h-screen bg-blue-100 flex justify-center items-center">
            <div className="bg-blue-300 w-1/4 rounded-md p-5">
                <div className="text-center">Sign up</div>
                <form className="mt-8 space-y-6" onSubmit={handleSignup}>
                    <div className="rounded-md shadow-sm space-y-4">
                        
                        {/* Email Field */}
                        <div className="relative">
                            <input
                                id="email"
                                name="email"
                                type="email"
                                required
                                className="appearance-none rounded-lg relative block w-full pl-10 pr-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                placeholder="Email address"
                            />
                        </div>

                        {/* Password Field */}
                        <div className="relative">
                            <input
                                id="password"
                                name="password"
                                type="password"
                                required
                                className="appearance-none rounded-lg relative block w-full pl-10 pr-10 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                placeholder="Password"
                            />
                        </div>
                    </div>

                    <div>
                        <button
                        type="submit"
                        disabled={isLoading}
                        className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                        {isLoading ? (
                            <span className="inline-flex items-center">
                            <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                            </svg>
                            Creating account...
                            </span>
                        ) : (
                            "Sign up"
                        )}
                        </button>
                    </div>
                </form>
            </div>
        </main>
    );
}
export default SignUp;