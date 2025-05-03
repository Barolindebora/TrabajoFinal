import paisRepository from "../repository/paisRepository.mjs";

export async function obtenerPaisesPorId(id) {
    return await paisRepository.obtenerPorId(id);
}

export async function obtenerTodosLosPaises() {
    return await paisRepository.obtenerTodos();
}

export async function crearPais(nuevoPais) {
    return await paisRepository.insertarPais(nuevoPais);
}

export async function actualizarPais(id, nuevosDatos) {
    return await paisRepository.actualizarPais(id, nuevosDatos);
}

export async function borrarPaisPorId(id) {
    return await paisRepository.borrarPorId(id);
}

