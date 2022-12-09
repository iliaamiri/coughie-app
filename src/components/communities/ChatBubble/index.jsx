import "./index.css";
import {timezonedMoment} from "../../../lib/utils.js";

export function ChatBubble({ isMe = false, user, message }) {

    return (
        <div className={`chatbubble-container ${isMe ? 'me' : 'others'}`}>
            <div className={"chatbubble-avatar"}>
                <img src={user.imageUrl} alt=""/>
            </div>
            <div className={`chatbubble-bubble-container`}>
                <span>{user.uname}</span>
                <div className={`chatbubble-bubble-box`}>
                    <p>{message.messageText}</p>
                    <div className={`bubble-footer`}>
                        <span>{timezonedMoment(message.createdAt).format("h:m A")}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}