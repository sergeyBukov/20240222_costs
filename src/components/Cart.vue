<template>
    <div class="cart">
        <Product v-for="product of list" :key="product.id" :title="product.title" :price="product.price">
            <button @click="remove(product.id)" >Удалить</button>
        </Product>
    </div>
</template>

<script>
import Product from './Product.vue';
export default {
    name: 'Сart',
    components: { Product },
    computed: {
        list() {
            return this.$store.getters.getCart
        }
    },
    methods: {
        remove(id) {
            this.$store.commit('removeFromCart', id)
        }
    }
}
</script>

<style lang="scss">
.cart {
    width: 25%;
    background-color: #ccc;
}
</style>