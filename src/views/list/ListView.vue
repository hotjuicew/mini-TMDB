<template>
  <div class="list-view">
    <div class="list">
      <header class="search-title">相关豆瓣内容:</header>
      <div class="item" v-for="item in newList.value">
        <div class="left">
          <h3 class="title">{{ item.name }}</h3>
          <div class="year">{{item.year}}</div>
        </div>
        <div class="right">
          <img class="search-img" :src="item.img" :alt="item.name+'图片'">
        </div>
      </div>
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

// import { getCurrentInstance } from 'vue'
// const instance = getCurrentInstance();
// instance?.proxy?.$forceUpdate();
</script>

<style lang="less" scoped>
.list-view{
  display: flex;
  justify-content: center;
}
.list{
  display: flex;
  flex-direction: column;
  align-items:center;
  width: 50vw;
  .search-title{
    align-self:flex-start;
  }
  .search-title{
    font-size: 1.2rem;
  }
  .item{
    display: flex;
    justify-content: space-between;
    width: 50vw;
    margin-top: 1rem;
    .left{
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      .year{
        margin-top: 0.5rem;
      }
    }
    .search-img{
      width: 10vw;
    }
  }
  //.item:after {
  //  content: '\0020';
  //  clear: both;
  //  display: block;
  //}
}
</style>
<!--<style lang="less" scoped>-->
<!--.list-view{-->
<!--  display: flex;-->
<!--  justify-content: center;-->
<!--}-->
<!--.list{-->
<!--  display: flex;-->
<!--  flex-direction: column;-->
<!--  align-items:center;-->
<!--  width: 50vw;-->
<!--  .search-title{-->
<!--    align-self:flex-start;-->
<!--  }-->
<!--  .search-title{-->
<!--    font-size: 1.2rem;-->
<!--  }-->
<!--  .item{-->
<!--    display: flex;-->
<!--    justify-content: space-between;-->
<!--    width: 50vw;-->
<!--    margin-top: 1rem;-->
<!--    .left{-->
<!--      display: flex;-->
<!--      flex-direction: column;-->
<!--      align-items: flex-start;-->
<!--    }-->
<!--    .search-img{-->
<!--      width: 10vw;-->
<!--    }-->
<!--  }-->
<!--  .item:after {-->
<!--    content: '\0020';-->
<!--    clear: both;-->
<!--    display: block;-->
<!--  }-->
<!--}-->
<!--</style>-->