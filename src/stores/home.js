import { defineStore } from "pinia";

const useHomeStore = defineStore("home", {
    state: () => ({
        searchList:[
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
        ]

    }),
    actions: {
        // async fetchSearchList() {
        //     const res = await getSearchList()
        //     this.searchList = res.data
        // },
    }
})

export default useHomeStore