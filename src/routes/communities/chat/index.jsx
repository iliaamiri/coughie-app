import "./index.css";
import {useParams} from "react-router-dom";
import {OnlineBadge} from "../../../components/communities/OnlineBadge/index.jsx";
import {DateOfChats} from "../../../components/communities/DateOfChats";
import {ChatBubble} from "../../../components/communities/ChatBubble/index.jsx";
import {useEffect, useRef, useState} from "preact/hooks";
import {GroupBubbleModal} from "../../../components/communities/GroupBubbleModal/index.jsx";
import * as groupService from "../../../lib/services/group.service.js";
import * as messageService from "../../../lib/services/message.service.js";
import * as userService from "../../../lib/services/user.service.js";
import {randomIntFromInterval, timeAgo} from "../../../lib/utils.js";
import {useUser} from "../../../lib/hooks/useUser.jsx";

export function Chat() {
    const [user, isUserSetup] = useUser();

    const {chatroomId} = useParams();
    const groupData = useRef(null);
    const [isGroupDataLoaded, setIsGroupDataLoaded] = useState(false);

    const [chatMessages, setChatMessages] = useState(null);

    const [isGroupInfoModalOpen, setIsGroupInfoModalOpen] = useState(false);

    useEffect(() => {
        groupData.current = groupService.getGroupById(chatroomId);
        setIsGroupDataLoaded(true);
        setChatMessages(messageService.findAllMessagesByGroupId(chatroomId));
    }, []);

    useEffect(() => {
        if (chatMessages) {
            document.querySelector(".chatroom-container").scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
        }
    }, [chatMessages]);

    const [newMessageValue, setNewMessageValue] = useState('');

    const handleClickBackArrow = () => {
        console.log("back arrow clicked");
        window.history.back();
    };
    const handleClickGroupIcon = () => {
        console.log("group icon clicked");
        setIsGroupInfoModalOpen(true);
    };

    const handleSend = () => {
        console.log("clicked send.  text:", newMessageValue);
        if (newMessageValue.length < 1) {
            return;
        }
        const newMessage = messageService.addMessage({
            userId: user.id,
            groupId: chatroomId,
            messageText: newMessageValue,
            createdAt: Date.now(),
        });
        setChatMessages([...chatMessages, newMessage]);
    };
    const handleClickAttachment = () => {
        console.log("clicked attachments.")
    };

    const handleLeave = (group) => {
        userService.leaveGroup({groupId: chatroomId});
        window.location.href = '/communities';
    };

    const renderChat = () => {
        const grouped = {};
        chatMessages.map(message => {
            const time = timeAgo(message.createdAt);
            if (!grouped[time]) {
                grouped[time] = [];
            }

            grouped[time].push(message);
        });

        const result = [];
        for (const timeTitle in grouped) {
            result.push(
                <>
                    <DateOfChats timestamp={grouped[timeTitle][0].createdAt}/>
                    {grouped[timeTitle].map(message => {
                        const _user = userService.getUserById(message.userId);
                        return (
                            <ChatBubble
                                isMe={user.id === message.userId}
                                user={_user}
                                message={message}
                            />
                        );
                    })}
                </>
            );
        }
        return result;
    }

    return (!isGroupDataLoaded || !user) ? (
            <div>Loading...</div>
        ) : (
        <>
            {isGroupInfoModalOpen && <GroupBubbleModal onClose={() => setIsGroupInfoModalOpen(false)} onLeave={handleLeave} group={groupData.current}/>}
            <header className={"chat-header-container"}>
                <div className={"top-navbar-container"}>
                    <div className={'icon-placeholder'}>
                        <img src="/src/assets/SVG/back-arrow.svg" alt="back arrow" onClick={() => handleClickBackArrow()}/>
                    </div>
                    <div className={""}>
                        <h2 className={'group-title'}>{groupData.current.name}</h2>
                        <div className={'meta-info-top'}>
                            <div className={'flex flex-row align-items-center'}>
                                <img src="/src/assets/SVG/user-icon.svg" alt=""/>
                                <span>{groupData.current.membersIds.length}</span>
                            </div>
                            <div className={'flex flex-row align-items-center'}>
                                <OnlineBadge size={"xs"}/>
                                <span>{randomIntFromInterval(0, groupData.current.membersIds.length)}</span>
                            </div>
                        </div>
                    </div>
                    <div className={'icon-placeholder'}>
                        <img src="/src/assets/SVG/people.svg" alt="Icon of a group" onClick={() => handleClickGroupIcon()}/>
                    </div>
                </div>
            </header>
            <main className={"chatroom-container"}>
                {chatMessages && renderChat()}
            </main>
            <div className={'chat-nav-bar-container'}>
                <div className={'chat-input-box'}>
                    <input
                        type="text"
                        className={'message-box'}
                        placeholder={"Type here..."}
                        value={newMessageValue}
                        onChange={(e) => setNewMessageValue(e.target.value)}
                    />
                    <span className={'attachment-button'}>
                        <img src="/src/assets/SVG/attach-filled.svg" alt="" onClick={() => handleClickAttachment()}/>
                    </span>
                    <span className={'send-button'} onClick={() => handleSend()}>Send</span>
                </div>
            </div>
        </>
    )
}