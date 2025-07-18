export function obteneraPaginasPermitidas(usuario) {
    let arreglo;
    if (usuario === "admin") {
        // Páginas del admin
        arreglo = ['/home', '/about', '/estudiante', '/notas', '/403']

    }

    if (usuario === "estudiante") {
        // Páginas de estudiante        
        arreglo = ['/about', '/estudiante', '/403']
    }

    return arreglo

}