const CreateButton=({a_href,bg_color,text_color,text})=>{
    return <a href={a_href} className={`${bg_color} ${text_color} rounded-md py-2 px-3`}>{text}</a>
}
export default CreateButton;