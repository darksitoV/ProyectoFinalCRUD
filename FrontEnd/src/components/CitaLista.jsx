import { useEffect, useState } from "react";
import { obtenerCitas, eliminarCita } from "../services/api";

export default function CitaLista({ onEditar }) {
  const [citas, setCitas] = useState([]);

  const cargarCitas = async () => {
    const data = await obtenerCitas();
    setCitas(data);
  };

  const borrar = async (id) => {
    if (confirm("¿Eliminar cita?")) {
      await eliminarCita(id);
      cargarCitas();
    }
  };

  useEffect(() => {
    cargarCitas();
  }, []);

  return (
<div className="tabla-citas">
  <h2>Listado de Citas</h2>
  {citas.length === 0 ? (
    <p>No hay citas registradas</p>
  ) : (
    <div className="tabla-scroll">
      <table>
        <thead>
          <tr>
            <th>Cliente</th>
            <th>Fecha</th>
            <th>Hora</th>
            <th>Servicio</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {citas.map((cita) => (
            <tr key={cita.id}>
              <td>{cita.cliente}</td>
              <td>{cita.fecha}</td>
              <td>{cita.hora}</td>
              <td>{cita.servicio}</td>
                <td>
                  <button className="btn-icono" onClick={() => onEditar(cita)} title="Editar">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M11 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-7"/>
                      <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>
                    </svg>
                  </button>
                        
                  <button className="btn-icono" onClick={() => borrar(cita.id)} title="Eliminar">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="3 6 5 6 21 6"/>
                      <path d="M19 6l-2 14a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2L5 6m5 0V4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2"/>
                      <line x1="10" y1="11" x2="10" y2="17"/>
                      <line x1="14" y1="11" x2="14" y2="17"/>
                    </svg>
                  </button>
                </td>

            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )}
</div>


  );
}
