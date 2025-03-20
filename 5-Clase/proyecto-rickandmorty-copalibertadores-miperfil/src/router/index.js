import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/DefaultLayout.vue'),  // Layout principal  
    children: [
      {
        path: '',
        component: () => import('@/views/RickAndMorty.vue')  // Ruta base (Página de inicio)
      },
      {
        path: 'copalibertadores',
        component:  () => import('@/views/CopaLibertadores.vue')  
        },
      {
        path: 'myprofile',
        component:  () => import('@/views/MyProfile.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),  // Usa el historial HTML5 (sin # en la URL)
  routes                         // Usa las rutas definidas arriba
})

export default router  