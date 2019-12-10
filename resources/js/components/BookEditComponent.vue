<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-sm-6">
                <form v-on:submit.prevent="submit">
                    <div class="form-group row">
                        <label for="id" class="col-sm-3 col-form-label">ID</label>
                        <input type="text" class="col-sm-9 form-control-plaintext" readonly id="id" v-model="book.id">
                    </div>
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
        props: {
            bookId: Number
        },
        data: function () {
            return {
                book: {}
            }
        },
        methods: {
            getBook() {
                axios.get('/api/books/' + this.bookId)
                    .then((res) => {
                        this.book = res.data;
                    });
            },
            submit() {
                axios.put('/api/books/' + this.bookId, this.book)
                    .then((res) => {
                        this.$router.push({name: 'book.list'})
                    });
            }
        },
        mounted() {
            this.getBook();
        }
    }
</script>
