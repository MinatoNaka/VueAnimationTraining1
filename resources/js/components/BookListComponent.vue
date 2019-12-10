<template>
    <div class="container">
        <table class="table table-hover">
            <thead class="thead-light">
            <tr>
                <th scope="col">#</th>
                <th scope="col">Title</th>
                <th scope="col">Author</th>
                <th scope="col">Price</th>
                <th scope="col">Show</th>
                <th scope="col">Edit</th>
                <th scope="col">Delete</th>
            </tr>
            </thead>
            <transition-group tag="tbody" leave-active-class="animated hinge">
                <tr v-for="(book, index) in books" v-bind:key="book.id" class="animated"
                    v-on:mouseenter="mouseEnterPulse"
                    v-on:mouseleave="mouseLeavePulse">
                    <th scope="row">{{ book.id }}</th>
                    <td>{{ book.title }}</td>
                    <td>{{ book.author }}</td>
                    <td>{{ book.price }}</td>
                    <td>
                        <router-link v-bind:to="{name: 'book.show', params: {bookId: book.id}}">
                            <button class="btn btn-success">Show</button>
                        </router-link>
                    </td>
                    <td>
                        <router-link v-bind:to="{name: 'book.edit', params: {bookId: book.id}}">
                            <button class="btn btn-success">Edit</button>
                        </router-link>
                    </td>
                    <td>
                        <button class="btn btn-danger" v-on:click="deleteBook(book.id, index)">Delete</button>
                    </td>
                </tr>
            </transition-group>
        </table>
    </div>
</template>

<script>
    export default {
        data: function () {
            return {
                books: []
            }
        },
        mounted() {
            this.getBooks();
        },
        methods: {
            getBooks() {
                axios.get('/api/books')
                    .then((res) => {
                        this.books = res.data;
                    });
            },
            deleteBook(id, index) {
                let confirmed = window.confirm('削除しますか？');

                if (confirmed) {
                    axios.delete('/api/books/' + id)
                        .then((res) => {
                            this.books.splice(index, 1);
                        });
                }
            },
            mouseEnterPulse(e) {
                e.target.classList.add('pulse', 'faster');
            },
            mouseLeavePulse(e) {
                e.target.classList.remove('pulse', 'faster');
            }
        }
    }
</script>
