<template>
  <div class="list-view">
    <side-bar :key="key"></side-bar>
<router-view :key="key"></router-view>
  </div>
</template>

<script setup>
import SideBar from '@/views/list/cpn/SideBar'
import useListStore from "@/stores/listStore";
import {storeToRefs} from "pinia/dist/pinia";
const listStore=useListStore()
const { key } = storeToRefs(listStore);

</script>

<style lang="less" scoped>

.list-view{
  display: flex;
}

</style>
