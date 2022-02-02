import Tarea from "./Tarea";

const ListaTareas = ({ tareas }) => {
  return (
    <div className="listado">
      {tareas.map((i) => (
        <Tarea key={i.id} tarea={i.tarea} />
      ))}
    </div>
  );
};

export default ListaTareas;
