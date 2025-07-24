import Style from "./EndScreen.css";

const EndScreen = ({ retry }) => {
  return (
    <div>
      <h1>Game Over</h1>
      <button onClick={retry}>Resetar o jogo</button>
    </div>
  );
};

export default EndScreen;
