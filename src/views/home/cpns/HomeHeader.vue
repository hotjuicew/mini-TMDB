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

    <div class="list" v-if="flag">
      <div class="item" v-for="item in newList.value">
          <div class="left">
            <h3 class="title">{{ item.name }}</h3>
          </div>
        <div class="right">
          <img :src="item.img" :alt="item.name+'图片'">
        </div>
      </div>
    </div>
    </div>
</template>

<script setup>
import {computed, ref} from 'vue'
import { Search } from '@element-plus/icons-vue'
import axiosInstance from '@/servers/request/index'
import useHomeStore from "@/stores/home";
const input = ref('')
const homeStore = useHomeStore()
let flag =ref(false)
//一定得是响应式的才能渲染出来
let list =ref([
  {
    "sid": "1291842",
    "name": "当哈利遇到莎莉",
    "rating": "0",
    "img": "https://img2.doubanio.com/view/photo/s/public/p2172960925.jpg",
    "year": "1989"
  },
  {
    "sid": "1295038",
    "name": "哈利·波特与魔法石",
    "rating": "0",
    "img": "https://img2.doubanio.com/view/photo/s/public/p2614949805.jpg",
    "year": "2001"
  },
  {
    "sid": "1298385",
    "name": "解构爱情狂",
    "rating": "0",
    "img": "https://img2.doubanio.com/view/photo/s/public/p2099964935.jpg",
    "year": "1997"
  }
])
const newList = computed(() => {
  let reg=/img2/
  for(let item of list.value){
    item.img=item.img.replace(reg,'img9') //replace函数 原字符串不会改变
  }
  return  list
})
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
    list.value =homeStore.searchList
    console.log('list[0].name是'+list.value[0].name)
    flag.value=true
    console.log(flag.value)
  })
}


</script>

<style lang="less" scoped>
.home-header{
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
  :deep(.demo-input-size){
    height: auto;
  }
 .search{
    width: 3rem;
    height: 1.8rem;
    display:inline;
  }
}
</style>
