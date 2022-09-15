<template>
  <div class="search-bar">
    <div class="search-container">
      <el-input
          v-model="input"
          class="w-50 m-2"
          size="large"
          placeholder="Please Input"
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


const clickSearch = () => {
  homeStore.input=input.value.trim()
  homeStore.getSearchList()
  router.push("/search")
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

  .search-container {
    display: inline;
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