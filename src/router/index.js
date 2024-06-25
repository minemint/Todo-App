import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import EditView from '../views/EditView.vue'
import testview from '../views/testview.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/test',
      name: 'test',
      component: testview
    },
    {
      path: '/todo/:id/edit',
      name: 'edit-view',
      component: EditView
    }
  ]
})

export default router