import AppoinmentDelete from "./AppoinmentDelete";
import AppoinmentEdit from "./AppoinmentEdit";

const AppoinmentTable=()=>{
    return<>
    <div className="overflow-x-auto py-4">
        <table className="table">
            {/* head */}
            <thead className="bg-blue-600 text-slate-100 rounded-md">
                <tr className="rounded-md">
                    <th>SL <br />No</th>
                    <th>Patient Name</th>
                    <th>Patient Id</th>
                    <th>Phone Number</th>
                    <th>Patient Type</th>
                    <th>Payment <br /> Status</th>
                    <th>Chief Complaint</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
            {/* row 1 */}
            <tr>
                <th>1</th>
                <td>Cy Ganderton</td>
                <td>Quality Control Specialist</td>
                <td>Blue</td>
                <td>Cy Ganderton</td>
                <td>Quality Control Specialist</td>
                <td>Quality Control Specialist</td>
                <td className="flex items-center gap-x-3">
                    <AppoinmentEdit/>
                    <AppoinmentDelete/>
                </td>
            </tr>
            </tbody>
        </table>
    </div>
    </>
}
export default AppoinmentTable;