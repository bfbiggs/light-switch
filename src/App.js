import React from "react";

function App() {
  const [status, toggleLight] = React.useState(false);

  return (
    <div className={`room${status ? " on" : ""}`}>
      <div className="surface floor" />
      <div className="surface left-wall" />
      <div className="surface right-wall" />
      <div className="surface center-wall" />
      <div className="surface window" />
      <div className="surface ceiling" />
      <div className="surface light" />
      <div className="surface switch">
        <button
          className={`switch-click${status ? " on" : ""}`}
          onClick={() => toggleLight(!status)}
          data-testid="switch-button"
        ></button>
      </div>
    </div>
  );
}

export default App;
