import "./index.css";
import {useParams} from "react-router-dom";
import {OnlineBadge} from "../../../components/communities/OnlineBadge/index.jsx";
import {DateOfChats} from "../../../components/communities/DateOfChats";
import {ChatBubble} from "../../../components/communities/ChatBubble/index.jsx";
import {useEffect, useRef, useState} from "preact/hooks";
import {GroupBubbleModal} from "../../../components/communities/GroupBubbleModal/index.jsx";

export function Chat() {
    const {chatroomId} = useParams();
    const groupData = useRef(null).current;
    const [isGroupInfoModalOpen, setIsGroupInfoModalOpen] = useState(false);

    useEffect(() => {
        // TODO: fill the groupData
    }, []);

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
        console.log("clicked send.  text:", newMessageValue)
    };
    const handleClickAttachment = () => {
        console.log("clicked attachments.")
    };

    const handleLeave = () => {
        console.log("user wants to leave");
    };

    return (
        <>
            {isGroupInfoModalOpen && <GroupBubbleModal onClose={() => setIsGroupInfoModalOpen(false)} onLeave={handleLeave} groupId={chatroomId}/>}
            <header className={"chat-header-container"}>
                <div className={"top-navbar-container"}>
                    <div className={'icon-placeholder'}>
                        <img src="/src/assets/SVG/back-arrow.svg" alt="back arrow" onClick={() => handleClickBackArrow()}/>
                    </div>
                    <div className={""}>
                        <h2 className={'group-title'}>title</h2>
                        <div className={'meta-info-top'}>
                            <div className={'flex flex-row align-items-center'}>
                                <img src="/src/assets/SVG/user-icon.svg" alt=""/>
                                <span>20</span>
                            </div>
                            <div className={'flex flex-row align-items-center'}>
                                <OnlineBadge size={"xs"}/>
                                <span>20</span>
                            </div>
                        </div>
                    </div>
                    <div className={'icon-placeholder'}>
                        <img src="/src/assets/SVG/people.svg" alt="Icon of a group" onClick={() => handleClickGroupIcon()}/>
                    </div>
                </div>
            </header>
            <main className={"chatroom-container"}>
                <DateOfChats timestamp={Date.now() - 350000000}/>
                <ChatBubble
                    isMe={false}
                    user={{name: "Ben", avatar: "/src/assets/profileAvatars/ben-blennerhassett-ZXfUUM_LR0k-unsplash.jpg"}}
                    message={{ createdAt: Date.now() - 3000000, messageText: "lorem ijkldjkl jlkadj klfd lsafsdkafj dklajd lorem ijkldjkl jlkadj klfd lsafsdkafj dklajd lorem ijkldjkl jlkadj klfd lsafsdkafj dklajd lorem ijkldjkl jlkadj klfd lsafsdkafj dklajd lorem ijkldjkl jlkadj klfd lsafsdkafj dklajd"}}
                />
                <ChatBubble
                    isMe={false}
                    user={{name: "Jimy", avatar: "/src/assets/profileAvatars/jimmy-fermin-bqe0J0b26RQ-unsplash.jpg" }}
                    message={{ createdAt: Date.now() - 3000000, messageText: "Hi, I’m Brian Lee. I want to quit vaping. This is going to be a journey for me and I see myself ready for it. "}}
                />
                <DateOfChats timestamp={Date.now() - 200000000}/>
                <ChatBubble
                    isMe={true}
                    user={{name: "Julian", avatar: "/src/assets/profileAvatars/julian-wan-WNoLnJo7tS8-unsplash.jpg" }}
                    message={{ createdAt: Date.now() - 3000000, messageText: "Hi, I’m Thomas Hane. I want to quit vaping. This is going to be a journey for me and I see myself ready for it.  Hi, I have no name and lastname. I want to quit vaping. This is going to be a journey for me and I see myself ready for it. "}}
                />
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