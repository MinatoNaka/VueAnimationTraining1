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
                <form v-on:submit.prevent="submit">
                    <div class="form-group row">
                        <label for="title" class="col-sm-3 col-form-label">Title</label>
                        <input type="text" class="col-sm-9 form-control" id="title" v-model="book.title">
                    </div>
                    <div class="form-group row">
                        <label for="author" class="col-sm-3 col-form-label">Author</label>
                        <input type="text" class="col-sm-9 form-control" id="author" v-model="book.author">
                    </div>
                    <div class="form-group row">
                        <label for="price" class="col-sm-3 col-form-label">Price</label>
                        <input type="text" class="col-sm-9 form-control" id="price" v-model="book.price">
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data: function () {
            return {
                book: {}
            }
        },
        methods: {
            submit: function () {
                axios.post('/api/books', this.book)
                    .then((res) => {
                        this.$router.push({name: 'book.list'});
                    });
            }
        }
    }
</script>
