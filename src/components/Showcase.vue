<template>
    <div class="showcase">
        <Product v-for="product of list" :key="product.id" :title="product.title" :price="product.price">
            <button @click="add(product)">В корзину</button>
        </Product>

    </div>
</template>

<script>
import Product from './Product.vue'

export default {
    name: 'Showcase',
    components: { Product },
    // Подключим state с помощью вычисляемых свойств, с помощью блока computed
    computed: {
        list() {
            return this.$store.getters.getProducts
        }
    },
// добавить продукт в корзину
    methods: {
        add(product) {
            this.$store.commit('addToCart', product)
        }
    }
}
</script>

<style lang="scss">
.showcase {
    width: 75%;
    display: flex;
    flex-wrap: wrap;

}
</style>