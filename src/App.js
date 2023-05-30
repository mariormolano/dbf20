import "./App.css";
import { useState } from "react";
import { BrowserRouter } from "react-router-dom";


import Footer from "./Componets/Footer/Footer";
import Header from "./Componets/Header/Header";

//pages
import Home from "./Pages/Home/Home";
import RegistroChat from "./Pages/RegistroChat/RegistroChat";
import Galeria from "./Pages/Galeria/Galeria";
import Eventos from "./Pages/Eventos/Eventos";
import TiendaVirtual from "./Pages/TiendaVirtual/TiendaVirtual";

import { Route, Routes } from "react-router-dom";

function App() {
  const [task, setTask] = useState({
    nombre: "",
    apellido: "",
    telefono: "",
    direccion: "",
    rangoedad: "",
    email: "",
    eps: "",
    documento: "",
    atyc: "",
  });

  const [taskList, setTaskList] = useState([]);

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/registro-chat"
          element={
            <RegistroChat
              task={task}
              setTask={setTask}
              taskList={taskList}
              setTaskList={setTaskList}
            />
          }
        />
        <Route path="/galeria" element={<Galeria />} />
        <Route path="/eventos" element={<Eventos />} />
        <Route path="/tienda-virtual" element={<TiendaVirtual />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
