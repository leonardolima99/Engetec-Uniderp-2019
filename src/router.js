import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/Home.vue'
import Inscricao from './components/Inscricao.vue'
import RelacaoInscritos from './components/RelacaoInscritos.vue'
import Galeria from './components/Galeria.vue'
import Eventos from './components/Eventos.vue'
import Entrar from './components/Entrar.vue'
import Error404 from './components/Error404.vue'
import Painel from './components/admin/Painel.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: __dirname,
  // base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/inscricao',
      name: 'Inscricao',
      component: Inscricao
    },
    {
      path: '/relacao',
      name: 'Relacao',
      component: RelacaoInscritos
    },
    {
      path: '/galeria',
      name: 'Galeria',
      component: Galeria
    },
    {
      path: '/eventos',
      name: 'Eventos',
      component: Eventos
    },
    {
      path: '/entrar',
      name: 'Entrar',
      component: Entrar
    },
    {
      path: '/admin',
      name: 'Painel',
      component: Painel
    },
    {
      path: '*',
      component: Error404
    }
  ]
})
