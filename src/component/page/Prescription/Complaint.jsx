import { TrashIcon } from "@heroicons/react/24/outline"
import { useState } from "react"

const Complaint=({setComplaint,complaints})=>{
    const [complaintText,setComplaintText] = useState('')
    const handleChange=(e)=>{
        setComplaintText(e.target.value)
    }
    const complaintTextRemove=(removeText)=>{
        setComplaint((prevC)=>prevC.filter((text) => text !== removeText))
    }
    const handleComplaint=()=>{
        if(complaintText !== ''){
            setComplaint((prevComp)=>[...prevComp,complaintText])
            setComplaintText('')
        }
    }
    return<div className="">
        <div>Chief complaint:</div>
        <div>
            <div className="flex">
                <input type="text" value={complaintText} onChange={handleChange} className="grow w-full p-0" placeholder="complaint"/>
                <button onClick={handleComplaint} className="bg-blue-700 text-white px-2">Add</button>
            </div>
        </div>
        <div className="h-[120px] overflow-y-scroll border border-blue-700">
            <ul className="list-inside list-disc ">
                {
                    complaints?.map((com,index)=><li key={index}>{com} <span><button onClick={()=>complaintTextRemove(com)}><TrashIcon className="size-4"/></button></span></li>)
                }
                
            </ul>
        </div>
    </div>
}
export default Complaint;