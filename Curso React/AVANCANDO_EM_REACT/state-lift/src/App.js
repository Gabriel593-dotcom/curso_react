import logo from "./logo.svg";
import "./App.css";
import Message from "./components/Message";
import MessageMaker from "./components/MessageMaker";
import { useState } from "react";

function App() {
  const [message, setMessage] = useState("");

  return (
    <div className="App">
      <Message message={message} />
      <MessageMaker setMessage={setMessage} />
    </div>
  );
}

export default App;
