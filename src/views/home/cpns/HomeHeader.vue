<template>
  <div class="home-header">
    <el-input v-model="input" placeholder="Please input" />
    <Search style="width: 1em; height: 1em; margin-right: 8px" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
const input = ref('')
</script>

<style lang="less" scoped>
.home-header{
  height: 25vh;
}
</style>