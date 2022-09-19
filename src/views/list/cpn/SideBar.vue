<template>
  <div class="side-bar">
    <h5 class="mb-2 title">搜索结果</h5>
    <el-menu
        default-active="1"
        class="el-menu-vertical-demo"
    >
      <el-menu-item index="1" @click="clickTV">
        <div class="item">
          <span class="side-bar-name" >剧集</span>
          <span class="num">{{tvTotalResults}}</span>
        </div>
      </el-menu-item>
      <el-menu-item index="2" @click="clickMovie">
       <div class="item">
         <span class="side-bar-name">电影</span>
         <span class="num">{{movieTotalResults}}</span>
       </div>
      </el-menu-item>
      <el-menu-item index="3" @click="clickPerson">
        <div class="item">
          <span class="side-bar-name">人物</span>
          <span class="num">{{personTotalResults}}</span>
        </div>
      </el-menu-item>
      <el-menu-item index="4" @click="clickCollectionList">
       <div class="item">
         <span class="side-bar-name">系列</span>
         <span class="num">{{collectionTotalResults}}</span>
       </div>
      </el-menu-item>

    </el-menu>
  </div>
</template>

<script setup>
import {useRouter} from "vue-router/dist/vue-router";
const router = useRouter()
const clickTV = () => {
  router.push('/search/tv')
}
const clickMovie = () => {
  router.push('/search/movie')
}
const clickPerson = () => {
  router.push('/search/person')
}
const clickCollectionList = () => {
  router.push('/search/collection')
}
import useListStore from "@/stores/listStore";
const listStore=useListStore()
const tvTotalResults=listStore.tvDataJTH().totalResults
const movieTotalResults=listStore.movieDataJTH().totalResults
const personTotalResults=listStore.personDataJTH().totalResults
const collectionTotalResults=listStore.collectionDataJTH().totalResults
</script>

<style lang="less" scoped>
.title{
  font-size: 1.5rem;
  font-weight: bold;
}
.side-bar{
  width: 10vw;
  margin-right: 5vw;
  margin-left: 10vw;
  .el-menu-item{
    justify-content: center;
  }
  .item{
    display: flex;
    height: 1.5rem;

    .side-bar-name{
      align-self: center;
      font-size: 1rem;
    }
    .num{
      margin-left: 1rem;
      display: inline-flex;
      align-items: center;
      font-size: 0.8em;
      font-weight: 300;
      font-family: 'Roboto Mono', monospace;
      background-color: rgba(0,0,0,0.08);
      padding: 0 15px;
      border-radius: 8px;}
  }
}
</style>