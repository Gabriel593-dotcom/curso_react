import React from "react";
import Style from "./StartScreen.css";

function StartScreen({ startGame }) {
  return (
    <div className="start">
      <h1>Secret Word</h1>
      <p>clique no botão abaixo para iniciar o jogo</p>
      <button onClick={startGame}>Iniciar</button>
    </div>
  );
}

export default StartScreen;
