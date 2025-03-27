
import { use, useContext } from "react"
import Logo from "../../assets/logo.jpeg"
import { useLocation } from "react-router-dom"
import { AuthContext } from "../../context/AuthProvider"
import Logout from "./Logout"

const SideBar=()=> {
  const location = useLocation()
  const isActive = (href) => location.pathname === href || false;
  const {getAuthUser,logOut} = useContext(AuthContext);
  return (
    <nav className="h-full bg-blue-200">
        <a href="/" className="w-full">
            <img src={Logo} className="rounded-r-md w-full h-[70px]" alt="Alpha360.health logo" />
        </a>
        <div className="grid grid-cols-1 gap-y-2 pt-5">
            <a href="/" className={`py-2 pl-5 font-[16px]  ${isActive('/') ? "bg-blue-800":"bg-blue-600"} text-slate-100 hover:bg-blue-900 rounded-r-md`}>Profile</a>
            <a href="/appoinment" className={`py-2 pl-5 font-[16px]  ${isActive('/appoinment') ? "bg-blue-800":"bg-blue-600"} text-slate-100 hover:bg-blue-900 rounded-r-md`}>Appointment</a>
            <a href="/consultation" className={`py-2 pl-5 font-[16px]  ${isActive('/consultation') ? "bg-blue-800":"bg-blue-600"} text-slate-100 hover:bg-blue-900 rounded-r-md`}>Consultation</a>
            <a href="/all-prescription" className={`py-2 pl-5 font-[16px]  ${isActive('/all-prescription') ? "bg-blue-800":"bg-blue-600"} text-slate-100 hover:bg-blue-900 rounded-r-md`}>All Prescription</a>
            {
              getAuthUser()?.userRole !== "" ?
              <Logout/>:
              null
            }
        </div>
    </nav>
  );
}
export default SideBar;