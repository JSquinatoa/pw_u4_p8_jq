import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import Estudianteview from "@/views/Estudianteview.vue"
import NotasIngresoView from "@/views/NotasIngresoView.vue"
import RecursoProhibidoview from "@/views/RecursoProhibidoview.vue"
import LoginView from "@/views/LoginView.vue"

import { obteneraPaginasPermitidas } from "@/herlpers/Autorizacion.js"

function estaAutenticado() {
  return localStorage.getItem("auth") === "true"
}

const routes = [
  {
    path: '/home',
    name: 'home',
    component: HomeView,
    meta: {
      requireAuth: true,
    }
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView,
    meta: {
      requireAuth: true,
    }
  },
  {
    path: '/estudiante',
    name: 'estudiante',
    component: Estudianteview,
    meta: {
      requireAuth: true,
    }
  },
  {
    path: '/notas',
    name: 'notas',
    component: NotasIngresoView,
    meta: {
      requireAuth: true,
    }
  },
  {
    path: '/403',
    name: '403',
    component: RecursoProhibidoview,
    meta: {
      requireAuth: true,
    }
  },
  {
    path: '/Login',
    name: 'LoginView',
    component: LoginView
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {

  if (to.meta.requireAuth) {
    // Si no esta autenticado
    if (!estaAutenticado()) {
      next("/Login")
    } else {
      // Aqui valido si esta autorizado
      let usuario = localStorage.getItem("usuario")
      let paginas = obteneraPaginasPermitidas(usuario)
      if (paginas.includes(to.path)) {
        next();
      } else {
        next("/403");
      }

    }

  } else {
    next()
  }

})
export default router
