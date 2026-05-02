import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import History from '../views/History.vue'
import Grass from '../views/Grass.vue'
import Inheritors from '../views/Inheritors.vue'
import Works from '../views/Works.vue'
import Craft from '../views/Craft.vue'
import News from '../views/News.vue'
import Creativity from '../views/Creativity.vue'

const routes = [
  { path: '/', component: Home, meta: { activeIndex: 0 } },
  { path: '/history', component: History, meta: { activeIndex: 1 } },
  { path: '/grass', component: Grass, meta: { activeIndex: 2 } },
  { path: '/inheritors', component: Inheritors, meta: { activeIndex: 3 } },
  { path: '/works', component: Works, meta: { activeIndex: 4 } },
  { path: '/craft', component: Craft, meta: { activeIndex: 5 } },
  { path: '/news', component: News, meta: { activeIndex: 6 } },
  { path: '/creativity', component: Creativity, meta: { activeIndex: 7 } }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
