<template>
  <div class="side-bar">
    <template>
      <el-row class="tac">
        <el-col :span="12">
          <h5 class="mb-2">Default colors</h5>
          <el-menu
              default-active="2"
              class="el-menu-vertical-demo"
              @open="handleOpen"
              @close="handleClose"
          >
            <el-menu-item index="1">
              <span>剧集</span>
            </el-menu-item>
            <el-menu-item index="2">
              <span>电影</span>
            </el-menu-item>
            <el-menu-item index="3" >
              <span>人物</span>
            </el-menu-item>
            <el-menu-item index="4">
              <span>系列</span>
            </el-menu-item>
          </el-menu>
        </el-col>

      </el-row>
    </template>
  </div>
</template>

<script setup>

</script>

<style lang="less" scoped>

</style>