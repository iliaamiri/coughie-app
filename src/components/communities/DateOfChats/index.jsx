import "./index.css";
import {timeAgo} from "../../../lib/utils.js";

export function DateOfChats({ timestamp }) {

    return (
        <h4 className={'date-of-chats'}>{ timeAgo(timestamp) }</h4>
    );
}