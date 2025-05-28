import { useState } from "react";
import formStyle from "./FormularioEx.module.css";

const FormularioEx = ({ user }) => {
  const [name, setName] = useState(user?.name ?? "");
  const [email, setEmail] = useState(user?.email ?? "");
  const [bio, setBio] = useState();
  const [role, setRole] = useState();

  const handleName = (e) => {
    let value = e.target.value;
    setName(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(
      "Enviando o Formulario " +
        name +
        " - " +
        email +
        " - " +
        bio +
        " - " +
        role
    );

    setName("");
    setEmail("");
    setBio("");
    setRole("");
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

        <label className={formStyle.label_f}>
          <span>Bio:</span>
          <textarea
            name="bio"
            placeholder="desc. do usuário"
            onChange={(e) => setBio(e.target.value)}
            value={bio}
          ></textarea>
        </label>

        <label className={formStyle.label_f}>
          <span>Função do Sistema</span>
          <select
            name="role"
            onChange={(e) => setRole(e.target.value)}
            value={role}
          >
            <option value="user">Usuário</option>
            <option value="editor">Editor</option>
            <option value="adm">Administrador</option>
          </select>
        </label>

        <input className={formStyle.input_form} type="submit" value="Enviar" />
      </form>
    </div>
  );
};

export default FormularioEx;
