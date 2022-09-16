<template>
  <div class="list-view">
    <div class="list">
      <header class="search-title" >相关豆瓣内容:</header>
      <div class="item" v-for="item in homeStore.searchList">
        <div class="left">
          <h3 class="title">{{ item.title }}{{item.name}}</h3>
          <span class="time">{{item.release_date}}{{item.first_air_date
            }}</span>
          <star-rate :value="item.vote_average"></star-rate>
        </div>
        <div class="right">
          <img class="search-img" :src="'http://image.tmdb.org/t/p/w500/'+item.poster_path"  alt="{{item.name}}">
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref} from 'vue'
import useHomeStore from "@/stores/home";
import StarRate from '@/views/list/cpn/StarRate'
const homeStore=useHomeStore()

//截取年份
const getYear = ((time) => {
  if(time){
    return time.slice(0,4)
  }
  else return ''
})

// star
const value = ref()

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
      .time{
        margin-top: 0.2rem;
        font: 1rem Arial, Helvetica, sans-serif;
        line-height: 150%;
        color: #666666;
      }
      .star{
        margin-top: 0.3rem;
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