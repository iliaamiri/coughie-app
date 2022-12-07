import "./index.css";
import {OnlineBadge} from "../OnlineBadge";
import {Button} from "../Buttons/index.jsx";
import {useContext} from "preact/hooks";
import {UserActionsContext} from "../../../lib/contexts.js";

export function GroupBubble({ groupId, size = "large", isAnimated = false }) {
    const { onJoin, onView } = useContext(UserActionsContext);

    return(
        <div className={`group-bubble ${size} ${isAnimated ? 'animate' : ''}`}>
            <div className={`safe-wrapper ${size}`}>
                <h2>Raving over Vaping</h2>
                <div className={'meta-info'}>
                    <div className={'flex flex-row align-items-center'}>
                        <img src="src/assets/SVG/user-icon.svg" alt=""/>
                        <span>20</span>
                    </div>
                    <div className={'flex flex-row align-items-center'}>
                        <OnlineBadge />
                        <span>20</span>
                    </div>
                </div>
                <div className={'action-buttons-container'}>
                    <Button type={`secondary`} size={size} onClick={() => onView({groupId})}>View</Button>
                    <Button type={`primary`} size={size} onClick={() => onJoin({groupId})}>Join</Button>
                </div>
            </div>
        </div>
    );
}