<template>
    <div class="container">
        <nav class="navbar navbar-dark bg-dark mb-3">
            <span class="navbar-brand mb-0 h1">SPA Training1</span>
            <router-link v-bind:to="{name: 'book.list'}">
                <button class="btn btn-success">List</button>
            </router-link>
        </nav>
        <div class="row justify-content-center">
            <div class="col-sm-6">
                <form>
                    <div class="form-group">
                        <label for="id">ID</label>
                        <input type="text" class="form-control-plaintext" readonly id="id" v-bind:value="bookId">
                    </div>
                    <div class="form-group">
                        <label for="title">Title</label>
                        <input type="text" class="form-control-plaintext" readonly id="title" value="title title">
                    </div>
                    <div class="form-group">
                        <label for="author">Author</label>
                        <input type="text" class="form-control-plaintext" id="author" readonly value="author author">
                    </div>
                    <div class="form-group">
                        <label for="price">Price</label>
                        <input type="text" class="form-control-plaintext" id="price" readonly value="price price">
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            bookId: String
        }
    }
</script>
