import Vue from 'vue';
import VueRouter from 'vue-router';


Vue.use(VueRouter)

import example from './components/ExampleComponent.vue';
const routes = [
    {
        path: '/example',
        component: example
    }
]

export default new VueRouter({ mode: 'history', routes: routes })