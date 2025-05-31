import { useEffect, useState } from "react";
import { crearCita, actualizarCita } from "../services/api";

export default function CitaFormulario({ citaEditando, onGuardado }) {
  const [formulario, setFormulario] = useState({
    cliente: "",
    fecha: "",
    hora: "",
    servicio: "",
    notas: "",
  });

  useEffect(() => {
    if (citaEditando) {
      setFormulario(citaEditando);
    }
  }, [citaEditando]);

  const manejarCambio = (e) => {
    setFormulario({ ...formulario, [e.target.name]: e.target.value });
  };

  const manejarEnvio = async (e) => {
    e.preventDefault();
    if (citaEditando) {
      await actualizarCita(citaEditando.id, formulario);
    } else {
      await crearCita({ ...formulario, estado: "pendiente" });
    }
    setFormulario({
      cliente: "",
      fecha: "",
      hora: "",
      servicio: "",
      notas: "",
    });
    onGuardado();
  };

return (
  <div className="card">
    <form onSubmit={manejarEnvio}>
      <h2>{citaEditando ? "Editar Cita" : "Nueva Cita"}</h2>
      <input name="cliente" placeholder="Cliente" value={formulario.cliente} onChange={manejarCambio} required />
      <div className="input-wrapper" onClick={() => document.getElementById("fecha").showPicker?.()}>
        <input type="date" id="fecha" name="fecha" value={formulario.fecha} onChange={manejarCambio} required/></div>
    <div className="input-wrapper" onClick={() => document.getElementById("hora").showPicker?.()}>
        <input type="time" id="hora" name="hora" value={formulario.hora} onChange={manejarCambio} required/></div>

      <select name="servicio" value={formulario.servicio} onChange={manejarCambio} required>
        <option value="">Seleccione servicio</option>
        <option>Corte de cabello</option>
        <option>Consulta médica</option>
        <option>Soporte técnico</option>
      </select>
      <textarea name="notas" placeholder="Notas" value={formulario.notas} onChange={manejarCambio}></textarea>
      <button type="submit">{citaEditando ? "Actualizar" : "Guardar"} cita</button>
    </form>
  </div>
);
}
