import './Avatar.css'
const Avatar = (props)=>{
    return(
        <div>
            <img className="avatar" src={props.ava.avatarUrl} alt="avatar-img" />
        </div>
    )
}

export default Avatar;