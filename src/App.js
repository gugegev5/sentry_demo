import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <button
        onClick={() => {
          throw new Error("hello sentry");
        }}
      >
        Break the world
      </button>
    </div>
  );
}

export default App;
