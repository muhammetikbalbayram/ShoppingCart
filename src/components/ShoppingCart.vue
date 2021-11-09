<template>
  <div class="mt-12">
    <div class=" flex justify-between items-center mx-80 mb-4 border border-gray-700 rounded" v-for="product in shoppingCart">
      <div class="flex gap-3 items-center">
        <div>
          <img class="h-30 w-28 overflow-hidden" :src="product.image" :alt="product.name">
        </div>
        <div>
          <div class="text-center">{{product.name}}</div>
          <div class="text-center">{{product.price}} TL</div>
        </div>
      </div>
      <div class="mr-12">
        <button class="p-2 text-center text-white bg-blue-700 hover:bg-blue-400" @click="increaseQuantity">+</button>
        <div class="p-2 text-center">{{ counter }}</div>
        <button class="p-2 text-center text-white bg-red-700 hover:bg-red-400" @click="decreaseQuantity">-</button>
      </div>
    </div>
    <div class="mx-80 border border-gray-700 rounded">
      <div>
        Total Price : {{ total }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ShoppingCart",
  data() {
    return {
      shoppingCart : [
        {
          id : 1231,
          name : 'Kot Pantolon',
          price : 150.99,
          image : 'https://cdn.modaselvim.com/duz-paca-kot-pantolon-304ih413-acik-kot-488790-71-B.jpg'
        },
      ],

    }
  },
 methods : {
   increaseQuantity() {
     this.$store.state.quantity += 1
   },
   decreaseQuantity() {
     if(this.$store.state.quantity === 0) {
       this.$store.state.quantity = 0
     }else {
       this.$store.state.quantity -= 1
     }
   },
   totalMoney() {
     this.$store.state.quantity*this.shoppingCart.price
   }
 },
  computed : {
    counter() {
      return this.$store.state.quantity
    },
    total() {
      return this.totalMoney()
    }
  }
}
</script>

<style scoped>

</style>