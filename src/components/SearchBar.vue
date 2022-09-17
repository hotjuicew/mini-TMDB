<template>
  <div class="search-bar">
    <div class="search-container">
      <div class="logo">
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
import useListStore from "@/stores/listStore";
const listStore = useListStore()
import {useRouter} from "vue-router/dist/vue-router";
const router = useRouter()

let input = ref('')

async function clickSearch () {
  listStore.input=input.value.trim()
  await listStore.getSearchList()
  console.log(listStore.movieList[0])
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
    background: url(//img3.doubanio.com/dae/accounts/resources/3e96b44/movie/assets/lg_movie_a12_2.png) no-repeat 0 12px;
    background-image: -webkit-image-set(url(//img3.doubanio.com/dae/accounts/resources/3e96b44/movie/assets/lg_movie_a12_2.png) 1x, url(//img3.doubanio.com/dae/accounts/resources/3e96b44/movie/assets/lg_movie@2x.png) 2x);
    //background-image: -moz-image-set(url(//img3.doubanio.com/dae/accounts/resources/3e96b44/movie/assets/lg_movie_a12_2.png) 1x, url(//img3.doubanio.com/dae/accounts/resources/3e96b44/movie/assets/lg_movie@2x.png) 2x);
    //background-image: -ms-image-set(url(//img3.doubanio.com/dae/accounts/resources/3e96b44/movie/assets/lg_movie_a12_2.png) 1x, url(//img3.doubanio.com/dae/accounts/resources/3e96b44/movie/assets/lg_movie@2x.png) 2x);
    //background-image: -o-image-set(url(//img3.doubanio.com/dae/accounts/resources/3e96b44/movie/assets/lg_movie_a12_2.png) 1x, url(//img3.doubanio.com/dae/accounts/resources/3e96b44/movie/assets/lg_movie@2x.png) 2x);
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