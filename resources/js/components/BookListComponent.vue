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
            </tr>
            </thead>
            <tbody>
            <tr>
                <th scope="row">1</th>
                <td>Book1</td>
                <td>Author1</td>
                <td>1000</td>
                <td>
                    <router-link v-bind:to="{name: 'book.show', params: {bookId: 1}}">
                        <button class="btn btn-success">Show</button>
                    </router-link>
                </td>
                <td>
                    <router-link v-bind:to="{name: 'book.edit', params: {bookId: 1}}">
                        <button class="btn btn-success">Edit</button>
                    </router-link>
                </td>
            </tr>
            <tr>
                <th scope="row">2</th>
                <td>Book2</td>
                <td>Author2</td>
                <td>2000</td>
                <td>
                    <router-link v-bind:to="{name: 'book.show', params: {bookId: 2}}">
                        <button class="btn btn-success">Show</button>
                    </router-link>
                </td>
                <td>
                    <router-link v-bind:to="{name: 'book.edit', params: {bookId: 2}}">
                        <button class="btn btn-success">Edit</button>
                    </router-link>
                </td>
            </tr>
            <tr>
                <th scope="row">3</th>
                <td>Book3</td>
                <td>Author3</td>
                <td>3000</td>
                <td>
                    <router-link v-bind:to="{name: 'book.show', params: {bookId: 3}}">
                        <button class="btn btn-success">Show</button>
                    </router-link>
                </td>
                <td>
                    <router-link v-bind:to="{name: 'book.edit', params: {bookId: 3}}">
                        <button class="btn btn-success">Edit</button>
                    </router-link>
                </td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    export default {}
</script>
