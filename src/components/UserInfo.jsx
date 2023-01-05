import Avatar from "./Avatar"

export const UserInfo =(props)=>{
    return(
        <div>
            <Avatar ava={props.userdata}/>
            <div className="userInfo-name">{props.userdata.name}</div>
        </div>
    )
}