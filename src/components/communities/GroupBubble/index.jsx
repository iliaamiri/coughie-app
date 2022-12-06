import "./index.css";
import {OnlineBadge} from "../OnlineBadge";

export function GroupBubble({ size = "large", isAnimated = false }) {

    return(
        <div className={`group-bubble ${size} ${isAnimated ? 'animate' : ''}`}>
            <div className={`safe-wrapper ${size}`}>
                <h2>Raving over Vaping</h2>
                <div className={'flex'}>
                    <div className={'flex flex-row align-items-center'}>
                        <img src="/assets/SVG/user-icon.svg" alt=""/>
                        <span>20</span>
                    </div>
                    <div className={'flex flex-row align-items-center'}>
                        <OnlineBadge />
                        <span>20</span>
                    </div>
                </div>
                <div>
                    <a href="">View</a>
                    <a href="">Join</a>
                </div>
            </div>
        </div>
    );
}