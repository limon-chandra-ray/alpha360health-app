
const AllPrescriptionTable=({prescriptionList})=>{
    return<>
    <div className="overflow-x-auto py-4">
        <table className="table">
            {/* head */}
            <thead className="bg-blue-600 text-slate-100 rounded-md">
                <tr className="rounded-md">
                    <th>SL <br />No</th>
                    <th>Patient Name</th>
                    <th>Patient Id</th>
                    <th>Patient Type</th>
                    <th>Chief Complaint</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    prescriptionList?.map((appoinment,index)=>{
                        return (
                            <tr key={index}>
                                <th>{index+1}</th>
                                <td>{appoinment?.patient_name}</td>
                                <td>{appoinment?.patientId}</td>
                                <td>{appoinment?.patient_type}</td>
                                <td>{appoinment?.chief_complaint}</td>
                                <td className="flex items-center gap-x-3">
                                    <a href={`/all-prescription/${appoinment?._id}/view`} className="py-1 px-5 rounded-md bg-orange-500 text-white">View</a>
                                </td>
                            </tr>
                        )
                    })
                }
            
            </tbody>
        </table>
    </div>
    </>
}
export default AllPrescriptionTable;