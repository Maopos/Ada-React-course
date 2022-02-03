import edit from "../img/edit.ico";
import trash from "../img/trash.ico";
import page from "../img/full_page.ico";
import { useState } from "react";

const Tarea = ({ tarea, setTareaEditar }) => {
  const [completado, setCompletado] = useState(false);

  return (
    <div>
      <div className="tarea">
        <div className="itemTarea">
          <input
            className="check"
            type="checkbox"
            onChange={() => setCompletado(!completado)}
          />
          <p className={completado ? "itemTarea completado" : "itemTarea"}>
            {tarea.tarea}
          </p>
        </div>
        <div>
          <img className="opciones" src={page} alt="page" />
          <img
            className="opciones"
            src={edit}
            alt="edit"
            onClick={() => {setTareaEditar(tarea)
            }}
          />
          <img className="opciones" src={trash} alt="trash" />
        </div>
      </div>
    </div>
  );
};

export default Tarea;
