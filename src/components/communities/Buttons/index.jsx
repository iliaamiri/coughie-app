import "./index.css";

export function Button({ type = "primary", size = "medium", customClassNames, ...otherProps }) {
    return (
        <a className={`button ${type} ${size} ${customClassNames}`} {...otherProps} />
    )
}