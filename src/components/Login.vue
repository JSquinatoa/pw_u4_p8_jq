<template>
  <div class="login-container">
    <div class="login-caja">
      <h2>Iniciar Sesion</h2>
      <input v-model="username" type="text" placeholder="Usuario" />
      <input v-model="password" type="password" placeholder="Contraseña" />
      <button @click="login()">Ingresar</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    login(){
        if ((this.username === "admin" || this.username === "estudiante") && this.password === "123") {
            localStorage.setItem("usuario", this.username);
            localStorage.setItem("auth", "true");     
            // Redireccionar a la página de Bienvenida 
            this.$router.push("/home?anio=2016")                   
        }
    }
  },
};
</script>

<style scoped>
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #1e2a38;
  height: 97vh;
  width: 98vw;
}

.login-caja {
  background-color: #ffffff;
  padding: 30px;
  border-radius: 10px;
  width: 300px;
  text-align: center;
}

input {
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
}

button {
  width: 100%;
  padding: 10px;
  background-color: #20579f;
  border: none;
  border-radius: 6px;
  color: white;
  cursor: pointer;
}

button:hover {
  background-color: #336fbd;
}
</style>

