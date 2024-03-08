import Vue from 'vue'
import Vuex from 'vuex'
import { Promise } from 'core-js'

Vue.use(Vuex)

//создаем хранилище
export default new Vuex.Store({
    //1. состояние
    state: {
        productList: [], //продукты
        cart: [], // корзина
        searchString: '' //поиск
    },

    // 2. методы для хранения и изменения данных данных

    // 2.1 getters-Методы для получения данных из state
    getters: {
        /* 2.1.1 фильтруем весь productlist, если название product соответствует названию в поиске(searchString) то true, если поисковая строка пустая, то попадут все. флаг 'i' отвечает за регистр*/
        getProducts: (state) => state.productList.filter((product) => new RegExp(state.searchString, 'i').test(product.title)),
        // 2.1.2 получаем данные из корзины
        getCart: ({ cart }) => cart,

        // 2.1.3 получаем данные из поисковой строки
        getSearchString: ({ searchString }) => searchString
    },

    // 2.2 mutations-Изменение данных в state
    mutations: {
        // 2.2.1 метод добавления нового товара в массив productList 
        setProductList: (state, payload) => state.productList = payload,

        //2.2.2 метод добавления нового товара в массив cart(корзина)
        addToCart: (state, payload) => state.cart.push(payload),

        // 2.2.3 метод удаления товара из cart по id
        removeFromCart: (state, id) => {
            //находим id товара
            const idx = state.cart.findIndex((product) => product.id == id)
            // удаляем один товар по полученому id
            state.cart.splice(idx, 1)
        },
        // 2.2.4 метод
        setSearchString: (state, payload) => state.searchString = payload
    },

    /*2.3 actions- методы для ассинхронных операций(стороняя логика, действия не связанные напрямую с state (не требуется отправки на сервер)) */
    actions: {
        // метод который через 1сек выдаст некий массив с товаром
        loadProducts({ commmit }) {
            //через new Promise сделаем эмитацию работы с сетью, как будто данные получаются  с сервера
            return new Promise((resolve) => {
                setTimeout(() => {
                    resolve([
                        { id: 1, title: 'hat', price: 50 },
                        { id: 2, title: 'smoking', price: 120 },
                        { id: 3, title: 'shirt', price: 45 },
                        { id: 4, title: 'shoues', price: 64 },
                        { id: 5, title: 'skirt', price: 30 },
                        { id: 6, title: 'pants', price: 22 },
                    ])
                }, 1000)
            }).then((list) => commmit('setProductList', list))
            /* когда товары будут получены у нас будет блок then (запускае изменение состояния через commit), который должен попасть в state(через созданный ранее метод setProductList и встроенный в vue метод commit(нужен для вызова getters, mutations)). list - получается в payload */

        }
    }
})
/* 2.4 еще есть метод modules для разбивки данных(но мы его не используем тут) Пример разбить state на две части(данные о пользователи, данные о расходах*/
