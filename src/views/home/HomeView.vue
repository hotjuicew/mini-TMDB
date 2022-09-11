<template>
  <div class="home">
    <home-header></home-header>
    <home-body></home-body>
  </div>
</template>

<script>
// @ is an alias to /src
import HomeHeader from '@/views/home/cpns/HomeHeader'
import HomeBody from '@/views/home/cpns/HomeBody'
export default {
  name: 'HomeView',
  components: {
    HomeHeader,
    HomeBody
  }
}
</script>
<style lang="less" scoped>
.home{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
