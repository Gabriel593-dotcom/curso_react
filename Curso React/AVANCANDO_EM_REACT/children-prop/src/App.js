import logo from "./logo.svg";
import "./App.css";
import ChildrenExContainer from "./components/ChildrenExContainer";

function App() {
  return (
    <div className="App">
      <ChildrenExContainer>
        <p>Enviando esse conteudo como props para o componente filho</p>
      </ChildrenExContainer>
    </div>
  );
}

export default App;
