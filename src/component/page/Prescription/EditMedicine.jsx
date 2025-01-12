import { PencilIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";

const EditMedicine=({setMedicineList})=>{
    const [medicineForm,setMedicineForm] = useState({
        "drag_name":"",
        "dosage_form":"",
        "strength":"",
        "unit":"",
        "route":"",
        "direction":"",
        "frequency":"",
        "duration":"",
        "duration_unit":"",
        "quantity":"",
        "comment":""
    })
    const dragList = [
        {'id':1,"name":"drag 1","generic":"generic 1"},
        {'id':2,"name":"drag 2","generic":"generic 1"},
        {'id':3,"name":"drag 3","generic":"generic 3"},
        {'id':4,"name":"drag 4","generic":"generic 4"},
        {'id':5,"name":"drag 5","generic":"generic 5"}
    ]
    const [searchDragList,setSearchDragList] = useState([])
    const [selectText,setSelectText] = useState('')
    const [searchText,setSearchText] = useState('')
    const handleSelect=(select_text)=>{
        setSelectText(select_text)
        setMedicineForm((prev)=>({
            ...prev,
            "drag_name":select_text
        }))
    }
    const handleSearch=(e)=>{
        const search_text = e.target.value
        setSearchText(search_text)
        setSelectText(search_text)
        setMedicineForm((prev)=>({
            ...prev,
            "drag_name":search_text
        }))
    }
    const handleChange=(e)=>{
        const {name,value} = e.target;
        setMedicineForm((prev)=>({
            ...prev,
            [name]:value
        }))
    }

    const handleSubmit=(e)=>{
        e.preventDefault()
        setMedicineList((prev)=>[...prev,medicineForm])
        setMedicineForm((prev)=>({
            ...prev,
            "drag_name":"",
            "dosage_form":"",
            "strength":"",
            "unit":"",
            "route":"",
            "direction":"",
            "frequency":"",
            "duration":"",
            "duration_unit":"",
            "quantity":"",
            "comment":""
        }))
        setSearchText("")
        setSelectText("")
    }

    useEffect(()=>{
        const search_list= dragList.filter((s_text)=>{
            return s_text.name.includes(searchText) || s_text.generic.includes(searchText)
        })
        setSearchDragList(search_list)
    },[searchText])

    return <>
    <button className="bg-blue-400 hover:bg-blue-600 text-slate-100 py-2 px-3 rounded-md cursor-pointer" 
        onClick={()=>document.getElementById('EditmedicineModal').showModal()}
        ><PencilIcon className="size-4"/></button>
    <dialog id="EditmedicineModal" className="modal">
        <div className="modal-box  w-11/12 max-w-5xl">
            <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
            </form>
            <div>
                <div className="text-center text-[20px] font-bold">Medicine Add</div>
                <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 gap-y-2">
                        <div className="grid grid-cols-1 gap-y-2">
                            <div className="grid grid-cols-1">
                                <label htmlFor="drag_name">Drag Name or Generic Name</label>
                                <input onChange={handleSearch} value={selectText} type="text" name="drag_name" placeholder="Drag name or generic name"/>
                            </div>
                            {
                                searchText !== '' && selectText === searchText ?
                                <div className="grid grid-cols-1 border border-black pb-2">
                                    {
                                        searchDragList?.map((drag)=><div key={drag.id}  className="py-2 pl-5 border-b border-black cursor-pointer" 
                                        onClick={()=>handleSelect(`${drag?.name}`)}>{`${drag?.name} ${drag?.generic}`}</div>)
                                    }
                                    
                                
                                </div>:null
                            }
                        </div>
                        <div className="grid grid-cols-3 items-center gap-x-2">
                            <div className="grid grid-cols-1">
                                <label htmlFor="dosage_form">Dosage form</label>
                                <select name="dosage_form" value={medicineForm?.dosage_form} onChange={handleChange}>
                                    <option selected>select form</option>
                                    <option value="Capsule">Capsule</option>
                                    <option value="Suspension">Suspension</option>
                                    <option value="Syrup">Syrup</option>
                                    <option value="Tablet">Tablet</option>

                                </select>
                            </div>
                            <div className="grid grid-cols-1">
                                <label htmlFor="strength">Strength</label>
                                <input type="text" value={medicineForm?.strength} name="strength" onChange={handleChange} placeholder="strength"/>
                            </div>
                            <div className="grid grid-cols-1">
                                <label htmlFor="unit">Unit's</label>
                                <select name="unit" value={medicineForm?.unit} onChange={handleChange}>
                                    <option selected>select unit's</option>
                                    <option value="mg">mg</option>
                                    <option value="ml">ml</option>
                                    <option value="gm">gm</option>
                                </select>
                            </div>
                        </div>
                        <div className="grid grid-cols-12 items-center gap-x-2">
                            <div className="col-span-4 grid grid-cols-1">
                                <label htmlFor="route">Route</label>
                                <select name="route" value={medicineForm?.route} onChange={handleChange}>
                                    <option selected>select route</option>
                                    <option value="Capsule">Capsule</option>
                                    <option value="Suspension">Suspension</option>
                                    <option value="Syrup">Syrup</option>
                                    <option value="Tablet">Tablet</option>

                                </select>
                            </div>
                            <div className="col-span-8 grid grid-cols-1">
                                <label htmlFor="direction">Direction</label>
                                <select name="direction" value={medicineForm?.direction} onChange={handleChange}>
                                    <option selected>select direction</option>
                                    <option value="mg">mg</option>
                                    <option value="ml">ml</option>
                                    <option value="gm">gm</option>
                                </select>
                            </div>
                        </div>
                        <div className="grid grid-cols-3 items-center gap-x-2">
                            <div className="grid grid-cols-1">
                                <label htmlFor="frequency">Frequency</label>
                                <select name="frequency" value={medicineForm?.frequency} onChange={handleChange}>
                                    <option selected>select frequency</option>
                                    <option value="Capsule">Capsule</option>
                                    <option value="Suspension">Suspension</option>
                                    <option value="Syrup">Syrup</option>
                                    <option value="Tablet">Tablet</option>

                                </select>
                            </div>
                            <div className="grid grid-cols-1">
                                <label htmlFor="duration">Duration</label>
                                <input type="text" value={medicineForm?.duration} name="duration" onChange={handleChange} placeholder="duration"/>
                            </div>
                            <div className="grid grid-cols-1">
                                <label htmlFor="duration_unit">Duration Unit</label>
                                <select name="duration_unit" value={medicineForm?.duration_unit} onChange={handleChange}>
                                    <option selected>select duration unit</option>
                                    <option value="mg">mg</option>
                                    <option value="ml">ml</option>
                                    <option value="gm">gm</option>
                                </select>
                            </div>
                        </div>
                        <div className="grid grid-cols-12 items-center gap-x-2">
                            <div className="col-span-6 grid grid-cols-1">
                                <label htmlFor="quantity">Total Quantity</label>
                                <input type="text" value={medicineForm?.quantity} name="quantity" onChange={handleChange} placeholder="total quantity"/>
                            </div>
                            <div className="col-span-6 grid grid-cols-1">
                                <label htmlFor="comment">Comment</label>
                                <input type="text" value={medicineForm?.comment} name="comment"  onChange={handleChange}placeholder="comment .."/>
                            </div>
                        </div>
                        <div className="flex justify-center">
                            <button type="submit" className="bg-blue-600 text-slate-100 w-1/3 py-2">Save</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </dialog>
    </>
}
export default EditMedicine;