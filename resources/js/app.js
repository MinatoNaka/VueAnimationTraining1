import VueRouter from 'vue-router';
import BookListComponent from "./components/BookListComponent";
import BookCreateComponent from "./components/BookCreateComponent";

require('./bootstrap');

window.Vue = require('vue');

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'book.list',
            component: BookListComponent
        },
        {
            path: '/create',
            name: 'book.create',
            component: BookCreateComponent
        },
    ]
});

const app = new Vue({
    router
}).$mount('#app');
