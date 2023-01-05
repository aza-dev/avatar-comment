import { Card } from "./ui/Card";
import { UserInfo } from "./UserInfo";
import './Comment.css'

function Comment(props) {
const options = { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric' };
const newDate = new Intl.DateTimeFormat('ru-RU', options).format(props.date)
const onlyWeekday = newDate.split(',')[0]
const onlyDate = newDate.split(',')[1]

    return (
        <Card className="comment">
            <div className="userInfo">
                <UserInfo userdata={props.author}/>
            </div>
            <div className="comment-text">{props.text}</div>
            <div className="comment-date">{onlyDate}</div>
            <div className="comment-date">{onlyWeekday}</div>
        </Card>
    )
}

export default Comment;