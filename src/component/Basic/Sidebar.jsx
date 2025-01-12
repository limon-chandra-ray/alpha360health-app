
import Logo from "../../assets/logo.jpeg"

const SideBar=()=> {
  return (
    <nav className="h-full bg-blue-200">
        <a href="/" className="w-full">
            <img src={Logo} className="rounded-r-md w-full h-[70px]" alt="Alpha360.health logo" />
        </a>
        <div className="grid grid-cols-1 gap-y-2 pt-5">
            <a href="/" className="py-2 pl-5 font-[16px] bg-blue-800 text-slate-100 hover:bg-blue-900 rounded-r-md">Home</a>
            <a href="/appoinment" className="py-2 pl-5 font-[16px] bg-blue-800 text-slate-100 hover:bg-blue-900 rounded-r-md">Appointment</a>
            <a href="/consultation" className="py-2 pl-5 font-[16px] bg-blue-800 text-slate-100 hover:bg-blue-900 rounded-r-md">Consultent</a>
        </div>
    </nav>
  );
}
export default SideBar;