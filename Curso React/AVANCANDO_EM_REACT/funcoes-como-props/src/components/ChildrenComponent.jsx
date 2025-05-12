import React from "react";

const ChildrenComponent = (props) => {
  const { showMessage } = props;
  return (
    <div>
      <p>
        Tem a possibilidade de enviarmos funções como propriedades para
        componentes filhos no React. Como no exemplo abaixo, que envio uma
        função simples que imprime uma mensagem como prop para esse componente.
        Clique no botão abaixo para dar uma olhada:
      </p>
      <button onClick={showMessage}>Clique aqui para mostrar a mensagem</button>
    </div>
  );
};

export default ChildrenComponent;
