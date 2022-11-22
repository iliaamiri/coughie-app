import "./index.css";
import { useState } from "preact/hooks";

export default function MyProgress() {
  return (
    <div className="card">
      <p>Smoke Free</p>
      <div className="d-flex w-100 justify-content-between">
        <p>months</p>
        <p>Days</p>
        <p>Hours</p>
      </div>
      <div className="d-flex w-100 justify-content-between">
        <p>Money Saved</p>
        <p>e-cigareetes</p>
      </div>
      <div className="d-flex w-100 justify-content-between">
        <p>life(days)</p>
        <p>time saved(days)</p>
      </div>
    </div>
  );
}
