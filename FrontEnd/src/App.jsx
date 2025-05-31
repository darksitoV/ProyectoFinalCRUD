import { useState } from "react";
import CitaFormulario from "./components/CitaFormulario";
import CitaLista from "./components/CitaLista";

function App() {
  const [citaEditando, setCitaEditando] = useState(null);
  const [refrescar, setRefrescar] = useState(false);

  const onCitaGuardada = () => {
    setCitaEditando(null);
    setRefrescar(!refrescar); // Forzar recarga
  };

  return (
<div className="app">
  <header>
    <h1>Sistema de Citas</h1>
  </header>

  <main className="contenedor-principal">
    <div className="formulario">
      <CitaFormulario citaEditando={citaEditando} onGuardado={onCitaGuardada} />
    </div>
    <div className="lista">
      <CitaLista key={refrescar} onEditar={setCitaEditando} />
    </div>
  </main>
</div>

  );
}

export default App;
