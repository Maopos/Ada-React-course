import { useState } from "react";
import Mensaje from "./Mensaje";
import close from "../img/delete.ico";

const Modal = ({ setModal, tareas, setTareas }) => {
  const [tarea, setTarea] = useState("");
  const [error, setError] = useState(false);

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
      id: generateId(),
    };

    setTareas([...tareas, nuevaTarea]);
    setModal(false);
  };

  return (
    <div className="modal">
      <img src={close} alt="close" id="close" onClick={() => setModal(false)} />
      <div className="card">
        <form onSubmit={handleSubmit}>
          {error ? <Mensaje sty={"invalida"} msg="Tarea invalida..." /> : null}
          <center>
            <label htmlFor="tarea">Añade una tarea</label>
          </center>
          <input
            className="inputModal nuevaTarea"
            type="text"
            id="tarea"
            placeholder="Nueva Tarea"
            value={tarea}
            onChange={(e) => setTarea(e.target.value)}
          />
          <input className="inputModal agregar" type="submit" value="Agregar" />
        </form>
      </div>
    </div>
  );
};

export default Modal;
