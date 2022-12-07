import {useParams} from "react-router-dom";

export function Chat() {
    const { chatroomId } = useParams();

    return (
        <h1>Welcome to Chatroom {chatroomId}</h1>
    )
}