
<template>
  <div id="app">
    <header>
      <h1>Logo</h1>
      <input type="text" v-model="SearchString" />
    </header>

    <div class="container">
      <Showcase></Showcase>
      <Cart>
      </Cart>
    </div>
  </div>
</template>

<script>
import Showcase from './components/Showcase.vue';
import Cart from './components/Cart.vue';

export default {
  name: 'App',
  components: { Showcase, Cart },
  //this.$store - обращение к store(прописан в index.js) используя метод dispatch. loadProducts наш созданный actions(товар созданный не на сервере)
  сomputed: {
    searchString: {
      get() {
        return this.$store.getters.getSearchString
      },
      set(value) {
        this.$store.commit('setSearchString', value)
      }
    }
  },

  mounted() {
    this.$store.dispatch('loadProducts')
  }
}
</script>


<style lang="scss">
body {
  padding: 0;
  margin: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

header {
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #444;
  color: white;
  padding: 0 20px;
  box-sizing: border-box;
}

.container {
  display: flex;
}
</style>
