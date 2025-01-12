import { useState } from "react";
import CreateButton from "../../Button/CreateButton";
import SearchBar from "../../SearchBar/SearchBar";
import AppoinmentTable from "./AppoinmentTable";

const Appointment=()=>{
    const [patients,SetPatient] = useState([])
    return <>
    <div>
        <div className="flex justify-between items-center">
            <div className="text-[18px] font-bold tracking-[2px]">Scheduling</div>
            <SearchBar/>
            <div>
                <CreateButton a_href={'/appoinment-create'}
                text={'Add New appointment'}
                bg_color={"bg-blue-700"}
                text_color={'text-white'}
                SetPatient={SetPatient}
                />
            </div>
        </div>
        <AppoinmentTable/>
    </div>
    
    </>
}
export default Appointment;