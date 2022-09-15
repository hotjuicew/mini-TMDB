<template>
  <div class="list-view">
    <div class="list">
      <header class="search-title" >相关豆瓣内容:</header>
      <div class="test">{{homeStore.getSearchListSid[0]}}{{fullMovieInf[0].name}}</div>
      <div class="item" v-for="item in homeStore.searchList">
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

import useHomeStore from "@/stores/home";
const homeStore=useHomeStore()
import { storeToRefs } from 'pinia'
const { fullMovieInf } = storeToRefs(homeStore)
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
  width: 45vw;
  .search-title{
    align-self:flex-start;
  }
  .search-title{
    font-size: 1.2rem;
  }
  .item{
    display: flex;
    justify-content: space-between;
    width: 45vw;
    margin-top: 1rem;
    .left{
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      text-align: left;
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