import React, { useState } from "react";
import "./App.css";

export default function App() {
  const [state, setState] = useState(true);

  function handleChange(state) {
    setState(false);
    if (!state) {
      setState(true);
    }
  }

  return (
    <div className="container">
      <div className="header">
        <h1>Dark Mode Challenge</h1>
        <div type="button" className="imageContainer" onClick={handleChange}>
          <div className="moon" />
        </div>
      </div>
      <div className="text">
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
      </div>
      <input placeholder="Name"></input>
      <input placeholder="Email"></input>
      <div className="buttonContainer">
        <button className="red">Exit</button>
        <button className="green">Save</button>
      </div>
    </div>
  );
}
