import { useState } from "react";

const Forms = () => {
  const [usuario, setUsuario] = useState({
    nombre: "",
    lenguaje: "",
    ide: "",
    terminos: false,
  });

  const handleUsuario = (e) => {
    setUsuario({
      ...usuario,
      [e.target.name]: e.target.value,
    });
  };

  const handleChecked = (e) => {
    setUsuario({
      ...usuario,
      [e.target.name]: e.target.checked,
    });
  };

  const lenguajeUsuario = () => {
    if (usuario.ide === "vsc") {
      return "Visual Studio Code";
    } else if (usuario.ide === "atm") {
      return "Atom";
    } else if (usuario.ide === "sbt") {
      return "Sublime Text";
    } else if (usuario.ide === "ija") {
      return "IntelliJ Idea";
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (Object.keys(usuario).length < 1 || !usuario.terminos) {
      console.log("Llena todos los campos...");
      return;
    }

    const newUsuario = {
      nombre: usuario.nombre,
      lenguaje: usuario.lenguaje,
      terminos: usuario.terminos,
      ide: lenguajeUsuario(),
    };

    console.log(newUsuario);

    setUsuario({
      nombre: "",
      lenguaje: "",
      ide: "",
      terminos: false,
    });
  };

  return (
    <div>
      <center>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="nombre">Nombre: </label>
            <input
              id="nombre"
              type="text"
              name="nombre"
              value={usuario.nombre}
              onChange={handleUsuario}
              autoFocus
            />
          </div>
          <div>
            <h2>Elije un lenguaje</h2>

            <input
              type="radio"
              id="Html"
              name="lenguaje"
              value="html"
              onChange={handleUsuario}
              checked={usuario.lenguaje === "html"}
            />
            <label htmlFor="Html">Html</label>
            <input
              type="radio"
              id="css"
              name="lenguaje"
              value="css"
              onChange={handleUsuario}
              checked={usuario.lenguaje === "css"}
            />
            <label htmlFor="css">Css</label>
            <input
              type="radio"
              id="javascript"
              name="lenguaje"
              value="javascript"
              onChange={handleUsuario}
              checked={usuario.lenguaje === "javascript"}
            />
            <label htmlFor="javascript">Javascript</label>
            <input
              type="radio"
              id="react"
              name="lenguaje"
              value="react"
              onChange={handleUsuario}
              checked={usuario.lenguaje === "react"}
            />
            <label htmlFor="react">React</label>
            <p>Selecciona tu Ide favorito</p>
            <select
              name="ide"
              id="ide"
              onChange={handleUsuario}
              value={usuario.ide || ""}
            >
              <option value="">-- Selecciona --</option>
              <option value="vsc">Visual Studio Code</option>
              <option value="atm">Atom</option>
              <option value="sbt">Sublime Text</option>
              <option value="ija">IntelliJ Idea</option>
            </select>
            <br />
            <br />
            <label htmlFor="terminos">Acepto términos y condiciones</label>
            <input
              type="checkbox"
              name="terminos"
              id="terminos"
              checked={usuario.terminos}
              onChange={handleChecked}
            />
          </div>
          <br />
          <input type="submit" />
        </form>
      </center>
    </div>
  );
};

export default Forms;
