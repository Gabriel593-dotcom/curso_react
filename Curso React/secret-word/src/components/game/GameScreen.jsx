import Style from "./GameScreen.css";

const GameScreen = ({ verifyLetter }) => {
  return (
    <div>
      <h1>Game</h1>
      <button onClick={verifyLetter}>Finalizar Jogo</button>
    </div>
  );
};

export default GameScreen;
