import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const ProtectedRouter=({children:Component})=>{
    const [accountStatus,setAccountStatus] = useState(0);
    const [isLoading,setLoader] = useState(true)
    const location = useLocation();
    useEffect(()=>{
        const checkStatus=()=>{
            const status = localStorage.getItem("astatus");
            const statusJson = JSON.parse(status);
            setAccountStatus(statusJson === 1 ? statusJson: 0)
            setLoader(false)
        }
        checkStatus()
    },[])
    if (isLoading) {
        return <div>Loading...</div>; // Show a loading message while checking status
    }
    console.log("Account status",accountStatus)
    if(accountStatus === 0){
        console.log("Work")
        return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
    }
    return <Component/>;
 
}
export default ProtectedRouter;