<template>
    <div class="container">
        <nav class="navbar navbar-dark bg-dark mb-3">
            <span class="navbar-brand mb-0 h1">SPA Training1</span>
            <router-link v-bind:to="{name: 'book.create'}">
                <button class="btn btn-success">ADD</button>
            </router-link>
        </nav>
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
            <tbody>
            <tr v-for="book in books">
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
                    <button class="btn btn-danger" v-on:click="deleteBook(book.id)">Delete</button>
                </td>
            </tr>
            </tbody>
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
            deleteBook(id) {
                axios.delete('/api/books/' + id)
                    .then((res) => {
                        this.getBooks();
                    });
            }
        }
    }
</script>
