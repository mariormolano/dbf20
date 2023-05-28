import "./App.css";
import {  useState } from "react";
import Formulario from "./Componets/Formulario/Formulario";
import Footer from "./Componets/Footer/Footer";
import Header from "./Componets/Header/Header";

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
    <>
      <Header />
      <Formulario
        task={task}
        setTask={setTask}
        taskList={taskList}
        setTaskList={setTaskList}
      />
      <Footer />
    </>
  );
}

export default App;
