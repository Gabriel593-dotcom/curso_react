import "./DinamicClassEx.css";

const DinamicClassEx = () => {
  const isThatClassStyle = true;

  return (
    <div>
      <p className={isThatClassStyle ? "p-comp-style-one" : "p-comp-style-two"}>
        Exemplo de classe dinamica com React
      </p>
    </div>
  );
};

export default DinamicClassEx;
