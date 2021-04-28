import ExampleButton from '@/pages/example/ExampleButton.vue'
import ExampleGrid from '@/pages/example/ExampleGrid.vue'
import ExampleMedia from '@/pages/example/ExampleMedia.vue'
import { createRouter, createWebHistory } from 'vue-router';//和vue2 路由不同
const routerHistory = createWebHistory();

const router = createRouter({
  history: routerHistory,//history写法不同
  routes: [
    {
      path: '/example/grid',
      component: ExampleGrid,
    },
    {
      path: '/example/button',
      component: ExampleButton,
    },
    {
      path: '/example/media',
      component: ExampleMedia,
    },
  ],
});

export default router;