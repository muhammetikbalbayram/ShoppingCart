<template>
  <div class="mt-12" v-if="items.length === 0" >
    <div class="text-center mx-80 mb-4 border border-gray-700 rounded" >
      Favorilerinizde Ürün Yoktur.
    </div>
  </div>
  <div v-else class="flex gap-24 flex-auto flex-wrap mx-32 mt-12">
    <div v-for="product in items" :key="product">
      <div class="bg-white text-center border border-2 border-gray-700 rounded-2xl overflow-hidden my-2 shadow-sm hover:shadow-lg">
        <div>
          <img class="h-64 w-52" :src="product.image" alt="Pantolon">
        </div>
        <router-link :to="'/product/' + product.id"><div>{{ product.name }}</div></router-link>
        <div @click="deleteProductFavorites(product)" class="bg-white border-t-2 border-gray-700 cursor-pointer hover:bg-red-500 hover:text-white">Sil</div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
  name: "Favorites",
  computed:mapGetters({
    items : 'favoriteProducts'
  }),
  methods : {
    ...mapActions([
        'deleteProductFavorites'
    ])
  }
}
</script>

<style scoped>

</style>
