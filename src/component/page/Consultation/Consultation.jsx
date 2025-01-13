import { useEffect, useState } from "react";
import SearchBar from "../../SearchBar/SearchBar";
import ConsultationTable from "./Consultation-Table";
import axios from "axios";
import { BaseUrl } from "../../../Constant/ApiDoamin";

const Consultent=()=>{
    const [consultationList,setConsultationList] = useState([])
    const [appoinmentStatus,SetAppoinmentStatus] = useState('Pending')
    const handleAppoinmentStatus=(status)=>{
        SetAppoinmentStatus(status)
    }
    useEffect(()=>{
        const fetchConsultation=async()=>{
            const response =await fetch(
                `${BaseUrl}appoinments?appoinment_status=${appoinmentStatus}`
            )
            const responseData = await response.json() 
            setConsultationList(responseData)
        }
        fetchConsultation()
    },[appoinmentStatus])
    return <>
    <div>
        <div className="flex justify-between">
            <div>Consultation</div>
            <SearchBar/>
        </div>
        <div className="grid grid-cols-1 my-3">
            <div className="flex items-center border border-cyan-500 rounded-md w-full px-5 py-3 gap-x-3">
                <button onClick={()=>handleAppoinmentStatus("Pending")} 
                    className={`${appoinmentStatus === "Pending"? 'bg-cyan-600 text-slate-100':"text-black"} py-2 px-6 rounded-md`}>Pending</button>
                <button onClick={()=>handleAppoinmentStatus("Completed")}
                    className={`${appoinmentStatus === "Completed"? 'bg-cyan-600 text-slate-100':"text-black"} py-2 px-6 rounded-md`}
                    >Completed</button>
            </div>
        </div>
        <ConsultationTable consultationList={consultationList}/>
    </div>
    </>
}
export default Consultent;