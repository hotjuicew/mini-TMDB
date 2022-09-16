<template>
  <div class="search-bar">
    <div class="search-container">
      <div class="logo">
        <img src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_1-5bdc75aaebeb75dc7ae79426ddd9be3b2be1e342510f8202baf6bffa71d7f5c4.svg" alt="">
      </div>
      <el-input
          v-model="input"
          class="w-50 m-2"
          size="large"
          placeholder="搜索电影、电视剧、综艺、影人"
      />
      <button class="search" @click="clickSearch()">
        <el-icon>
          <Search/>
        </el-icon>
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref} from 'vue'
import {Search} from '@element-plus/icons-vue'
import useHomeStore from "@/stores/home";
const homeStore = useHomeStore()
import {useRouter} from "vue-router/dist/vue-router";
const router = useRouter()

let input = ref('')

async function clickSearch () {
  homeStore.input=input.value.trim()
  await homeStore.getSearchList()
  // await homeStore.getFullInf()
  // console.log(homeStore.fullMovieInf)
  console.log(homeStore.searchList)
  await router.push("/search")
}
</script>

<style lang="less" scoped>
.search-bar {
  margin-top: 10rem;
  height: 10vh;
  display: flex;

  flex-direction: column;
  justify-content: center;
  align-items: center;

  .logo {
    position: absolute;
    left: 26vw;
    top: 5vw;
    height: 56px;
    width: 145px;
  }

  :deep(.el-input) {
    display: inline;
    margin-right: 2rem;
  }

  :deep(.el-input__wrapper) {
    width: 40vw;

  }

  :deep(.search-bar) {
    height: auto;
  }

  .search {
    width: 3rem;
    height: 1.8rem;
    display: inline;
  }
}
</style>