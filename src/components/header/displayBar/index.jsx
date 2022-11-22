import "./index.css";

export default function DisplayBar({ name, ...props }) {
  return (
    <div className="display-bar">
      <h1>{name}</h1>
    </div>
  );
}
