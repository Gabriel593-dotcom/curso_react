import { useState } from "react";
import "./OnClickEvent.css";

const OnClickEvent = (e) => {
  let eventData = e;
  console.log(eventData);
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    if (clicked) {
      setClicked(false);
      return;
    }

    setClicked(true);
  };

  const renderText = () => {
    return (
      <p>
        Just some random text to demonstrate how JSX can render HTML blocks with
        JS functions
      </p>
    );
  };
  return (
    <div className="container">
      <div className="simple-event-click">
        <button onClick={handleClick}>Click me</button>
        {clicked ? <p>You clicked!</p> : ""}
      </div>
      <div className="simple-render-function">{renderText()}</div>
    </div>
  );
};

export default OnClickEvent;
