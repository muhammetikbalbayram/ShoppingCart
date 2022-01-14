<template>
<div>
  <header-bar></header-bar>
  <router-view></router-view>
</div>
</template>

<script>
import Header from "@/components/Header";
import axios from "axios";
import {store} from "@/store/store";

export default {
  name: 'App',
  components: {
    HeaderBar : Header
  },
  mounted() {
    axios.get('http://localhost:5000/products')
        .then(res => {
          store.state.products=res.data
        })
  }
}
</script>

<style>

</style>
