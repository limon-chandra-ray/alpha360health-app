const InformationList=({listValue})=>{
    return <>
        <div className="pl-5">
            <ul className="list-inside list-disc ">
                {
                    listValue?.map((com,index)=><li key={index}>{com} </li>)
                }
            </ul>
        </div>
        
    </>
}
export default InformationList;