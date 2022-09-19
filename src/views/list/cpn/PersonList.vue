
<template>
  <div class="person-list">
    <h2>personList</h2>
    <div class="list">
      <div class="item" v-for="item in personList">
        <div class="left">
          <h3 class="title">{{item.name}}</h3>
          <span class="time">{{item.knownFor.firstAirDate}}</span>
        </div>
        <template v-if="item.profilePath">
          <div class="right" >
            <img class="search-img" :src="'http://image.tmdb.org/t/p/w500/'+item.profilePath"
                 alt="{{item.name}}">
          </div>
        </template>
        <template v-else >
          <div class="right" >
            <img src="https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-4-user-grey-d8fe957375e70239d6abdd549fd7568c89281b2179b5f4470e2e12895792dfa5.svg" alt="{{item.name}}">
          </div>
        </template>

      </div>
    </div>
  </div>
</template>

<script setup>
import useListStore from "@/stores/listStore";
import jsonToHump from "@/hooks/jsonToHump";
const listStore=useListStore()
const personData=listStore.personData
jsonToHump(personData)
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

}
</style>