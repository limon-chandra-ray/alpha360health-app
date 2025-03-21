import { useContext, useEffect, useState } from "react";
import AppoinmentDelete from "./AppoinmentDelete";
import AppoinmentEdit from "./AppoinmentEdit";
import { useLoaderData } from "react-router-dom";
import { BaseUrl } from "../../../Constant/ApiDoamin";
import { AuthContext } from "../../../context/AuthProvider";

const AppoinmentTable=()=>{
    const [appoinments,setAppoinment] = useState([]);
    const {getAuthUser} = useContext(AuthContext);

    useEffect(()=>{
        const fetchConsultation=async()=>{
            const response = await fetch(
                `${BaseUrl}appoinments?agent_email=${getAuthUser()?.email}`
            )
            const responseData = await response.json() 
            console.log(responseData)
            setAppoinment(responseData)
        }
        fetchConsultation()
    },[])
    return<>
    <div className="overflow-x-auto py-4">
        <table className="table">
            {/* head */}
            <thead className="bg-blue-600 text-slate-100 rounded-md">
                <tr className="rounded-md">
                    <th>SL <br />No</th>
                    <th>Patient Name</th>
                    <th>Patient Id</th>
                    <th>Phone Number</th>
                    <th>Patient Type</th>
                    <th>Payment <br /> Status</th>
                    <th>Chief Complaint</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
            {/* row 1 */}
            {
                appoinments?.map((appoinment,index)=>{
                    return (
                        <tr key={index}>
                            <th>{index+1}</th>
                            <td>{appoinment?.patient_name}</td>
                            <td>{appoinment?.patientId}</td>
                            <td>{appoinment?.phone_number}</td>
                            <td>{appoinment?.appoinment_status}</td>
                            <td>{appoinment?.payment_status}</td>
                            <td>{appoinment?.chief_complaint}</td>
                            <td className="flex items-center gap-x-3">
                                {/* <AppoinmentEdit /> */}
                                <AppoinmentDelete setAppoinment={setAppoinment} appoinment_id={appoinment?._id}/>
                            </td>
                        </tr>
                    )
                })
            }
            
            </tbody>
        </table>
    </div>
    </>
}
export default AppoinmentTable;