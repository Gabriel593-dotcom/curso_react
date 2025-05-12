import React from "react";

const ChildrenExContainer = ({ children }) => {
  return (
    <div>
      <h1>Esse é o título do Container</h1>
      <p>
        O children props é uma propertie específica do React, que permite que
        possamos passar HTML para um componente filho e ele renderizar o HTML em
        seu interior, como no exemplo abaixo, que é um bloco HTML enviado como
        prop para esse componente:
      </p>
      {children}
    </div>
  );
};

export default ChildrenExContainer;
