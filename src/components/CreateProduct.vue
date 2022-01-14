<template>
  <div class="flex justify-center mt-6">
    <div class="w-full max-w-xs">
    <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="name">
          Name
        </label>
        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="name" v-model="productName">
      </div>
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="price">
          Price
        </label>
        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="price" type="text" placeholder="price" v-model="productPrice">
      </div>
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="image">
          Image
        </label>
        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="image" type="text" placeholder="image" v-model="productImage">
      </div>
      <div class="flex items-center justify-center">
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" @click="submitProduct">
          Add Product
        </button>
      </div>
    </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import {store} from "@/store/store";
export default {
  name: "CreateProduct",
  data() {
    return {
      productName: '',
      productPrice: '',
      productImage: ''
    }
  },
  methods:{
    submitProduct(){
      axios.post('http://localhost:5000/products', {
        'name': this.productName,
        'price': this.productPrice,
        'image': this.productImage
      }).then(res => {
        console.log(res.data)
      })
      this.productName= ''
      this.productPrice= ''
      this.productImage= ''
      this.getAllProducts()
    },
    getAllProducts() {
      axios.get('http://localhost:5000')
          .then(res => {
            store.state.products.push(res.data[-1])
          })
    }
  }
}
</script>

<style scoped>

</style>
