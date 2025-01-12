import { TrashIcon } from "@heroicons/react/24/outline"
import { useState } from "react"

const PatientAdvice=({setAdvice,advices})=>{
    const [complaintText,setComplaintText] = useState('')
    const handleChange=(e)=>{
        setComplaintText(e.target.value)
    }
    const complaintTextRemove=(removeText)=>{
        setAdvice((prevC)=>prevC.filter((text) => text !== removeText))
    }
    const handleComplaint=()=>{
        if(complaintText !== ''){
            setAdvice((prevComp)=>[...prevComp,complaintText])
            setComplaintText('')
        }
        
    }
    return<div className="">
        <div>Advice:</div>
        <div>
            <div className="flex">
                <input type="text" value={complaintText} onChange={handleChange} className="grow w-full p-0" placeholder="advice"/>
                <button onClick={handleComplaint} className="bg-blue-700 text-white px-2">Add</button>
            </div>
        </div>
        <div className="h-[120px] overflow-y-scroll border border-blue-700">
            <ul className="list-inside list-disc ">
                {
                    advices?.map((com,index)=><li key={index}>{com} <span><button onClick={()=>complaintTextRemove(com)}><TrashIcon className="size-4"/></button></span></li>)
                }
                
            </ul>
        </div>
    </div>
}
export default PatientAdvice;