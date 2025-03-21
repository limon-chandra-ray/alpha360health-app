import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../component/page/Home/Home";
import Appointment from "../component/page/Appoinment/Appoinment";
import AppointmentCreate from "../component/page/Appoinment/Appoinment-Create";
import Consultent from "../component/page/Consultation/Consultation";
import AllPrescription from "../component/page/All-Prescription/All-Prescription";
import CreatePrescription from "../component/page/Prescription/CreatePrescription";
import { BaseUrl } from "../Constant/ApiDoamin";
import Prescription from "../component/page/Prescription/Prescription";
import SignUp from "../component/Authentication/Signup";
import Login from "../component/Authentication/Login";

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
                    element:<Appointment/>,
                    // loader:()=>fetch(`${BaseUrl}appoinments`)
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
                },
                {
                    path:"/all-prescription/:Id/view",
                    element:<Prescription/>
                }
            ]
        },
        {
            path:"/sign-up",
            element:<SignUp/>
        },{
            path:"/login",
            element:<Login/>
        }
    ]
)
export default router;