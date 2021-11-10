<template>
  <div class="mt-12" v-if="$store.state.favoriteProducts.length === 0" >
    <div class="text-center mx-80 mb-4 border border-gray-700 rounded" >
      Favorilerinizde Ürün Yoktur.
    </div>
  </div>
  <div v-else class="flex gap-24 flex-auto flex-wrap mx-32 mt-12">
    <div v-for="product in $store.state.favoriteProducts">
      <div class="bg-white text-center border border-2 border-gray-700 rounded-2xl overflow-hidden my-2 shadow-sm hover:shadow-lg">
        <div>
          <img class="h-64 w-52" :src="product.image" alt="Pantolon">
        </div>
        <router-link :to="'/product/' + product.id"><div>{{ product.name }}</div></router-link>
        <div @click="removeProduct(product)" class="bg-white border-t-2 border-gray-700 cursor-pointer hover:bg-red-500 hover:text-white">Sil</div>
      </div>
    </div>
  </div>
</template>

<script>
import {store} from "@/store/store";

export default {
  name: "Favorites",
  methods : {
    removeProduct(product) {
      var indexOfProduct = store.state.favoriteProducts.indexOf(product)
      store.state.favoriteProducts.splice(indexOfProduct,1)
    }
  }
}
</script>

<style scoped>

</style>
