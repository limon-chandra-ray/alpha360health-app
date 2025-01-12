import { TrashIcon } from "@heroicons/react/24/outline"
import { useState } from "react"

const PatientDiagnosis=({setDiagnosis,diagnosis})=>{
    const [complaintText,setComplaintText] = useState('')
    const handleChange=(e)=>{
        setComplaintText(e.target.value)
    }
    const complaintTextRemove=(removeText)=>{
        setDiagnosis((prevC)=>prevC.filter((text) => text !== removeText))
    }
    const handleComplaint=()=>{
        if(complaintText !== ''){
            setDiagnosis((prevComp)=>[...prevComp,complaintText])
            setComplaintText('')
        } 
    }
    return<div className="">
        <div>Diagnosis:</div>
        <div>
            <div className="flex">
                <input type="text" value={complaintText} onChange={handleChange} className="grow w-full p-0" placeholder="diagnosis"/>
                <button onClick={handleComplaint} className="bg-blue-700 text-white px-2">Add</button>
            </div>
        </div>
        <div className="h-[120px] overflow-y-scroll border border-blue-700">
            <ul className="list-inside list-disc ">
                {
                    diagnosis?.map((com,index)=><li key={index}>{com} <span><button onClick={()=>complaintTextRemove(com)}><TrashIcon className="size-4"/></button></span></li>)
                }
                
            </ul>
        </div>
    </div>
}
export default PatientDiagnosis;