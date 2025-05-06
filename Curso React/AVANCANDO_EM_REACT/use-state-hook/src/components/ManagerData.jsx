import { useState } from "react";

const ManagerData = () => {
  {
    /*O useState é um hook que gerencia o estado de uma variavel funcional dentro de um componente,
    permitindo que os valores dos componentes sejam manipulados de forma mais livre, sem que a variavel precise 
    ser um atributo de uma classe.
    A função do useState retorna um array com dois elementos: 
        1 - o valor atual do estado
        2 - uma função para atualizar esse estado.
    Suas principais funções, são: 
        - Armezenar dados que podem mudar ao longo do tempo
        - Fazer com que o componente re-renderize quando o estado muda
        - Gerenciar o estado local do componente
    */
  }

  const [number, setNumber] = useState(10);

  return (
    <div>
      <button onClick={() => setNumber(20)}>
        CLIQUE AQUI PARA ALTERAR O VALOR
      </button>
      <p>{number}</p>
    </div>
  );
};

export default ManagerData;
