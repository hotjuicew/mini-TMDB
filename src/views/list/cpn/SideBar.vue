<template>
  <div class="side-bar">
    <h5 class="mb-2 title">搜索结果</h5>
    <el-menu
        default-active="1"
        class="el-menu-vertical-demo"
    >
      <el-menu-item index="1" >
        <span class="side-bar-name">剧集</span>
      </el-menu-item>
      <el-menu-item index="2" @click="clickMovie()">
        <span class="side-bar-name">电影</span>
      </el-menu-item>
      <el-menu-item index="3" >
        <span class="side-bar-name">人物</span>
      </el-menu-item>
      <el-menu-item index="4">
        <span class="side-bar-name">系列</span>
      </el-menu-item>
    </el-menu>

  </div>
</template>

<script setup>
import {useRouter} from "vue-router/dist/vue-router";
const router = useRouter()
const clickMovie = () => {
  router.push('/movie')
}
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
  .side-bar-name{
   align-self: center;
    font-size: 1rem;
  }
}
</style>