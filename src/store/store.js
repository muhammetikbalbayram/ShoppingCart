import Vue from "vue";
import Vuex from "vuex";


Vue.use(Vuex);

export const store = new Vuex.Store({
    state : {
        totalPrice : 0,
        cart : [],
        favoriteProducts : [],
        shoppingCartValue : 0,
        products: [
            {
                id: 1231,
                name: 'Kot Pantolon',
                price: 150.99,
                image: 'https://cdn.modaselvim.com/duz-paca-kot-pantolon-304ih413-acik-kot-488790-71-B.jpg'
            },
            {
                id: 1232,
                name: 'Yeşil Elbise',
                price: 250.99,
                image: 'https://cdn.dsmcdn.com/mnresize/500/-/ty51/product/media/images/20210109/3/49852957/82491703/1/1_org_zoom.jpg'
            },
            {
                id: 1233,
                name: 'Siyah Elbise',
                price: 462.99,
                image: 'https://cdn.dsmcdn.com/mnresize/500/-/ty61/product/media/images/20210126/15/57376241/61700965/1/1_org_zoom.jpg'
            },
            {
                id: 1234,
                name: 'Siyah Elbise',
                price: 375.99,
                image: 'https://stn-nocturne.mncdn.com/Content/media/ProductImg/original/n21y-2409-0002-v-yaka-midi-boy-elbise-637498631952562353.jpg'
            },
            {
                id: 1235,
                name: 'Siyah Beyaz Elbise',
                price: 480.99,
                image: 'https://cdn.sementa.com/dik-yaka-puantiyeli-uzun-elbise-siyah-elbise-sementa-63201-13-K.jpg'
            },
            {
                id: 1236,
                name: 'Gri Siyah Elbise',
                price: 279.99,
                image: 'https://st1.myideasoft.com/idea/dj/82/myassets/products/505/ashley-drapeli-elbise-ekru-1-2.jpg?revision=1618496625'
            },
            {
                id: 1237,
                name: 'Çiçek Desenli Elbise',
                price: 599.99,
                image: 'https://romancdn.sysrun.net//Content/ProductImage/Original/637196969983978206-8681822107034_1.jpg'
            },
            {
                id: 1238,
                name: 'Bordo Elbise',
                price: 350.99,
                image: 'https://cdn.olegcassini.com.tr/bordo-krep-tek-kollu-yirtmacli-abiye-elbise-koleksiyon-oleg-by-oleg-cassini-13927-64-B.jpg'
            },
            {
                id: 1239,
                name: 'Sarı Elbise',
                price: 450.99,
                image: 'https://st2.myideasoft.com/idea/dj/82/myassets/products/575/ines-anvelop-elbise-sari.jpg?revision=1618495201'
            }
        ]
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
