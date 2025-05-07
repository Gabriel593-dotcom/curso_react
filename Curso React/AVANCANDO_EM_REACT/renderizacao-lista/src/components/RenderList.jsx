import { useState } from "react";
import "./RenderList.css";

const RenderList = () => {
  const [listNames] = useState(["Gabriel", "Matheus", "José"]);
  const [users] = useState([
    { id: 2, name: "Gabriel", age: 25 },
    { id: 1, name: "Matheus", age: 26 },
    { id: 3, name: "José", age: 27 },
  ]);

  return (
    <div>
      {/*Exemplo de renderização de uma lista com JSX*/}
      {/*Quando trabalhando com  listas, o react pede um atributo key (não é obrigatório, mas é bom ter), 
    \que é uma identificação única do elemento que está sendo renderizado. 
    Isso ajuda nas manipulações do React nos elementos da lista*/}
      <ul>
        {listNames.map((name, index) => (
          <li key={index} className="item-lista">
            {name}
          </li>
        ))}
      </ul>
      <ul>
        {users.map((user) => (
          <li className="item-lista" key={user.id}>
            {user.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RenderList;
