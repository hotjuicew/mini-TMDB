<template>
  <div class="home">
    <div class="search-bar">
      <el-input
          v-model="input"
          class="w-50 m-2"
          size="large"
          placeholder="Please Input"
      />
      <button class="search" @click="clickSearch()"><el-icon><Search /></el-icon></button>
    </div>



    <router-view></router-view>
  </div>


</template>

<script setup>
import {computed, ref} from 'vue'
import { Search } from '@element-plus/icons-vue'
import axiosInstance from '@/servers/request/index'
import useHomeStore from "@/stores/home";
import { useRouter } from "vue-router";
const router=useRouter()
const input = ref('')
const homeStore = useHomeStore()

const trimInput = computed(() => {
  return input.value.trim()
})

const clickSearch = () => {
  axiosInstance.get('/movies', {
    params: {
      type:'partial',
      q: trimInput.value,
      s:'s'
    }
  }).then(res => {
    console.log("res:", res.data)
    homeStore.searchList=res.data
    console.log(homeStore.searchList[0].name)

    router.push("/search/"
    )
  })
}


</script>

<style lang="less" scoped>
.home{
  margin-top: 10rem;
  height: 80vh;
  display: flex;
  flex-direction:column;
  :deep(.el-input){
    display:inline;
    margin-right: 2rem;
  }
  :deep(.el-input__wrapper){
    width: 40vw;

  }
  :deep(.search-bar){
    height: auto;
  }
  .search{
    width: 3rem;
    height: 1.8rem;
    display:inline;
  }
}
</style>

<!--<style lang="less" scoped>-->
<!--.home{-->
<!--  display: flex;-->
<!--  flex-direction: column;-->
<!--  justify-content: center;-->
<!--  align-items: center;-->
<!--}-->
<!--</style>-->
