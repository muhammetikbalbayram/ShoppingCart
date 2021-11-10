import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
    state : {

        totalPrice : 0,
        products : [],
        favoriteProducts : [],
        shoppingCartValue : 0
    }
})
