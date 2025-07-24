//Css
import "./App.css";

//React
import { useCallback, useEffect, useState } from "react";

//data
import { wordList } from "./data/words";

//components
import StartScreen from "./components/start/StartScreen";
import GameScreen from "./components/game/GameScreen";
import EndScreen from "./components/end/EndScreen";

const stages = [
  { id: 1, name: "start" },
  { id: 2, name: "game" },
  { id: 3, name: "end" },
];

function App() {
  const [gameStage, setGameStage] = useState(stages[0].name);
  const [words] = useState(wordList);

  const startGame = () => {
    setGameStage(stages[1].name);
  };

  //process the letter input
  const verifyLetter = () => {
    setGameStage(stages[2].name);
  };

  //restart the game
  const retry = () => {
    setGameStage(stages[0].name);
  };

  return (
    <div className="App">
      {gameStage === "start" && <StartScreen startGame={startGame} />}
      {gameStage === "game" && <GameScreen verifyLetter={verifyLetter} />}
      {gameStage === "end" && <EndScreen retry={retry} />}
    </div>
  );
}

export default App;
