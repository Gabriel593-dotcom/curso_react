import "./App.css";
import UserNameEx from "./components/UserNameEx";
import { useState } from "react";

function App() {
  const [userName] = useState("Gabriel");
  return (
    <div className="App">
      <UserNameEx name={userName} />
    </div>
  );
}

export default App;
