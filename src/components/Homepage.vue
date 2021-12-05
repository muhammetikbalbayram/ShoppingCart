<template>
<div class="flex gap-24 flex-auto flex-wrap mx-32 mt-12">
  <div v-for="product in $store.state.products" :key="product" >
    <div class="bg-white text-center border border-2 border-gray-700 rounded-2xl overflow-hidden my-2 shadow-sm hover:shadow-lg">
      <div class="relative">
        <svg @click="addFavorites(product)" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 inline-block absolute right-1.5 top-1.5 cursor-pointer text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
        <img class="h-64 w-52" :src="product.image" alt="Pantolon">
      </div>
      <router-link :to="'/product/' + product.id"><div>{{ product.name }}</div></router-link>
      <div class="font-black">{{ product.price }} TL</div>
      <div class="bg-white border-t-2 border-gray-700 cursor-pointer hover:bg-purple-500 hover:text-white" @click="addCart(product)">Sepete Ekle</div>
    </div>
  </div>
</div>
</template>

<script>

import {mapActions} from 'vuex'
export default {
  name: 'Homepage',

  methods: {
    ...mapActions([
        'addCart',
        'addFavorites'
    ]),
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
