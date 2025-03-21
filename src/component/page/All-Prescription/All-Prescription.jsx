import { useContext, useEffect, useState } from "react";
import { BaseUrl } from "../../../Constant/ApiDoamin";
import SearchBar from "../../SearchBar/SearchBar";
import AllPrescriptionTable from "./AllPrescriptionTable";
import { AuthContext } from "../../../context/AuthProvider";

const AllPrescription=()=>{
    const [prescriptionList,setAllPrescriptionList] = useState([])

    const {getAuthUser} = useContext(AuthContext);
    useEffect(()=>{
        const fetchConsultation=async()=>{
            const response =await fetch(
                `${BaseUrl}appoinments?appoinment_status=Completed&agent_email=${getAuthUser()?.email}`
            )
            const responseData = await response.json() 
            setAllPrescriptionList(responseData)
            console.log(responseData)
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