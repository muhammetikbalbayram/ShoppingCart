<template>
  <div class="mt-12" v-if="items.length === 0" >
    <div class="text-center mx-80 mb-4 border border-gray-700 rounded" >
      Sepetinizde Ürün Yoktur.
    </div>
  </div>
  <div v-else class="mt-12">
    <div class=" flex justify-between items-center mx-80 mb-4 border border-gray-700 rounded" :key="product" v-for="product in items">
      <div class="flex gap-3 items-center">
        <div>
          <img class="h-30 w-28 overflow-hidden" :src="product.image" :alt="product.name">
        </div>
        <div>
          <router-link :to="'/product/' + product.id"><div>{{ product.name }}</div></router-link>
          <div class="text-center">{{product.price}} TL</div>
        </div>
      </div>
      <div class="mr-12">
        <button class="p-2 text-center text-white bg-blue-700 hover:bg-blue-400" @click="increaseQuantity(product)">+</button>
        <div class="p-2 text-center">{{ product.quantity }}</div>
        <button class="p-2 text-center text-white bg-red-700 hover:bg-red-400" @click="decreaseQuantity(product)">-</button>
        <button @click="deleteProductCart(product)">Sil</button>
      </div>
    </div>
    <div class="mx-80 border border-gray-700 rounded">
      <div>
        Total Price : 0
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
  name: "ShoppingCart",
  computed: mapGetters({
    items: 'cartProducts',
  }),
  methods: {
    ...mapActions([
      'deleteProductCart',
      'increaseQuantity',
      'decreaseQuantity'
    ]),
  }
}
</script>

<style scoped>

</style>
