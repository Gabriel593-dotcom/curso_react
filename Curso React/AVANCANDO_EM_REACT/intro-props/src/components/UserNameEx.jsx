import { useState } from "react";

const UserNameEx = (props) => {
  {
    /* Exemplo básico utilizando props. */
  }
  const [userName] = useState(props.name);

  return (
    <div>
      <h3>the user name is: {userName}</h3>
    </div>
  );
};

export default UserNameEx;
