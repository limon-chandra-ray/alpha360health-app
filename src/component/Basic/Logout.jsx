import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();

  const replaceURL = () => {
    localStorage.removeItem("email");
    localStorage.removeItem("user_role")
    localStorage.removeItem("astatus")
    navigate("/login", { replace: true });
  };

  return <button onClick={replaceURL} className={`text-left py-2 pl-5 font-[16px] bg-blue-600 text-slate-100 hover:bg-blue-900 rounded-r-md`}>Log-Out</button>
};

export default Logout;