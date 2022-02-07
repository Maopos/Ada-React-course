import { useState } from "react";

const Formulario = () => {
  const [datos, setDatos] = useState({
    nombre: "",
    apellido: "",
  });

  const handleInputs = (e) => {
    setDatos({
      ...datos,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if ([datos.nombre, datos.apellido].includes("")) {
      console.log("error");
      return;
    }

    console.log(datos.nombre, datos.apellido);
  };

  return (
    <div>
      <center>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="nombre">Nombre</label>
            <input
              id="nombre"
              name="nombre"
              type="text"
              placeholder="Agrega un nombre"
              onChange={handleInputs}
            />
          </div>
          <div>
            <label htmlFor="apellido">Apellido</label>
            <input
              id="apellido"
              name="apellido"
              type="text"
              placeholder="Agrega un apellido"
              onChange={handleInputs}
            />
          </div>
          <button>Enviar</button>
        </form>
      </center>
    </div>
  );
};

export default Formulario;
