import { useEffect, useState } from "react";
import { DirectionAdministration, DosageForm, DoseFrequency, DosefrequencyDurationUnit, DoseUnit, RouteAdministration } from "../../../Constant/DrugData";
import { BaseUrl } from "../../../Constant/ApiDoamin";

const AddMedicine=({setMedicineList})=>{
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
        const fetchDrug= async()=>{
            const response =await fetch(
                `${BaseUrl}search-drugs?search=${searchText}`
            )
            const responseData = await response.json() 
            setSearchDragList(responseData)
        }
        fetchDrug()
    },[searchText])

    return <>
    <button className="bg-blue-600 text-slate-100 py-2 px-3 rounded-md cursor-pointer" 
        onClick={()=>document.getElementById('medicineModal').showModal()}
        >Add Medicine</button>
    <dialog id="medicineModal" className="modal">
        <div className="modal-box  w-11/12 max-w-5xl">
            <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
            </form>
            <div>
                <div className="text-center text-[20px] font-bold">Medicine Add</div>
                <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 gap-y-2">
                        <div className="grid grid-cols-1 gap-y-2 relative">
                            <div className="grid grid-cols-1">
                                <label htmlFor="drag_name">Generic Name or Brand Name</label>
                                <input onChange={handleSearch} value={selectText} type="text" name="drag_name" placeholder="Drag name or generic name"/>
                            </div>
                            {
                                searchText !== '' && selectText === searchText && searchDragList?.length > 0 ?
                                <div className="flex flex-col border border-black pb-2 absolute max-h-[350px] bg-blue-200 top-[66px] left-0 right-0 overflow-y-scroll">
                                    {
                                        searchDragList?.map((durg)=><div key={durg.id}  className="py-2 pl-5 border-b border-blue-600 text-slate-800 cursor-pointer" 
                                        onClick={()=>handleSelect(`${durg?.generic_name} ( ${durg?.brand_name} )`)}>{`${durg?.generic_name} ( ${durg?.brand_name} )`}</div>)
                                    }
                                    
                                
                                </div>:null
                            }
                        </div>
                        <div className="grid grid-cols-3 items-center gap-x-2">
                            <div className="grid grid-cols-1">
                                <label htmlFor="dosage_form">Dosage form</label>
                                <select name="dosage_form" value={medicineForm?.dosage_form} onChange={handleChange}>
                                    <option selected>select form</option>
                                    {
                                        DosageForm?.map((Mdata,index)=><option key={index} value={Mdata}>{Mdata}</option>)
                                    }

                                </select>
                            </div>
                            <div className="grid grid-cols-1">
                                <label htmlFor="strength" className="text-cyan-400">Strength</label>
                                <input type="text" value={medicineForm?.strength} name="strength" onChange={handleChange} placeholder="strength"/>
                            </div>
                            <div className="grid grid-cols-1">
                                <label htmlFor="unit" className="text-cyan-400">Unit's</label>
                                <select name="unit" value={medicineForm?.unit} onChange={handleChange}>
                                    <option selected>select unit's</option>
                                    {
                                        DoseUnit?.map((Mdata,index)=><option key={index} value={Mdata}>{Mdata}</option>)
                                    }
                                </select>
                            </div>
                        </div>
                        <div className="grid grid-cols-12 items-center gap-x-2">
                            <div className="col-span-4 grid grid-cols-1">
                                <label htmlFor="route">Route of Administration</label>
                                <select name="route" value={medicineForm?.route} onChange={handleChange}>
                                    <option selected>select route</option>
                                    {
                                        RouteAdministration?.map((Mdata,index)=><option key={index} value={Mdata}>{Mdata}</option>)
                                    }

                                </select>
                            </div>
                            <div className="col-span-8 grid grid-cols-1">
                                <label htmlFor="direction">Instruction of administration</label>
                                <select name="direction" value={medicineForm?.direction} onChange={handleChange}>
                                    <option selected>select instruction</option>
                                    {
                                        DirectionAdministration?.map((Mdata,index)=><option key={index} value={Mdata}>{Mdata}</option>)
                                    }
                                </select>
                            </div>
                        </div>
                        <div className="grid grid-cols-3 items-center gap-x-2">
                            <div className="grid grid-cols-1">
                                <label htmlFor="frequency">Frequency of Dose</label>
                                <select name="frequency" value={medicineForm?.frequency} onChange={handleChange}>
                                    <option selected>select frequency</option>
                                    {
                                        DoseFrequency?.map((Mdata,index)=><option key={index} value={Mdata}>{Mdata}</option>)
                                    }

                                </select>
                            </div>
                            <div className="grid grid-cols-1">
                                <label htmlFor="duration">Dose Interval</label>
                                <input type="text" value={medicineForm?.duration} name="duration" onChange={handleChange} placeholder="duration"/>
                            </div>
                            <div className="grid grid-cols-1">
                                <label htmlFor="duration_unit">Duration Unit</label>
                                <select name="duration_unit" value={medicineForm?.duration_unit} onChange={handleChange}>
                                    <option selected>select duration unit</option>
                                    {
                                        DosefrequencyDurationUnit?.map((Mdata,index)=><option key={index} value={Mdata}>{Mdata}</option>)
                                    }
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
export default AddMedicine;