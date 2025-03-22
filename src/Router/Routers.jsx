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
import ProtectedRouter from "./ProtectedRouter";

const router = createBrowserRouter(
    [
        {
            path:"/",
            element:<App/>,
            children:[
                {
                    path:"/",
                    element: <ProtectedRouter children={Home}/>
                       
                            
                },
                {
                    path:"/appoinment",
                    element:<ProtectedRouter children={Appointment}/>,
                    // loader:()=>fetch(`${BaseUrl}appoinments`)
                },
                {
                    path:"/appoinment-create",
                    element:<ProtectedRouter children ={AppointmentCreate}/>
                },
                {
                    path:"/consultation",
                    element:<ProtectedRouter children={Consultent}/>
                },
                {
                    path:"/all-prescription",
                    element:<ProtectedRouter children={AllPrescription}/>
                },
                {
                    path:"/appoinment/:Id/prescription-create",
                    element:<ProtectedRouter children={CreatePrescription}/>
                },
                {
                    path:"/all-prescription/:Id/view",
                    element:<ProtectedRouter children={Prescription}/>
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