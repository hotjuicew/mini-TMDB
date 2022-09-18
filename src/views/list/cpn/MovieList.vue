<template>
  <div class="movie-list">
    <h2>tvList</h2>
    <div class="list">
      <div class="item" v-for="item in movieList">
        <div class="left">
          <h3 class="title">{{ item.title }}</h3>
          <p class="original-title" v-if="item.original_title!==item.title">原名：{{item.original_title}}</p>
          <span class="time">{{item.release_date}}</span>
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
import useListStore from "@/stores/listStore";
import StarRate from '@/components/StarRate'
const listStore=useListStore()
const movieList=listStore.movieData.results
</script>

<style lang="less" scoped>
.movie-list{
  //align-self: center;
  display: flex;
  flex-direction: column;
  align-items:center;
  width: 45vw;
  position: sticky;
  top: 20vh;
  left: 27vw;

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