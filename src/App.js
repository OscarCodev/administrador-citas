import Formulario from "./components/Formulario";
import "./styles.css";

export default function App() {
  return (
    <>
      <h1>Administrador de Pacientes</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Formulario />
          </div>
          <div className="one-half column"></div>
        </div>
      </div>
    </>
  );
}
