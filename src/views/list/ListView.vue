<template>
  <div class="Title">
   <h2>List</h2>
    <div class="list">
<!--      <div class="item" v-for="item in newList.value">-->
<!--        <div class="left">-->
<!--          <h3 class="title">{{ item.name }}</h3>-->
<!--        </div>-->
<!--        <div class="right">-->
<!--          <img :src="item.img" :alt="item.name+'图片'">-->
<!--        </div>-->
<!--      </div>-->
    </div>
  </div>
</template>

<script setup>
import {computed, ref} from "vue";
import useHomeStore from "@/stores/home";

const homeStore=useHomeStore()
let list =ref(homeStore.searchList)

const newList = computed(() => {
  let reg=/img2/
  for(let item of list.value){
    item.img=item.img.replace(reg,'img9') //replace函数 原字符串不会改变
  }
  return  list
})
</script>

<style lang="less" scoped>

</style>