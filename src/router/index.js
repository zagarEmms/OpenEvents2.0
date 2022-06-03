import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/home',
    name: 'home',
    component: () => import('../views/HomeView.vue')
  },
  {
    path: '/',
    name: 'index',
    component: () => import('../views/IndexView.vue')
  },
  {
    path: '/create',
    name: 'create',
    component: () => import('../views/CreateEventView.vue')
  },
  {
    path: '/delete',
    name: 'delte',
    component: () => import('../views/DeleteEventView.vue')
  },
  {
    path: '/eventology',
    name: 'eventology',
    component: () => import('../views/EventologyView.vue')
  },
  {
    path: '/events',
    name: 'events',
    component: () => import('../views/EventsView.vue')
  },
  {
    path: '/event',
    name: 'event',
    component: () => import('../views/EventView.vue')
  },
  {
    path: '/friendProfile',
    name: 'friendProfile',
    component: () => import('../views/FriendProfileView.vue')
  },
  {
    path: '/friends',
    name: 'friends',
    component: () => import('../views/FriendsView.vue')
  },
  {
    path: '/privacy',
    name: 'privacy',
    component: () => import('../views/PrivacyView.vue')
  },
  {
    path: '/profile',
    name: 'profile',
    component: () => import('../views/ProfileView.vue')
  },
  {
    path: '/terms',
    name: 'terms',
    component: () => import('../views/TermsView.vue')
  },
  {
    path: '/editEvent',
    name: 'editEvent',
    component: () => import('../views/EditEventView.vue')
  },
  {
    path: '/editProfile',
    name: 'editProfile',
    component: () => import('../views/EditProfileView.vue')
  },
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
