import "./index.css";

export default function DisplayBar({ name, ...props }) {
  return (
    <div className="display-bar">
      <h4>{name}</h4>
    </div>
  );
}
