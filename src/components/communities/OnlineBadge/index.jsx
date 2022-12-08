import "./index.css";

export function OnlineBadge({ size = "s"}) {
    return (
        <div className={`online-badge ${size}`}></div>
    );
}