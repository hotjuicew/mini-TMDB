<template>
  <div class="tvList">
    <div class="list" v-if="tvData.totalResults!==0">
      <div class="item" v-for="item in tvList">
        <div class="left">
          <h3 class="title">{{item.name}}</h3>
          <p class="original-title" v-if="item.originalName!==item.name">原名：{{item.originalName}}</p>
          <span class="time">{{item.firstAirDate}}</span>
          <star-rate :value="item.voteAverage"></star-rate>
          <div class="overview">{{item.overview}}</div>
        </div>
        <div class="right" v-if="item.posterPath">
          <img class="search-img" :src="'http://image.tmdb.org/t/p/w500'+item.posterPath"  alt="{{item.name}}">
        </div>
      </div>
    </div>
    <div class="not-found" v-else>找不到和您的查询相符的剧集,可以换个关键词试试</div>
    <div class="pagination">
      <el-pagination
       :default-current-page="listStore.tvCrtPage"
      @current-change="currentChange"
      v-model:current-page="currentPage"
      layout="prev, pager, next"
      :page-count="tvData.totalPages"
      :total="tvData.totalResults"
    />
    </div>
  </div>
</template>

<script setup>
import useListStore from "@/stores/listStore";
import StarRate from '@/components/StarRate'
import {onMounted} from "vue";
const listStore=useListStore()
const tvData=listStore.tvDataJTH()
const tvList=tvData.results
//鼠标切换当前页面

async function currentChange(currentPage){
   listStore.tvCrtPage=currentPage
  console.log(listStore.tvCrtPage)
  await listStore.getSearchTV(currentPage).then(res=>{
    listStore.tvData =res.data
  })
  listStore.key+=1
}


</script>

<style lang="less" scoped>
.tvList{
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
  .not-found{
    margin-top: 1rem;
    align-self: flex-start;
  }
}
</style>