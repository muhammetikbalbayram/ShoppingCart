<template>
<div>
  <div>
    <img class="h-20 w-20" :src="$store.state.product.image" alt="">
    <div>{{ $store.state.product.name }}</div>
    <div>{{ $store.state.product.price }}</div>
  </div>
</div>
</template>

<script>
export default {
  name: "Product"
}
</script>

<style scoped>

</style>
