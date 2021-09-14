import Vue from 'vue'
import VueRouter from 'vue-router'
import NotFound from '../views/NotFound'
import Administrador from '../views/Administrador'

Vue.use(VueRouter)

const routes = [{
      path: '/',
      name: 'portada',
      component:  () => import('../views/Portada.vue')
    },
    {
      path: '/sobremi',
      name: 'sobreMi',
      alias: '/acerca',
      component: () => import('../views/SobreMi.vue')
    },
    {
      path: '/contacto',
      alias:'/contactame',
      component: () => import('../views/Contacto.vue')
    },
    {
      path: '/post/:number',
      component: () => import('../views/Post.vue'),
      children: [{
        path: '',
        component: () => import('../views/Articulo.vue'),
        name: 'articulo'
      }, ]
    },
    {
      path: '/administrador/:typeAdmin',
      component: Administrador,
      props: true
    },
    {
      path:'/:data(home||inicio||portada)',
      redirect: '/'
    },
    {
      path: '*',
      component: NotFound
    },
  ]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
