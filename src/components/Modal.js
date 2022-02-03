import { useState, useEffect } from "react";
import Mensaje from "./Mensaje";
import close from "../img/delete.ico";

const Modal = ({
  setModal,
  tareas,
  setTareas,
  tareaEditar,
  setTareaEditar,
}) => {
  const [tarea, setTarea] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [error, setError] = useState(false);

  useEffect(() => {
    if (Object.keys(tareaEditar).length > 0) {
      setTarea(tareaEditar.tarea);
      setDescripcion(tareaEditar.descripcion);
    }
  }, [tareaEditar]);

  const cerrarModal = () => {
    setModal(false);
    setTareaEditar({});
  };

  const generateId = () => {
    const random = Math.random().toString(36).substring(2);
    const dateNow = Date.now().toString(36);
    return random + dateNow;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if ([tarea].includes("") || tarea.length < 5) {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 1500);
      return;
    }

    const nuevaTarea = {
      tarea,
      descripcion,
    };

    if (tareaEditar.id) {
      nuevaTarea.id = tareaEditar.id;
      const updateTarea = tareas.map((i) =>
        i.id === tareaEditar.id ? nuevaTarea : i
      );
      setTareas(updateTarea);
      setTareaEditar({});
    } else {
      nuevaTarea.id = generateId();
      setTareas([...tareas, nuevaTarea]);
    }

    setModal(false);
  };

  return (
    <div className="modal">
      <img src={close} alt="close" id="close" onClick={() => cerrarModal()} />
      <div className="card">
        <form onSubmit={handleSubmit}>
          {error ? <Mensaje sty={"invalida"} msg="Tarea invalida..." /> : null}
          <center>
            <label htmlFor="tarea">
              {tareaEditar.tarea ? "Edita esta tarea" : "Añade una tarea"}
            </label>
          </center>
          <input
            className="nuevaTarea"
            type="text"
            id="tarea"
            placeholder="Nueva Tarea"
            value={tarea}
            onChange={(e) => setTarea(e.target.value)}
          />
          <textarea
            className="nuevaTarea"
            placeholder="Incluye una descripción"
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
          />
          <input
            className="agregar"
            type="submit"
            value={tareaEditar.tarea ? "Editar" : "Agregar"}
          />
        </form>
      </div>
    </div>
  );
};

export default Modal;
