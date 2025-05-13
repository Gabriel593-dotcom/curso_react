import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import UserDetails from "./components/UserDetails";

function App() {
  const DEFAULT_USER_DETAILS = [
    { id: 1, name: "Gabriel", age: 25, job: "Software programmer" },
    { id: 2, name: "Lucas", age: 22, job: "--" },
    { id: 3, name: "Fernando", age: 15, job: "Farmer" },
  ];
  const MINIMUM_AGE = 18;
  const [userDetails] = useState(DEFAULT_USER_DETAILS);

  return (
    <div className="App">
      {userDetails.map((user) => (
        <UserDetails key={user.id} user={user} />
      ))}
    </div>
  );
}

export default App;
