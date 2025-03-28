import { useEffect, useRef, useState } from "react"
import { useParams } from "react-router-dom";
import { useReactToPrint } from "react-to-print";

import PrescriptionLogo from "../../../assets/prescription.png"
import { BaseUrl } from "../../../Constant/ApiDoamin"
import { format } from "date-fns"
import InformationList from "./InformationList"
import { PrinterIcon } from "@heroicons/react/24/outline";
import { AlphaUser } from "../../../Constant/AlphaUser";

const Prescription=()=>{
    const {Id} = useParams()
    const datetime = new Date().getTime()
    const [doctorDetails,setDoctorDetails] = useState({});
    const [prescriptionDetails,setPrescriptionDetails] = useState({})
    const contentRef = useRef(null);
    const reactToPrintFn = useReactToPrint({ 
        contentRef,
        documentTitle: `prescription_${prescriptionDetails?.patient_name}_${datetime}`,
     });
    
    useEffect(()=>{
        const fetchPrescription=async()=>{
            const response =await fetch(
                `${BaseUrl}appoinments/${Id}`
            )
            const responseData = await response.json()
            setPrescriptionDetails(responseData[0])
            const doctor_Details = AlphaUser.filter(user=> user?.userName == responseData[0]?.doctor_name)
            setDoctorDetails(doctor_Details[0])
        }
        fetchPrescription()
    },[])
    return <>
        <div className="fixed right-[35px] bottom-[35px]">
            <button className="rounded-full bg-blue-800 text-slate-100 py-2 px-4" onClick={() => reactToPrintFn()}><PrinterIcon className="size-7"/></button>
        </div>
        <div ref={contentRef} className="px-[25px]">
            <div>
                <div className="flex items-center justify-between">
                    <div>
                        <img className="w-[350px] h-[120px] md:w-[300px] md:h-[80px] lg:w-[320px] lg:h-[100px]" src={PrescriptionLogo} alt="" />
                    </div>
                    <div className="grid grid-cols-1 text-end pr-3">
                        <span className="text-[25px] font-bold text-cyan-600">{doctorDetails?.userName}</span>
                        <span className="text-[16px] font-semibold">{doctorDetails?.degree}</span>
                        <span className="text-[16px]">{doctorDetails?.dept}</span>
                        <span className="text-[16px]">{doctorDetails?.hospital}</span>
                        <span className="text-[16px] text-cyan-500">{doctorDetails?.special}</span>
                    </div>
                </div>
                <div className="flex gap-x-3 text-cyan-500 pl-5 text-[16px]">
                    <span>Contact: 01851980081</span>
                    <span>
                        Website: www.alpha360.health
                    </span>
                </div>
            </div>
            <div className="w-full h-[5px] bg-cyan-700 rounded-3xl my-5"></div>
            <div className="grid grid-cols-1">
                <div className="grid grid-cols-12 border border-black p-[2px]">
                    <div className="col-span-5 border-r border-black">Name: {prescriptionDetails?.patient_name}</div>
                    <div className="col-span-2 border-r border-black">Gender: {prescriptionDetails?.gender}</div>
                    <div className="col-span-2 border-r border-black">Age: {prescriptionDetails?.age} years</div>
                    <div className="col-span-3">Date: {format(prescriptionDetails?.created_at? prescriptionDetails?.created_at:null,"dd/MM/yyyy")}</div>
                </div>
                <div className="grid grid-cols-12 border-t-0 border-l border-b border-r border-black p-[2px]">
                    <div className="col-span-3 border-r border-black">Patient ID:{prescriptionDetails?.patientId}</div>
                    <div className="col-span-3 border-r border-black">Prescription ID:{prescriptionDetails?.prescription_id}</div>
                    <div className="col-span-3 border-r border-black">Phone: {prescriptionDetails?.phone_number}</div>
                    <div className="col-span-3">Address: {prescriptionDetails?.address}</div>
                </div>
            </div>
            <div className="grid grid-cols-12 py-2">
                <div className="col-span-4 bg-blue-300 text-black">
                    <div className="border border-blue-700">
                        <div>Major complains:</div>
                        <InformationList listValue={prescriptionDetails?.complaint}/>
                    </div>
                    <div className="border border-blue-700">
                        <div>Observation:</div>
                        <InformationList listValue={prescriptionDetails?.observation}/>
                    </div>
                    <div className="border border-blue-700">
                        <div>Diagnosis:</div>
                        <InformationList listValue={prescriptionDetails?.diagnosi}/>
                    </div>
                    <div className="border border-blue-700">
                        <div>Advice:</div>
                        <InformationList listValue={prescriptionDetails?.advice}/>
                    </div>
                    <div className="border border-blue-700">
                        <div>Follow-Up Instruction:</div>
                        <InformationList listValue={prescriptionDetails?.instruction}/>
                    </div>
                </div>
                <div className="col-span-8 px-5 pt-5">
                    <div className="flex justify-between items-center">
                        <div className="text-[25px] font-bold font-[math]">Rx.</div>
                    </div>
                    <div className="pl-5">
                        <ul className="list-outside list-disc">
                            {
                                prescriptionDetails?.medicins?.map((pmedicine,index)=>{
                                    return (
                                    <li key={index}>
                                        <div className="flex justify-between items-center">
                                            <div className="grid grid-cols-1">
                                                <span>{`${pmedicine?.dosage_form}. ${pmedicine?.drag_name} ${pmedicine?.strength} ${pmedicine?.unit} …………………………………………. ( ${pmedicine?.quantity} )`}</span>
                                                <span>{`${pmedicine?.frequency} ${pmedicine?.duration} ${pmedicine?.duration_unit} interval ${pmedicine?.direction}`}</span>
                                                <span>{`${pmedicine?.comment}`}</span>
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
        </div>
        
    </>
}

export default Prescription