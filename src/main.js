import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import Home from './views/Home.vue'
import Stake from './views/Stake.vue'
import Unbond from './views/Unbond.vue'
import Claim from './views/Claim.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Home },
    { path: '/stake', component: Stake },
    { path: '/unbond', component: Unbond },
    { path: '/claim', component: Claim }
  ]
})

createApp(App).use(router).mount('#app')