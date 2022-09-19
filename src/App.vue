<template>
  <div id="app">
    <search-bar></search-bar>
   <router-view :key="key"></router-view>
  </div>

</template>
<script setup>
import SearchBar from "@/components/SearchBar";
import useListStore from "@/stores/listStore";
import {storeToRefs} from "pinia/dist/pinia";
const listStore=useListStore()
const { key } = storeToRefs(listStore);
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
