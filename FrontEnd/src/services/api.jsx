const API_URL = 'http://localhost:3000/citas';

export const obtenerCitas = async () => {
  const res = await fetch(API_URL);
  return res.json();
};

export const crearCita = async (datos) => {
  const res = await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(datos),
  });
  return res.json();
};

export const eliminarCita = async (id) => {
  const res = await fetch(`${API_URL}/${id}`, {
    method: 'DELETE',
  });
  return res.json();
};

export const actualizarCita = async (id, datos) => {
  const res = await fetch(`${API_URL}/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(datos),
  });
  return res.json();
};
