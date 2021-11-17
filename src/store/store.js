import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
    state : {
        totalPrice : 0,
        cart : [],
        favoriteProducts : [],
        shoppingCartValue : 0
    },
    getters : {

    },
    mutations : {
        ADD_PRODUCT(state,product) {
            state.cart.push(product)
        },

    },
    actions : {
        addProduct(context,product) {
            context.commit('ADD_PRODUCT',product)
        }
    }
})
