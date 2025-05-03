import { useState } from "react";
import "./OnClickEvent.css";

const OnClickEvent = (e) => {
  let eventData = e;
  console.log(eventData);
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(true);
  };

  return (
    <div className="container">
      <button onClick={handleClick}>Clique aqui</button>
      {clicked ? <p>You clicked!</p> : ""}
    </div>
  );
};

export default OnClickEvent;
