import "./RegistroChat.css";
import { API, graphqlOperation } from "aws-amplify";
import { createTodo } from "../../graphql/mutations";
import { Input, Button, CheckBox, Tittle } from "../../Componets/UI";

function Formulario({ task, setTask }) {
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("tarea", task);
    const result = await API.graphql(
      graphqlOperation(createTodo, { input: task })
    );
    console.log("resultado", result);
    alert("Registrado");
  };

  return (
    <div className="formulario">
      <Tittle value={"FORMATO DE INSCRIPCIÓN"} />
      <form className="taskform" onSubmit={handleSubmit}>
        <Input
          id="name"
          rot="-3.4deg"
          tr="-10px"
          ttr="-40px"
          required
          label="Nombre"
          bg={"/img/hoja_menu1.png"}
          value={task.nombre}
          onChange={(e) => setTask({ ...task, nombre: e.target.value })}
        />
        <Input
          id="secondname"
          rot="-3deg"
          tr="27px"
          ttr="15px"
          required
          label="Apellido"
          bg={"/img/hoja_menu2.png"}
          value={task.apellido}
          onChange={(e) => setTask({ ...task, apellido: e.target.value })}
        />
        <Input
          id="phone"
          rot="0deg"
          tr="-27px"
          ttr="-40px"
          required
          label="Teléfono"
          bg={"/img/hoja_menu3.png"}
          value={task.telefono}
          onChange={(e) => setTask({ ...task, telefono: e.target.value })}
        />
        <Input
          id="address"
          rot="10deg"
          tr="7px"
          ttr="30px"
          label="Dirección"
          bg={"/img/hoja_menu4.png"}
          value={task.direccion}
          onChange={(e) => setTask({ ...task, direccion: e.target.value })}
        />
        <Input
          id="age"
          rot="0deg"
          tr="-42px"
          ttr="-40px"
          label="Edad"
          bg={"/img/hoja_menu5.png"}
          value={task.rangoedad}
          onChange={(e) => setTask({ ...task, rangoedad: e.target.value })}
        />
        <Input
          id="email"
          rot="-2deg"
          tr="47px"
          ttr="0px"
          label="Correo Electrónico"
          bg={"/img/hoja_menu6.png"}
          value={task.email}
          onChange={(e) => setTask({ ...task, email: e.target.value })}
        />
        <Input
          id="eps"
          rot="5deg"
          tr="-40px"
          ttr="-30px"
          label="EPS"
          bg={"/img/hoja_menu7.png"}
          value={task.eps}
          onChange={(e) => setTask({ ...task, eps: e.target.value })}
        />
        <Input
          id="document"
          label="Cédula"
          rot="-5deg"
          tr="40px"
          ttr="40px"
          bg={"/img/hoja_menu8.png"}
          value={task.documento}
          onChange={(e) => setTask({ ...task, documento: e.target.value })}
        />

        <CheckBox
          value="Aceptar términos y condiciones  *"
          onChange={(e) => {
            const valor = e.target.value ? "veradero" : "falso";
            setTask({ ...task, atyc: valor });
          }}
        />
        <Button value="Registrar" />
      </form>
    </div>
  );
}

export default Formulario;
