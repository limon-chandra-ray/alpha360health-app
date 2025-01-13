import axios from "axios";
import { BaseUrl } from "../../../Constant/ApiDoamin";
import toast from "react-hot-toast";
import { useState } from "react";
import { ArrowPathIcon } from "@heroicons/react/24/outline";

const AppoinmentDelete=({setAppoinment,appoinment_id})=>{
    const [loader,setLoader] = useState(false)
    const handleDelete=async()=>{
        setLoader(true)
        try {
            // Confirm deletion
            const confirm = window.confirm('Are you sure you want to delete this appointment?');
            if (!confirm) return;
    
            // Make the DELETE request
            const response = await axios.delete(`${BaseUrl}appoinments/${appoinment_id}`);
    
            // Check if the response indicates success
            if (response.data.result.acknowledged) {
                toast.success(response?.data?.message);
                setAppoinment((prev)=>prev.filter((ap)=>ap._id !== appoinment_id))
                // Optionally, refresh the list or update the state
                
            }
        } catch (error) {
            toast.error('Error deleting appointment:', error);
            alert('Failed to delete the appointment. Please try again.');
        }finally{
            setLoader(false)
        }
    }
    return <>
        {
            loader ?
            <button type="button">
                <ArrowPathIcon className="size-5 animate-spin"/>
            </button>:
            <button type="button" onClick={handleDelete}>Delete</button>
        }
        
    </>
}
export default AppoinmentDelete;