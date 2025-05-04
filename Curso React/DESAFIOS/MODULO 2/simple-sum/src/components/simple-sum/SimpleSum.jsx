import { useState } from "react";
import "./SimpleSum.css";

const SimpleSum = () => {
  let numberOne = 10;
  let numberTwo = 15;
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked((prev) => !prev);
  };

  return (
    <div className="container">
      <div className="labels-container">
        <label htmlFor="">{numberOne}</label> +
        <label htmlFor="">{numberTwo}</label> =
        {isClicked ? <label>{numberOne + numberTwo}</label> : ""}
      </div>

      <button onClick={handleClick}>sum</button>
    </div>
  );
};

export default SimpleSum;
