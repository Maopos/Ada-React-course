import React, { useState } from "react";

const Formularios2 = () => {
  //
  const [nombre, setNombre] = useState("");
  const [lenguaje, setLenguaje] = useState("");
  const [ide, setIde] = useState("");
  const [aceptaTerminos, setAceptaTerminos] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if ([nombre, lenguaje, ide].includes("") || !aceptaTerminos) {
      console.log('Llena todos los campos...');
      
      return;
    }

    const datos = {
      nombre,
      lenguaje,
      ide,
      aceptaTerminos
    };

    console.log(datos);

    setNombre("");
    setLenguaje("");
    setIde("");
    setAceptaTerminos(false);
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
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
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
              onChange={(e) => setLenguaje(e.target.value)}
              checked={lenguaje === "html"}
            />
            <label htmlFor="Html">Html</label>
            <input
              type="radio"
              id="css"
              name="lenguaje"
              value="css"
              onChange={(e) => setLenguaje(e.target.value)}
              checked={lenguaje === "css"}
            />
            <label htmlFor="css">Css</label>
            <input
              type="radio"
              id="javascript"
              name="lenguaje"
              value="javascript"
              onChange={(e) => setLenguaje(e.target.value)}
              checked={lenguaje === "javascript"}
            />
            <label htmlFor="javascript">Javascript</label>
            <input
              type="radio"
              id="react"
              name="lenguaje"
              value="react"
              onChange={(e) => setLenguaje(e.target.value)}
              checked={lenguaje === "react"}
            />
            <label htmlFor="react">React</label>
            <p>Selecciona tu Ide favorito</p>
            <select
              name="ide"
              id="ide"
              onChange={(e) => setIde(e.target.value)}
              value={ide || ""}
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
              checked={aceptaTerminos}
              onChange={(e) => setAceptaTerminos(e.target.checked)}
            />
          </div>
          <br />
          <input type="submit" />
        </form>
      </center>
    </div>
  );
};

export default Formularios2;
