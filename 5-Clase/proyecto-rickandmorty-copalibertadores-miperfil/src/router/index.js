import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue') 
    },
    {
      path: '/myprofile',
      name: 'myprofile',
      component: () => import('../views/MyProfile.vue') 
    },
    {
      path: '/rickandmorty',
      name: 'rickandmorty',
      component: () => import('../views/RickAndMorty.vue') 
    },
    {
      path: '/PersonajeCapitulo/:id',
      name: 'PersonajeCapitulo',
      component: () => import('../views/PersonajeCapitulo.vue') 
    },
    {
      path: '/copalibertadores',
      name: 'copalibertadores',
      component: () => import('../views/CopaLibertadores.vue') 
    }
  ]
});

export default router;

