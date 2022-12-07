import "./index.css";
import {OnlineBadge} from "../OnlineBadge";
import {Button} from "../Buttons/index.jsx";

export function GroupBubble({ size = "large", isAnimated = false }) {

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
                    <Button type={`secondary ${size}`}>View</Button>
                    <Button type={`primary ${size}`}>Join</Button>
                </div>
            </div>
        </div>
    );
}