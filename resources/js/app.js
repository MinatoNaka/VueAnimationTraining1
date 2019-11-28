import VueRouter from 'vue-router';
import BookListComponent from "./components/BookListComponent";
import BookCreateComponent from "./components/BookCreateComponent";
import BookShowComponent from "./components/BookShowComponent";

require('./bootstrap');

window.Vue = require('vue');

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/books',
            name: 'book.list',
            component: BookListComponent
        },
        {
            path: '/books/create',
            name: 'book.create',
            component: BookCreateComponent
        },
        {
            path: '/books/:bookId',
            name: 'book.show',
            component: BookShowComponent,
            props: true
        },
        {
            path: '*',
            redirect: '/books'
        },
    ]
});

const app = new Vue({
    router
}).$mount('#app');
