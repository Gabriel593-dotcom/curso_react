import logo from "./logo.svg";
import "./App.css";
import FormularioEx from "./components/FormularioEx";

function App() {
  return (
    <div className="App">
      <h1>FORM</h1>
      <FormularioEx user={{ name: "Gabriel", email: "gabriel@gmail.com" }} />
    </div>
  );
}

export default App;
