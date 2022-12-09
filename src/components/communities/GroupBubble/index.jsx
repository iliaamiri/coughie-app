import "./index.css";
import {OnlineBadge} from "../OnlineBadge";
import {Button} from "../Buttons/index.jsx";
import {useContext} from "preact/hooks";
import {UserActionsContext} from "../../../lib/contexts.js";
import {randomIntFromInterval} from "../../../lib/utils.js";

export function GroupBubble({ group, size = "large", isAnimated = false }) {
    const { onJoin, onView } = useContext(UserActionsContext);

    return(
        <div className={`group-bubble ${size} ${isAnimated ? 'animate' : ''}`}>
            <div className={`safe-wrapper ${size}`}>
                <h2>{group.name}</h2>
                <div className={'meta-info'}>
                    <div className={'flex flex-row align-items-center'}>
                        <img src="public/assets/assets/SVG/user-icon.svg" alt=""/>
                        <span>{group.membersIds.length}</span>
                    </div>
                    <div className={'flex flex-row align-items-center'}>
                        <OnlineBadge />
                        <span>{randomIntFromInterval(0, group.membersIds.length)}</span>
                    </div>
                </div>
                <div className={'action-buttons-container'}>
                    <Button type={`secondary`} size={size} onClick={() => onView(group)}>View</Button>
                    <Button type={`primary`} size={size} onClick={() => onJoin(group)}>Join</Button>
                </div>
            </div>
        </div>
    );
}