import "./index.css";
import {Button} from "../Buttons/index.jsx";
import {OnlineBadge} from "../OnlineBadge/index.jsx";
import {MemberListItem} from "../MemberListItem/index.jsx";
import {randomIntFromInterval} from "../../../lib/utils.js";
import {useEffect, useState} from "preact/hooks";
import * as userService from "../../../lib/services/user.service.js";

export function GroupBubbleModal({group, onClose, onJoin, onLeave}) {
    const [membersList, setMembersList] = useState(null);

    useEffect(() => {
        setMembersList(userService.findUsersByGroupId(group.id));
    }, []);

    return (
        <div className={'group-bubble-modal-backdrop'}>
            <div className={'group-bubble-modal'}>
                <div className={'modal-header'}>
                    <img src="/assets/SVG/close-icon.svg" style={{opacity: 0}} alt=""/>
                    <h3 className={'modal-title'}>INFO</h3>
                    <img src="/assets/SVG/close-icon.svg" alt="" onClick={() => onClose()}/>
                </div>
                <div className={'group-bubble-modal-wrapper'}>
                    <div className={'modal-description-container'}>
                        <div className={'description-section'}>
                            <span>Name:</span>
                            <p>{group.name}</p>
                        </div>
                        <div className={'description-section'}>
                            <span>Description:</span>
                            <p>{group.description}</p>
                        </div>
                    </div>
                    <div className={'modal-member-list-container'}>
                        <div className={'meta-info-bar'}>
                            <div className={'flex flex-row align-items-center'}>
                                <img src="/assets/SVG/user-icon.svg" alt=""/>
                                <span>{group.membersIds.length}</span>
                            </div>
                            <div className={'flex flex-row align-items-center'}>
                                <OnlineBadge/>
                                <span>{randomIntFromInterval(0, group.membersIds.length)}</span>
                            </div>
                        </div>
                        <div className={'member-list'}>
                            {
                                !membersList ? (
                                    <div>Loading...</div>
                                ) : membersList.map((member) => (
                                    <MemberListItem member={member} />
                                ))
                            }
                        </div>
                    </div>
                    <div className={'modal-action-buttons-container'}>
                        {
                            onJoin !== undefined ? (
                                <>
                                    <Button type={"secondary"} size={"x-large"} onClick={() => onClose()}>Close</Button>
                                    <Button type={"primary"} size={"x-large"}
                                            onClick={() => onJoin(group)}>Join</Button>
                                </>
                            ) : (
                                <>
                                    <Button type={"primary"} size={"x-large"} onClick={() => onClose()}>Close</Button>
                                    <Button type={"secondary"} size={"x-large"}
                                            onClick={() => onLeave(group)}>Leave</Button>
                                </>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}