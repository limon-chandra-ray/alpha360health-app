import { useNavigate, useParams } from "react-router-dom";
import PrescriptionLogo from "../../../assets/prescription.png"
import { useEffect, useState } from "react";
import Complaint from "./Complaint";
import PatientObservation from "./Observation";
import PatientDiagnosis from "./Diagnosis";
import PatientAdvice from "./Advice";
import PatientFollowUpInstruction from "./FollowUpInstruction";
import AddMedicine from "./AddMedicine";
import EditMedicine from "./EditMedicine";
import { TrashIcon } from "@heroicons/react/24/outline";
import axios from "axios";
import { BaseUrl } from "../../../Constant/ApiDoamin";
import toast from "react-hot-toast";
import { format } from "date-fns";
import { AlphaUser } from "../../../Constant/AlphaUser";
const CreatePrescription=()=>{
    const navigate = useNavigate()
    const {Id} = useParams()
    const [patientinfo,setPatientInfo] = useState({})
    const [medicineList,setMedicineList] = useState([])
    const [complaints,setComplaint] = useState([])
    const [observations,setObservation] = useState([])
    const [diagnosis,setDiagnosis] = useState([])
    const [advices,setAdvice] = useState([])
    const [doctorDetails,setDoctorDetails] = useState({})
    const [followupinstructions,setFollowUpInstruction] = useState([])
    const handleRemoveM=(index)=>{
        setMedicineList((prev)=>prev.filter((pprev,mindex)=> mindex !== index))
    }
    const handlePrescriptionSave= async()=>{
        const form_save_data = {
            "appoinment_status":"Completed",
            "complaint":complaints,
            "observation":observations,
            "diagnosi":diagnosis,
            "advice":advices,
            "instruction":followupinstructions,
            "medicins":medicineList
        }
        const response =await axios.patch(`${BaseUrl}appoinments/${Id}`,form_save_data)
        const responseData = response.data;
        if(responseData?.result){
            toast.success(responseData?.message)
            navigate('/consultation')
        }else{
            toast.success(responseData?.message)
        }

    }
    useEffect(()=>{
        const fetchPrescription=async()=>{
            const response =await fetch(
                `${BaseUrl}appoinments/${Id}`
            )
            const responseData = await response.json()
            setPatientInfo(responseData[0])
            const doctor_Details = AlphaUser.filter(user=> user?.userName == responseData[0]?.doctor_name)
            setDoctorDetails(doctor_Details[0]);
        }
        fetchPrescription()
    },[Id])
    console.log(patientinfo)
    return <>
        <div>
            <div>
                <div className="flex items-center justify-between">
                    <div>
                        <img className="w-[350px] h-[120px] md:w-[300px] md:h-[80px] lg:w-[320px] lg:h-[100px]" src={PrescriptionLogo} alt="" />
                    </div>
                    <div className="grid grid-cols-1 text-end">
                        <span className="text-[25px] font-bold text-cyan-600">Dr. Md. Shahin Reza</span>
                        <span className="text-[16px] font-semibold">{doctorDetails?.degree}</span>
                        <span className="text-[16px]">{doctorDetails?.dept}</span>
                        <span className="text-[16px]">{doctorDetails?.hospital}</span>
                        <span className="text-[16px] text-cyan-500">{doctorDetails?.special}</span>
                    </div>
                </div>
                <div className="flex gap-x-3 text-cyan-500 pl-5 text-[16px]">
                    <span>Contact: 01851980081</span>
                    <span>
                        Website: <a href="/">www.alpha360.health</a>
                    </span>
                </div>
            </div>
            <div className="w-full h-[5px] bg-cyan-700 rounded-3xl my-5"></div>
            <div className="grid grid-cols-1">
                <div className="grid grid-cols-12 border border-black p-[2px]">
                    <div className="col-span-5 border-r border-black">Name: {patientinfo?.patient_name}</div>
                    <div className="col-span-2 border-r border-black">Gender: {patientinfo?.gender}</div>
                    <div className="col-span-2 border-r border-black">Age: {patientinfo?.age} years</div>
                    <div className="col-span-3">Date: {format(patientinfo?.created_at? patientinfo?.created_at:null,"dd/MM/yyyy")}</div>
                </div>
                <div className="grid grid-cols-12 border-t-0 border-l border-b border-r border-black p-[2px]">
                    <div className="col-span-3 border-r border-black">Patient ID:{patientinfo?.patientId}</div>
                    <div className="col-span-3 border-r border-black">Prescription ID:{patientinfo?.prescription_id}</div>
                    <div className="col-span-3 border-r border-black">Phone: {patientinfo?.phone_number}</div>
                    <div className="col-span-3">Address: {patientinfo?.address}</div>
                </div>
            </div>
            <div className="grid grid-cols-12">
                <div className="col-span-4 bg-blue-300 text-black">
                    <Complaint setComplaint={setComplaint} complaints={complaints}/>
                    <PatientObservation observations={observations} setObservation={setObservation}/>
                    <PatientDiagnosis diagnosis={diagnosis} setDiagnosis={setDiagnosis}/>
                    <PatientAdvice advices={advices} setAdvice={setAdvice}/>
                    <PatientFollowUpInstruction followupinstructions={followupinstructions} setFollowUpInstruction={setFollowUpInstruction}/>
                </div>
                <div className="col-span-8 px-5 pt-5">
                    <div className="flex justify-between items-center">
                        <div className="text-[25px] font-bold font-[math]">Rx.</div>
                        <AddMedicine setMedicineList={setMedicineList}/>
                    </div>
                    <div className="pl-5">
                        <ul className="list-outside list-disc">
                            {
                                medicineList?.map((pmedicine,index)=>{
                                    return (
                                    <li key={index}>
                                        <div className="flex justify-between items-center">
                                            <div className="grid grid-cols-1">
                                                <span>{`${pmedicine?.dosage_form}. ${pmedicine?.drag_name} ${pmedicine?.strength} ${pmedicine?.unit} …………………………………………. ( ${pmedicine?.quantity} )`}</span>
                                                <span>{`${pmedicine?.frequency} ${pmedicine?.duration} ${pmedicine?.duration_unit} interval ${pmedicine?.direction}`}</span>
                                                <span>{`${pmedicine?.comment}`}</span>
                                            </div>
                                            <div className="flex items-center gap-x-2">
                                                {/* <EditMedicine/> */}
                                                <button onClick={()=>handleRemoveM(index)} className="bg-red-400 hover:bg-red-500 text-slate-100 py-2 px-3 rounded-md cursor-pointer"><TrashIcon className="size-4"/></button>
                                            </div>
                                        </div>
                                    </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>
                
            </div>
            <div className="flex justify-center">
                <button className="w-1/3 bg-blue-700 text-slate-100 py-3 rounded-md" onClick={handlePrescriptionSave}>Prescription Save</button>
            </div>
        </div>
    </>
}
export default CreatePrescription;