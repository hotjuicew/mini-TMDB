<template>
  <div class="home-header">
    <div class="demo-input-size">
      <el-input
          v-model="input"
          class="w-50 m-2"
          size="large"
          placeholder="Please Input"
      />
      <button class="search" @click="clickSearch()"><el-icon><Search /></el-icon></button>
  </div>
    </div>
</template>

<script setup>
import {computed, ref} from 'vue'
import { Search } from '@element-plus/icons-vue'
import axiosInstance from '@/servers/request/index'
const input = ref('')

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
  })
}
</script>

<style lang="less" scoped>
.home-header{
  margin-top: 10rem;
  height: 25vh;
  display: flex;
  flex-direction:row;
  :deep(.el-input){
    display:inline;
    margin-right: 2rem;
  }
  :deep(.el-input__wrapper){
    width: 40vw;

  }
  .search{
    width: 3rem;
    height: 1.8rem;
    display:inline;
  }
}
</style>
