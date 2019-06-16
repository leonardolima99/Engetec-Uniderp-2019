import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/Home.vue'
import Inscricao from './components/Inscricao.vue'
import Galeria from './components/Galeria.vue'
import Eventos from './components/Eventos.vue'
import Error404 from './components/Error404.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/inscricao',
      name: 'inscricao',
      component: Inscricao
    },
    {
      path: '/galeria',
      name: 'galeria',
      component: Galeria
    },
    {
      path: '/eventos',
      name: 'eventos',
      component: Eventos
    },
    {
      path: '*',
      component: Error404
    }
  ]
})
