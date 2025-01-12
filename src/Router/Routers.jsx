import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../component/page/Home/Home";
import Appointment from "../component/page/Appoinment/Appoinment";
import AppointmentCreate from "../component/page/Appoinment/Appoinment-Create";
import Consultent from "../component/page/Consultation/Consultation";
import AllPrescription from "../component/page/All-Prescription/All-Presription";
import CreatePrescription from "../component/page/Prescription/CreatePrescription";

const router = createBrowserRouter(
    [
        {
            path:"/",
            element:<App/>,
            children:[
                {
                    path:"/",
                    element: <Home/>
                },
                {
                    path:"/appoinment",
                    element:<Appointment/>
                },
                {
                    path:"/appoinment-create",
                    element:<AppointmentCreate/>
                },
                {
                    path:"/consultation",
                    element:<Consultent/>
                },
                {
                    path:"/all-prescription",
                    element:<AllPrescription/>
                },
                {
                    path:"/appoinment/:Id/prescription-create",
                    element:<CreatePrescription/>
                }
            ]
        }
    ]
)
export default router;