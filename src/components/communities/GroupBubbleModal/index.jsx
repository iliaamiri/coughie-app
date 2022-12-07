import "./index.css";
import {Button} from "../Buttons/index.jsx";
import {OnlineBadge} from "../OnlineBadge/index.jsx";
import {MemberListItem} from "../MemberListItem/index.jsx";

export function GroupBubbleModal({groupId, onClose, onJoin}) {


    return (
        <div className={'group-bubble-modal-backdrop'}>
            <div className={'group-bubble-modal'}>
                <div className={'modal-header'}>
                    <img src="src/assets/SVG/close-icon.svg" style={{ opacity: 0 }} alt=""/>
                    <h3 className={'modal-title'}>INFO</h3>
                    <img src="src/assets/SVG/close-icon.svg" alt="" onClick={() => onClose()}/>
                </div>
                <div className={'group-bubble-modal-wrapper'}>
                    <div className={'modal-description-container'}>
                        <div className={'description-section'}>
                            <span>Name:</span>
                            <p>Sample Group Name</p>
                        </div>
                        <div className={'description-section'}>
                            <span>Description:</span>
                            <p>lorem ipsum idk what else ipsum lorem is 1930 fdj .</p>
                        </div>
                    </div>
                    <div className={'modal-member-list-container'}>
                        <div className={'meta-info-bar'}>
                            <div className={'flex flex-row align-items-center'}>
                                <img src="src/assets/SVG/user-icon.svg" alt=""/>
                                <span>20</span>
                            </div>
                            <div className={'flex flex-row align-items-center'}>
                                <OnlineBadge />
                                <span>20</span>
                            </div>
                        </div>
                        <div className={'member-list'}>
                            <MemberListItem />
                            <MemberListItem />
                            <MemberListItem />
                            <MemberListItem />
                        </div>
                    </div>
                    <div className={'modal-action-buttons-container'}>
                        <Button type={"secondary"} size={"x-large"} onClick={() => onClose()}>Close</Button>
                        <Button type={"primary"} size={"x-large"} onClick={() => onJoin({groupId})}>Join</Button>
                    </div>
                </div>
            </div>
        </div>
    );
}