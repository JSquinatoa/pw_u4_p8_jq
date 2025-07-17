import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Estudianteview from "@/views/Estudianteview.vue"
import LoginView from "@/views/LoginView.vue"

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
      esValida: false,
    }
  },
  {
    path: '/Estudiante',
    name: 'Estudianteview',
    component: Estudianteview
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
      next()
    }

  } else {
    next()
  }

})
export default router
