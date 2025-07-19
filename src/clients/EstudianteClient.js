import axios from "axios";

const URL_API = "http://localhost:8081/api/matricula/v1/estudiantes"

// Guardar
const guardar = async (body) => {

    let token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJodHRwOi8vdWNlLmVkdS5lYyIsInVwbiI6ImpzcXVpbmF0b2FAdWNlLmVkdS5lYyIsImdyb3VwcyI6WyJhZG1pbiJdLCJpYXQiOjE3NTI4ODQ2NzIsImV4cCI6MTc1Mjg4NDcwMiwianRpIjoiYTEzYTE4Y2ItOTdjOC00OGMyLTk3NDctN2UyZjNhZmIxYmYzIn0.J607zRbFrvsO1VS0mC2J7savflhZ_BTRDocTdq98aMbRRny79RtPyqr1Btjz3-Rmmb3a_WnPSMzVgg9AlLkzPliw9rRvKNdphxXg6CNqDUR9gr8zPZk_5sQMnHFMYGHNAyJZbhWRhLkiEHiXD7H82TeaW3RlJQMwsODr8lmtrof20Rq8JCatBf1A3GKyTXJB1ExAgzn2vC-0Todw6T_X_W13o9YLQgHKaeW5c3rOuKiZXQyNkhGoYgtarezONIiJDCaQKI4-6s4_dGI4nhbRdx_1GYxTWJ_ITTdPM3kDoyJ29deZx0HmdvETzZrEk0UnDA_ao2so507ETnNjxOTw0A'

    const data = axios.post(URL_API, body, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }).then(res => res.data);
}

// Actualizar
const actualizar = async (body, id) => {
    const data = axios.put(`${URL_API}/${id}`, body).then(res => res.data)
}

// Actualizar Parcial
const actualizarParcial = async (body, id) => {
    axios.patch(`${URL_API}/${id}`, body).then(res => res.data);
}

// Borrar
const borrarPorId = async (id) => {
    axios.delete(`${URL_API}/${id}`).then(res => res.data)
}

// Funciones Fachadas
export const guardarFachada = async (body) => {
    await guardar(body);
}

export const actualizarFachada = async (body, id) => {
    await actualizar(body, id);
}

export const actualizarParcialFachada = async (body, id) => {
    await actualizarParcial(body, id);
}

export const borrarPorIdFachada = async (id) => {
    await borrarPorId(id);
}