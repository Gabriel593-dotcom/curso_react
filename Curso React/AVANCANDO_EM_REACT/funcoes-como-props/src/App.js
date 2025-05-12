import logo from "./logo.svg";
import "./App.css";
import ChildrenComponent from "./components/ChildrenComponent";

function App() {
  const showMessage = () => {
    alert("Olha a mensagem!");
  };

  return (
    <div className="App">
      <ChildrenComponent showMessage={showMessage} />
    </div>
  );
}

export default App;
