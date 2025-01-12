
const ConsultationTable=()=>{
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
            <tr>
                <th>1</th>
                <td>Cy Ganderton</td>
                <td>Quality Control Specialist</td>
                <td>Blue</td>
                <td>Blue</td>
                <td className="flex items-center gap-x-3">
                    <a href="/appoinment/12/prescription-create" className="py-1 px-5 rounded-md bg-orange-500 text-white">Rx</a>
                </td>
            </tr>
            </tbody>
        </table>
    </div>
    </>
}
export default ConsultationTable;