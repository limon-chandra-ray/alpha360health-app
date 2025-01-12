import { TrashIcon } from "@heroicons/react/24/outline"
import { useState } from "react"

const PatientObservation=({setObservation,observations})=>{
    const [complaintText,setComplaintText] = useState('')
    const handleChange=(e)=>{
        setComplaintText(e.target.value)
    }
    const complaintTextRemove=(removeText)=>{
        setObservation((prevC)=>prevC.filter((text) => text !== removeText))
    }
    const handleComplaint=()=>{
        if(complaintText !== ''){
            setObservation((prevComp)=>[...prevComp,complaintText])
            setComplaintText('')
        }
        
    }
    return<div className="">
        <div>Observation:</div>
        <div>
            <div className="flex">
                <input type="text" value={complaintText} onChange={handleChange} className="grow w-full p-0" placeholder="observation"/>
                <button onClick={handleComplaint} className="bg-blue-700 text-white px-2">Add</button>
            </div>
        </div>
        <div className="h-[120px] overflow-y-scroll border border-blue-700">
            <ul className="list-inside list-disc ">
                {
                    observations?.map((com,index)=><li key={index}>{com} <span><button onClick={()=>complaintTextRemove(com)}><TrashIcon className="size-4"/></button></span></li>)
                }
                
            </ul>
        </div>
    </div>
}
export default PatientObservation;