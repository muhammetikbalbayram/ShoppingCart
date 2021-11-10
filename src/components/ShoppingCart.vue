<template>
  <div class="mt-12" v-if="$store.state.cart.length === 0" >
    <div class="text-center mx-80 mb-4 border border-gray-700 rounded" >
      Sepetinizde Ürün Yoktur.
    </div>
  </div>
  <div v-else class="mt-12">
    <div class=" flex justify-between items-center mx-80 mb-4 border border-gray-700 rounded"  v-for="product in $store.state.cart">
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
        <button @click="deleteProduct(product)">Sil</button>
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
import {store} from "@/store/store";

export default {
  name: "ShoppingCart",
  methods : {
    deleteProduct(product){
      var indexOfProduct = store.state.cart.indexOf(product)
      store.state.cart.splice(indexOfProduct,1)
      store.state.shoppingCartValue -= product.quantity
    },
    increaseQuantity(product){
      product.quantity += 1
      store.state.shoppingCartValue += 1
      console.log(product.quantity)
      console.log(store.state.products)
    },
    decreaseQuantity(product){
      product.quantity -= 1
      store.state.shoppingCartValue -= 1
    }
  },

}
</script>

<style scoped>

</style>
