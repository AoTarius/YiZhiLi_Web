import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import History from '../views/History.vue'
import Craft from '../views/Craft.vue'
import Inheritors from '../views/Inheritors.vue'
import Works from '../views/Works.vue'
import Learn from '../views/Learn.vue'
import News from '../views/News.vue'

const routes = [
  { path: '/', component: Home, meta: { activeIndex: 0 } },
  { path: '/history', component: History, meta: { activeIndex: 1 } },
  { path: '/craft', component: Craft, meta: { activeIndex: 2 } },
  { path: '/inheritors', component: Inheritors, meta: { activeIndex: 3 } },
  { path: '/works', component: Works, meta: { activeIndex: 4 } },
  { path: '/learn', component: Learn, meta: { activeIndex: 5 } },
  { path: '/news', component: News, meta: { activeIndex: 6 } },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
