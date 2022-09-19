
<template>
  <div class="person-list">
    <div class="list" v-if="personData.totalResults!==0">
      <div class="item" v-for="item in personList">
        <div class="left">
          <h3 class="title">{{item.name}}</h3>
          <span class="time">{{item.knownFor.firstAirDate}}</span>
        </div>
          <div class="right" >
            <img class="search-img" v-if="item.profilePath" :src="'http://image.tmdb.org/t/p/w500/'+item.profilePath"
                 :alt="item.name">
          </div>

      </div>
    </div>
    <div class="not-found" v-else>找不到和您的查询相符的人物,可以换个关键词试试</div>

  </div>
</template>

<script setup>
import useListStore from "@/stores/listStore";
import jsonToHump from "@/hooks/jsonToHump";
const listStore=useListStore()
const personData=listStore.personDataJTH()
const personList=personData.results
</script>

<style lang="less" scoped>
.person-list{
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

    }
    @img-height: 12vw;//;忘记了 迷惑了好久QAQ
    .search-img{
      height: @img-height;
    }
  }
  .not-found{
    margin-top: 1rem;
    align-self: flex-start;
  }
}
</style>