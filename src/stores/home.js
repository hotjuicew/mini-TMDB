import {defineStore} from "pinia";
import axiosInstance from "@/servers/request";

const useHomeStore = defineStore("home", {
    state: () => ({
        input:'111',
        searchList: [
            {
                "sid": "1295038",
                "name": "哈利·波特与魔法石",
                "rating": "0",
                "img": "https://img2.doubanio.com/view/photo/s/public/p2614949805.jpg",
                "year": "2001"
            },
            {
                "sid": "1291544",
                "name": "哈利·波特与阿兹卡班的囚徒",
                "rating": "0",
                "img": "https://img2.doubanio.com/view/photo/s/public/p1910812549.jpg",
                "year": "2004"
            },
            {
                "sid": "1296996",
                "name": "哈利·波特与密室",
                "rating": "0",
                "img": "https://img2.doubanio.com/view/photo/s/public/p2440298618.jpg",
                "year": "2002"
            }
        ],
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
            await axiosInstance.get('/movies', {
                params: {
                    type: 'partial',
                    q: this.input,
                    s: 's'
                }
            }).then(res => {
                console.log("res:", res.data)
                this.searchList = res.data
                console.log(this.state.searchList[0].name)
            })
        },
        //通过sid获取数据
        getFullInf: () => {
            axiosInstance.get('/movies' + this.getSearchListSid[0]).then(res => {
                this.fullMovieInf.push = res.data
            })
        }

    }
})

export default useHomeStore