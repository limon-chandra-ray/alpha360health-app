import { useEffect, useState } from "react";
import { BaseUrl } from "../../../Constant/ApiDoamin";
import SearchBar from "../../SearchBar/SearchBar";
import AllPrescriptionTable from "./AllPrescriptionTable";

const AllPrescription=()=>{
    const [prescriptionList,setAllPrescriptionList] = useState([])

    
    useEffect(()=>{
        const fetchConsultation=async()=>{
            const response =await fetch(
                `${BaseUrl}appoinments?appoinment_status=Completed`
            )
            const responseData = await response.json() 
            setAllPrescriptionList(responseData)
        }
        fetchConsultation()
    },[])
    return<>
    <div>
        <div className="flex justify-between">
            <div>Consultation</div>
            <SearchBar/>
        </div>
       
        <AllPrescriptionTable prescriptionList={prescriptionList}/>
    </div>
    </>
}
export default AllPrescription;