import VueRouter from 'vue-router';
import HeaderComponent from "./components/HeaderComponent";
import BookListComponent from "./components/BookListComponent";
import BookCreateComponent from "./components/BookCreateComponent";
import BookShowComponent from "./components/BookShowComponent";
import BookEditComponent from "./components/BookEditComponent";

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
            path: '/books/:bookId/edit',
            name: 'book.edit',
            component: BookEditComponent,
            props: true
        },
        {
            path: '*',
            redirect: '/books'
        },
    ]
});

const app = new Vue({
    router,
    components: {
        'header-component': HeaderComponent
    }
}).$mount('#app');
