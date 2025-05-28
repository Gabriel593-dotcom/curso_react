import { useState } from "react";
import formStyle from "./FormularioEx.module.css";

const FormularioEx = ({ user }) => {
  const [name, setName] = useState(user?.name ?? "");
  const [email, setEmail] = useState(user?.email ?? "");

  const handleName = (e) => {
    let value = e.target.value;
    setName(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Enviando o Formulario " + name + " - " + email);
  };

  return (
    <div>
      <form className={formStyle.form} onSubmit={handleSubmit}>
        <label className={formStyle.label} htmlFor="name">
          Name:
        </label>

        <input
          className={formStyle.input_form}
          type="text"
          name="name"
          placeholder="Text your name"
          onChange={handleName}
          value={name}
        />

        {/*LABEL ENVOLVENDO INPUT*/}
        <label className={formStyle.label_f}>
          <span>Email: </span>
          <input
            type="text"
            name="email"
            placeholder="Text your email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </label>

        <input className={formStyle.input_form} type="submit" value="Enviar" />
      </form>
    </div>
  );
};

export default FormularioEx;
