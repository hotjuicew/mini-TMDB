import {defineStore} from "pinia";
import axiosInstance from "@/servers/request";

const useHomeStore = defineStore("home", {
    state: () => ({
        input:'111',
        searchedFlag:false, //标记是否点了搜索建
        searchList: [],
        fullMovieInf: []
    }),
    getters: {
        getSearchListSid: function (state) {
            let sid
            sid=state.searchList.map(item => item.sid)
            return sid
        }
    },


    actions: {
        //通过关键词搜索
         async getSearchList(){
            await axiosInstance.get('/search/multi', {
                params: {
                    api_key: '6575ea93f20a3172600a4cfb722e23ce',
                    language:'zh',
                    query: this.input,
                    page: 1,
                    include_adult:false
                }
            }).then(res => {
                this.searchList = res.data.results
            })
        },
        //通过sid获取数据
         async getFullInf() {
             this.fullMovieInf=[]
             for(let i=0;i<3;i++){
                 let sid=await this.getSearchListSid[i]
                await axiosInstance.get('/movies/' + sid).then(res => {
                     this.fullMovieInf.push(res.data)
                 })
             }
        }

    }
})

export default useHomeStore