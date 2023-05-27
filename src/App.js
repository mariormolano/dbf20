import "./App.css";
import { useEffect, useState } from "react";
import { API, graphqlOperation } from "aws-amplify";
import { createTodo } from "./graphql/mutations";
import { listTodos } from "./graphql/queries";
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("tarea", task);
    const result = await API.graphql(
      graphqlOperation(createTodo, { input: task })
    );
    console.log("resultado", result);
  };

  useEffect(() => {
    const loadTask = async () => {
      const result = await API.graphql(graphqlOperation(listTodos));
      setTaskList(result.data.listTodos.items);
      console.log("Resultado: ", result.data.listTodos.items);
    };

    loadTask();
  }, []);

  return (
    <>
      <Header />
      <Formulario
        task={task}
        setTask={setTask}
        taskList={taskList}
        setTaskList={setTaskList}
        handleSubmit={handleSubmit}
      />
      <Footer />
    </>
  );
}

export default App;
