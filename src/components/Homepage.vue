<template>
<div class="flex gap-24 flex-auto flex-wrap mx-32 mt-12">
  <div v-for="product in products">
    <div class="bg-white text-center border border-2 border-gray-700 rounded-2xl overflow-hidden my-2 shadow-sm hover:shadow-lg">
      <div class="relative">
        <svg @click="addFavorites(product)" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 inline-block absolute right-1.5 top-1.5 cursor-pointer text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
        <img class="h-64 w-52" :src="product.image" alt="Pantolon">
      </div>
      <router-link :to="'/product/' + product.id"><div>{{ product.name }}</div></router-link>
      <div class="font-black">{{ product.price }} TL</div>
      <div class="bg-white border-t-2 border-gray-700 cursor-pointer hover:bg-purple-500 hover:text-white" @click="addShoppingCart(product)">Sepete Ekle</div>
    </div>
  </div>
</div>
</template>

<script>
import {store} from "@/store/store";
export default {
  name: 'Homepage',
  data() {
    return {
      favorites : [],
      shoppingCart : [],
      products : [
        {
          id : 1231,
          name : 'Kot Pantolon',
          price : 150.99,
          image : 'https://cdn.modaselvim.com/duz-paca-kot-pantolon-304ih413-acik-kot-488790-71-B.jpg'
        },
        {
          id : 1232,
          name : 'Yeşil Elbise',
          price : 250.99,
          image : 'https://cdn.dsmcdn.com/mnresize/500/-/ty51/product/media/images/20210109/3/49852957/82491703/1/1_org_zoom.jpg'
        },
        {
          id : 1233,
          name : 'Siyah Elbise',
          price : 462.99,
          image : 'https://cdn.dsmcdn.com/mnresize/500/-/ty61/product/media/images/20210126/15/57376241/61700965/1/1_org_zoom.jpg'
        },
        {
          id : 1234,
          name : 'Siyah Elbise',
          price : 375.99,
          image : 'https://stn-nocturne.mncdn.com/Content/media/ProductImg/original/n21y-2409-0002-v-yaka-midi-boy-elbise-637498631952562353.jpg'
        },
        {
          id : 1235,
          name : 'Siyah Beyaz Elbise',
          price : 480.99,
          image : 'https://cdn.sementa.com/dik-yaka-puantiyeli-uzun-elbise-siyah-elbise-sementa-63201-13-K.jpg'
        },
        {
          id : 1236,
          name : 'Gri Siyah Elbise',
          price : 279.99,
          image : 'https://st1.myideasoft.com/idea/dj/82/myassets/products/505/ashley-drapeli-elbise-ekru-1-2.jpg?revision=1618496625'
        },
        {
          id : 1237,
          name : 'Çiçek Desenli Elbise',
          price : 599.99,
          image : 'https://romancdn.sysrun.net//Content/ProductImage/Original/637196969983978206-8681822107034_1.jpg'
        },
        {
          id : 1238,
          name : 'Bordo Elbise',
          price : 350.99,
          image : 'https://cdn.olegcassini.com.tr/bordo-krep-tek-kollu-yirtmacli-abiye-elbise-koleksiyon-oleg-by-oleg-cassini-13927-64-B.jpg'
        },
        {
          id : 1239,
          name : 'Sarı Elbise',
          price : 450.99,
          image : 'https://st2.myideasoft.com/idea/dj/82/myassets/products/575/ines-anvelop-elbise-sari.jpg?revision=1618495201'
        }
      ]
    }
  },
  methods : {
    addShoppingCart(product) {

      if (store.state.products.includes(product)) {
        product.quantity += 1
      }else{
        product.quantity = 1
      }
      store.state.products.push(product)
      store.state.shoppingCartValue+=1
      console.log(store.state.products)
    },
    addFavorites(product) {
      store.state.favoriteProducts.push(product)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
