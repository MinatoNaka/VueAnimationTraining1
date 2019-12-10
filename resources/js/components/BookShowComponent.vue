<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-sm-6">
                <form>
                    <div class="form-group row border-bottom">
                        <label for="id" class="col-sm-3 col-form-label">ID</label>
                        <input type="text" class="col-sm-9 form-control-plaintext" readonly id="id"
                               v-model="book.id">
                    </div>
                    <div class="form-group row border-bottom">
                        <label for="title" class="col-sm-3 col-form-label">Title</label>
                        <input type="text" class="col-sm-9 form-control-plaintext" readonly id="title"
                               v-model="book.title">
                    </div>
                    <div class="form-group row border-bottom">
                        <label for="author" class="col-sm-3 col-form-label">Author</label>
                        <input type="text" class="col-sm-9 form-control-plaintext" id="author" readonly
                               v-model="book.author">
                    </div>
                    <div class="form-group row border-bottom">
                        <label for="price" class="col-sm-3 col-form-label">Price</label>
                        <input type="text" class="col-sm-9 form-control-plaintext" id="price" readonly
                               v-model="book.price">
                    </div>
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
                    })
            }
        },
        mounted() {
            this.getBook();
        }
    }
</script>
