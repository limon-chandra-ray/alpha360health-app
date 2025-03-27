import { useEffect, useState } from "react";
import { AlphaUser } from "../../../Constant/AlphaUser";
import { use } from "react";

const Home=()=>{
    const [user,setUser] = useState({})
    useEffect(()=>{
        const localStore = localStorage.getItem('email')
        const doctor_Details = AlphaUser.filter(user=> user?.email == localStore)
        setUser(doctor_Details[0]);
        },[])
    return<>
        <main className="w-full h-full flex items-start justify-center">
            <div className="w-2/3 bg-blue-200 rounded-md p-4 flex flex-col justify-center items-center">
                <div className="text-[30px] text-blue-700 font-serif font-bold t">Welcome Alpha360 Health</div>
                <div className="text-[22px] font-bold">{user?.userName}</div>
                <div className="text-[20px]">{user?.email}</div>
                <div className="text-[20px]">{user?.degree}</div>
                <div className="text-[20px]">{user?.dept}</div>
                <div className="text-[20px]">{user?.hospital}</div>
                <div className="text-[20px]">{user?.special}</div>
                <div className="text-[20px]">{user?.userRole}</div>
            </div>
        </main>
    
    </>
}
export default Home;