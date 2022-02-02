import edit from "../img/edit.ico";
import trash from "../img/trash.ico";

const Tarea = ({ tarea }) => {
  return (
    <div>
      <div className="tarea">
        <div className="itemTarea">
          <input className="check" type="checkbox" />
          <p className="itemTarea">{tarea}</p>
        </div>
        <div>
          <img className="opciones" src={edit} alt="edit" />
          <img className="opciones" src={trash} alt="trash" />
        </div>
      </div>
    </div>
  );
};

export default Tarea;
