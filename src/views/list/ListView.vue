<template>
  <div class="list-view">
    <div class="list">
      <header class="search-title" >相关豆瓣内容:</header>
      <div class="item" v-for="item in homeStore.searchList">
        <div class="left">
          <h3 class="title">{{ item.title }}{{item.name}}</h3>
          <p class="original-title" v-if="item.original_title!==item.name&&item.original_title!==item.title">原名：{{item.original_title}}</p>
          <span class="time">{{item.release_date}}{{item.first_air_date
            }}</span>
          <star-rate :value="item.vote_average"></star-rate>
          <div class="overview">{{item.overview}}</div>
        </div>
        <div class="right">
          <img class="search-img" :src="'http://image.tmdb.org/t/p/w500/'+item.poster_path"  alt="{{item.name}}">
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

import useHomeStore from "@/stores/home";
import StarRate from '@/views/list/cpn/StarRate'
const homeStore=useHomeStore()





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
    max-height: calc(@img-height - 0.7rem) ;
    margin-top: 1rem;
    @item-padding:1rem;
    padding: @item-padding;
    box-shadow: 0 2px 8px rgb(0 0 0 / 10%);
    border: 1px solid rgba(var(--lightGrey), 1);
    background-color: #fff;
    .left{
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      text-align: left;
      .original-title .time{
        margin-top: 0.1rem;
        font: 1rem Arial, Helvetica, sans-serif;
        line-height: 150%;
        color: #666666;
      }
      .star{
        margin-top: 0.3rem;
      }
      .overview{
        overflow:hidden;
        text-overflow:ellipsis;
        padding-right: 5px;
      }
    }
    @img-height: 12vw;//;忘记了 迷惑了好久QAQ
    .search-img{
      height: @img-height;
    }
  }

}
</style>
