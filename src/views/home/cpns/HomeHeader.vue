<template>
  <div class="home-header">
    <div class="demo-input-size">
      <el-input
          v-model="input"
          class="w-50 m-2"
          size="large"
          placeholder="Please Input"
      />
      <button @click="clickSearch(input)"><el-icon><Search /></el-icon></button>
  </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { Search } from '@element-plus/icons-vue'
const input = ref('')
const clickSearch = (input) => {
  console.log(input.trim())
}
</script>

<style lang="less" scoped>
.home-header{
  height: 25vh;
}
</style>
