import axios from "axios";
import { useState } from "react";
import { BaseUrl } from "../../../Constant/ApiDoamin";
import { ArrowPathIcon } from "@heroicons/react/24/outline";
import toast from "react-hot-toast";

const AppointmentCreate=({SetPatient})=>{
    const [loader,setLoader] = useState(false)
    const patientID = 10000001
    const [patientForm,SetPatientForm] = useState({
        "patient_name":"",
        "phone_number":"",
        "patient_id":"",
        "gender":"",
        "age":"",
        "chief_complaint":"",
        "payment_status":"",
        "service_charge":"",
        "appoinment_status":"",
        "patinet_type":"",
        "address":""
    })
    const handleChange=(e)=>{
        const {name,value} = e.target;
        SetPatientForm((prevData)=>({
            ...prevData,
            [name]:value
        }))
    }
    const handleSubmit= async(e)=>{
        e.preventDefault()
        setLoader(true)
        try{
            const responseData= await axios.post(`${BaseUrl}patients`,{
                "patient_name":patientForm?.patient_name ?? "",
                "phone_number":patientForm?.phone_number ?? "",
                "patient_id":patientID,
                "gender":patientForm?.gender ?? "",
                "age":patientForm?.age ?? "",
                "address":patientForm?.address ?? ""
            })
    
            await axios.post(`${BaseUrl}appoinments`,{
                "patient_pid":responseData?.data?.insertedId,
                "chief_complaint":patientForm?.chief_complaint,
                "payment_status":patientForm?.payment_status,
                "service_charge":patientForm?.service_charge,
                "appoinment_status":"Pending",
                "patient_type":"Primary",
            })
            SetPatientForm((prev)=>({
                ...prev,
                "patient_name":"",
                "phone_number":"",
                "gender":"",
                "age":"",
                "chief_complaint":"",
                "payment_status":"",
                "service_charge":"",
                "address":""
            }))
            toast.success("Create success")
        }catch (error) {
            toast.error(error.message)
            setErrorMessage(error.message);
        } finally {
            setLoader(false);
        }

    }
    return<>
    <div>
        <div className="text-center text-[25px] font-bold text-black">Appointment Booking</div>
        <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 gap-y-2">
            <div className="grid grid-cols-12 items-center">
                <label htmlFor="phone_number" className="col-span-4">Phone Number:</label>
                <input type="text" value={patientForm?.phone_number} required onChange={handleChange} className="col-span-8" name="phone_number"/>
            </div>
            <div className="grid grid-cols-12 items-center">
                <label htmlFor="patient_id" className="col-span-4">Patient ID:</label>
                <input type="text" value={patientForm?.patient_id} onChange={handleChange} className="col-span-8" name="patient_id"/>
            </div>
            <div className="grid grid-cols-12 items-center">
                <label htmlFor="patient_name" className="col-span-4">Patient Name:</label>
                <input type="text" value={patientForm?.patient_name} required onChange={handleChange} className="col-span-8" name="patient_name"/>
            </div>
            <div className="grid grid-cols-12 items-center">
                <label htmlFor="gender"  className="col-span-4">Gender:</label>
                <select name="gender" value={patientForm?.gender} required onChange={handleChange} className="col-span-8">
                    <option> select gender</option>
                    <option value={'Male'}> Male</option>
                    <option value={'Female'}>Female</option>
                    <option value={'Others'}>Others</option>
                </select>
            </div>
            <div className="grid grid-cols-12 items-center">
                <label htmlFor="age" className="col-span-4">Age:</label>
                <input type="text" value={patientForm?.age} required onChange={handleChange} className="col-span-8" name="age"/>
            </div>
            <div className="grid grid-cols-12 items-center">
                <label htmlFor="chief_complaint" className="col-span-4">Chiefs Complaints:</label>
                <input type="text" value={patientForm?.chief_complaint} onChange={handleChange} className="col-span-8" name="chief_complaint"/>
            </div>
            <div className="grid grid-cols-12 items-center">
                <label htmlFor="payment_status" className="col-span-4">Payment Status:</label>
                <select name="payment_status" value={patientForm?.payment_status} required onChange={handleChange} className="col-span-8">
                    <option> select status</option>
                    <option value={'Paid'}>Paid</option>
                    <option value={'Un paid'}>Un paid</option>
                    <option value={'Free'}> Free</option>
                </select>
            </div>
            <div className="grid grid-cols-12 items-center">
                <label htmlFor="service_charge" className="col-span-4">Service Charge:</label>
                <select name="service_charge" value={patientForm?.service_charge} required onChange={handleChange} className="col-span-8">
                    <option> select charge</option>
                    <option value={'250 tk'}> 250 tk</option>
                    <option value={'500 tk'}>500 tk</option>
                    <option value={'Not applicable'}>Not applicable</option>
                </select>
            </div>
            <div className="grid grid-cols-12 items-center">
                <label htmlFor="address" className="col-span-4">Address:</label>
                <textarea type="text" onChange={handleChange} className="col-span-8" name="address"/>
            </div>
            <div className="flex w-full items-center justify-center">
                {
                    loader ?
                    <button type="button" className="w-1/3 bg-blue-700 text-slate-100">
                        <ArrowPathIcon className="size-5 animate-spin"/>
                    </button>:
                    <button type="submit" className="w-1/3 bg-blue-700 text-slate-100">Save</button>
                }
                
            </div>
        </div>
        </form>
    </div>
    
    </>
}

export default AppointmentCreate;