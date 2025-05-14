import formStyle from "./FormularioEx.module.css";

const FormularioEx = () => {
  return (
    <div>
      <form className={formStyle.form}>
        <label className={formStyle.label} htmlFor="name">
          Name:{" "}
        </label>

        <input
          className={formStyle.input_form}
          type="text"
          name="name"
          placeholder="Text your name"
        />

        {/*LABEL ENVOLVENDO INPUT*/}
        <label className={formStyle.label_f}>
          <span>Email: </span>
          <input type="text" name="email" placeholder="Text your email" />
        </label>

        <input className={formStyle.input_form} type="submit" value="Enviar" />
      </form>
    </div>
  );
};

export default FormularioEx;
