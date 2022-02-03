import { useState, useEffect } from "react";
import Header from "./components/Header";
import ListaTareas from "./components/ListaTareas";
import Modal from "./components/Modal";

import "./App.css";

function App() {
  const [modal, setModal] = useState(false);
  const [tareas, setTareas] = useState([]);
  const [tareaEditar, setTareaEditar] = useState({});

  useEffect(() => {
    if (Object.keys(tareaEditar).length > 0) {
      setModal(true);
    }
  }, [tareaEditar]);

  return (
    <div>
      <Header setModal={setModal} />
      <ListaTareas tareas={tareas} setTareaEditar={setTareaEditar} />
      {modal ? (
        <Modal
          setModal={setModal}
          tareas={tareas}
          setTareas={setTareas}
          tareaEditar={tareaEditar}
          setTareaEditar={setTareaEditar}
        />
      ) : null}
    </div>
  );
}

export default App;
