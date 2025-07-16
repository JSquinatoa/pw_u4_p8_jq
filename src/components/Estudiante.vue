<template>
    <div class="container">
        <button @click="guardar()">Guardar</button>
        <button @click="actualizar()">Actualizar</button>
        <button @click="actualizarParcial()">Actualizar Parcial</button>
        <button @click="borrar()">Eliminar</button>
    </div>
</template>

<script>
import { guardarFachada, actualizarFachada, actualizarParcialFachada, borrarPorIdFachada } from "@/clients/EstudianteClient.js";
export default {
    methods:{
        async guardar(){
            const EstudianteToBody = {
                nombre: "John",
                apellido: "Quinatoa",
                fechaNacimiento: "2001-10-02T00:00:00",
                genero: "m"
            }

            await guardarFachada(EstudianteToBody);
        },
        async actualizar(){

            const EstudianteToBody = {
                nombre: "Steven",
                apellido: "Guerrero",
                fechaNacimiento: "2001-10-02T00:00:00",
                genero: "m"
            }

            await actualizarFachada(EstudianteToBody, 1);
        },
        async actualizarParcial(){

            const EstudianteToBody = {
                apellido: "Potter"
            }

            await actualizarParcialFachada(EstudianteToBody, 1)

        },
        async borrar(){
            await borrarPorIdFachada(8);
        }

    }

}
</script>

<style>

</style>