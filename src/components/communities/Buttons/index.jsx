import "./index.css";

export function Button({ type = "primary", size = "medium", ...otherProps }) {
    return (
        <a className={`button ${type} ${size}`} {...otherProps} />
    )
}