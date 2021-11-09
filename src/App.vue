<template>
<div>
  <header-bar></header-bar>
  <router-view></router-view>
</div>
</template>

<script>
import Header from "@/components/Header";

export default {
  name: 'App',
  components: {
    HeaderBar : Header
  }
}
</script>

<style>

</style>
