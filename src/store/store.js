import Vue from "vue";
import Vuex from "vuex";


Vue.use(Vuex);

export const store = new Vuex.Store({
    state : {
        totalPrice : 0,
        cart : [],
        favoriteProducts : [],
        shoppingCartValue : 0,
        products: []
    },
    getters : {
        cartProducts: state => {
            return state.cart.map(({id, quantity}) => {
                const product = state.products.find(product => product.id === id)
                return {
                    ...product,
                    quantity
                }
            })
        },
        favoriteProducts: state => {
            return state.favoriteProducts.map(({id, quantity}) => {
                const product = state.products.find(product => product.id === id)
                return {
                    ...product,
                    quantity
                }
            })
        },
    },
    mutations : {
        ADD_CART(state,productId) {
            const record = state.cart.find(product => product.id === productId)

            if (!record) {
                state.cart.push({
                    id: productId,
                    quantity: 1
                })
            } else {
                record.quantity++
            }
        },
        ADD_FAVORITES(state,productId) {
            const record = state.favoriteProducts.find(product => product.id === productId)

            if (!record) {
                state.favoriteProducts.push({
                    id: productId,

                })
            }else{
                alert("Ürünü daha önce favorilerinize eklediniz!")
            }
        },
        DELETE_PRODUCT_CART(state,product) {
            const index = state.cart.findIndex(addedProduct => addedProduct.id === product.id)
            state.cart.splice(index, 1)
        },
        DELETE_PRODUCT_FAVORITES(state,product) {
            const index = state.favoriteProducts.findIndex(addedProduct => addedProduct.id === product.id)
            state.favoriteProducts.splice(index, 1)
        },
        INCREASE_QUANTITY(state,product){
            product.quantity += 1
        },
        DECREASE_QUANTITY(state,product){
            product.quantity -= 1
        },

    },
    actions : {
        addCart(context,product) {
            context.commit('ADD_CART',product.id)
        },
        addFavorites(context,product) {
            context.commit('ADD_FAVORITES',product.id)
        },
        deleteProductCart(context,product) {
            context.commit('DELETE_PRODUCT_CART',product)
        },
        deleteProductFavorites(context,product) {
            context.commit('DELETE_PRODUCT_FAVORITES',product)
        },
        increaseQuantity(context,product) {
            context.commit('INCREASE_QUANTITY',product)
            console.log(product.quantity)
        },
        decreaseQuantity(context,product) {
            context.commit('DECREASE_QUANTITY',product)
        },
    }
})
