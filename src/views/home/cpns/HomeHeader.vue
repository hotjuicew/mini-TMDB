<template>
  <div class="home-header">
    <div class="demo-input-size">
      <el-input
          v-model="input"
          class="w-50 m-2"
          size="large"
          placeholder="Please Input"
      />
      <button @click="clickSearch()"><el-icon><Search /></el-icon></button>
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
  height: 25vh;
}
</style>
