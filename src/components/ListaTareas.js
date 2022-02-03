import Tarea from "./Tarea";

const ListaTareas = ({ tareas, setTareaEditar }) => {
  return (
    <div className="listado">
      {tareas.map((i) => (
        <Tarea key={i.id} tarea={i} setTareaEditar={setTareaEditar} />
      ))}
    </div>
  );
};

export default ListaTareas;
