import { useState } from "react";
import SearchBar from "../../SearchBar/SearchBar";
import ConsultationTable from "./Consultation-Table";

const Consultent=()=>{
    const [appoinmentStatus,SetAppoinmentStatus] = useState('pending')
    const handleAppoinmentStatus=(status)=>{
        SetAppoinmentStatus(status)
    }
    return <>
    <div>
        <div className="flex justify-between">
            <div>Consultation</div>
            <SearchBar/>
        </div>
        <div className="grid grid-cols-1 my-3">
            <div className="flex items-center border border-cyan-500 rounded-md w-full px-5 py-3 gap-x-3">
                <button onClick={()=>handleAppoinmentStatus("pending")} 
                    className={`${appoinmentStatus === "pending"? 'bg-cyan-600 text-slate-100':"text-black"} py-2 px-6 rounded-md`}>Pending</button>
                <button onClick={()=>handleAppoinmentStatus("completed")}
                    className={`${appoinmentStatus === "completed"? 'bg-cyan-600 text-slate-100':"text-black"} py-2 px-6 rounded-md`}
                    >Completed</button>
            </div>
        </div>
        <ConsultationTable/>
    </div>
    </>
}
export default Consultent;