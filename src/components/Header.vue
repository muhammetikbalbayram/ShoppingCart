<template>
  <div class="flex flex-row justify-between mt-2">
    <div class="flex flex-row gap-1 items-center">
      <router-link to="/"><a class="text-2xl ml-2">ModaAşil</a></router-link>
      <div class="h-8 w-8 bg-purple-700 rounded-full"></div>
    </div>
    <div>
      <div>
        <div class="flex flex-row gap-2">
          <div class="text-center p-2">
            <router-link to="/"><a class="text-lg">Home</a></router-link>
          </div>
          <div class="text-center p-2">
            <router-link to="/create"><a class="text-lg">Create Product</a></router-link>
          </div>
          <div class="text-center flex border rounded-full bg-red-500 text-white p-2 hover:text-red-500 hover:bg-white">
            <router-link to="/favorites"><a class="text-lg">My Favorites</a></router-link>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </div>
          <div class="text-center flex border rounded-full bg-purple-500 text-white hover:text-black p-2 mr-2 hover:text-purple-500 hover:bg-white">
            <router-link to="/shoppingcart"><a class="text-lg">Shopping Cart({{ $store.state.shoppingCartValue }})</a></router-link>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header"
}
</script>

<style scoped>

</style>
