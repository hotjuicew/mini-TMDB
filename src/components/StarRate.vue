<template>
  <div class="starRate">
    <!-- 原来必须是value 而不能自己命名 好坑QAQ-->
    <el-rate
        v-model="value"
        disabled
        show-score
        text-color="#ff9900"
        score-template="{value}"
    />
  </div>
</template>

<script setup>

// 从 vue 中引入defineProps
import {defineProps, ref} from 'vue'

// 接收父组件传递过来的值
const props = defineProps(['value'])
let value=ref((props.value/2).toFixed(1))
</script>

<style lang="less" scoped>
.starRate{
  position: relative;
  right: 3px;
}
</style>