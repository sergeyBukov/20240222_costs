<template>
    <div class="product">
        <h2>{{ title }}</h2>
        <p>цена: {{ price }}$</p>
        <slot></slot>



    </div>
</template>

<script>
export default {
    name: 'Product',
    props: {
        title: String,
        price: String
    }
}
</script>

<style lang="scss">
.product {
    width: calc(33% - 20px);
    margin: 10px;
    background-color: white;
    border: 1px solid #444;
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-sizing: border-box;
}
</style>