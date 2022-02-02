import { useState, useEffect } from "react";
import Header from "./components/Header";
import ListaTareas from "./components/ListaTareas";
import Modal from "./components/Modal";

import "./App.css";

function App() {
  const [modal, setModal] = useState(false);
  const [tareas, setTareas] = useState([]);

  useEffect(() => {
    
  }, [tareas]);

  return (
    <div>
      <Header setModal={setModal} />
      <ListaTareas tareas={tareas} />
      {modal ? (
        <Modal setModal={setModal} tareas={tareas} setTareas={setTareas} />
      ) : null}
    </div>
  );
}

export default App;
