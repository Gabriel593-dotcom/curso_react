import logo from "./logo.svg";
import "./App.css";
import Forest from "./assets/img_2.webp";

function App() {
  return (
    <div className="App">
      <h1>Avançando em React</h1>
      <img src="/img_1.webp" alt="Paisagem balão" />

      {/*Abordagem utilizando importação da imagem*/}
      <img src={Forest} alt="Paisagem" />
    </div>
  );
}

export default App;
