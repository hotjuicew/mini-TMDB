import {defineStore} from "pinia";
import axiosInstance from "@/servers/request";

const useHomeStore = defineStore("home", {
    state: () => ({
        input:'111',
        searchedFlag:false, //标记是否点了搜索建
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
        fullMovieInf: [{
            "name": "哈利·波特与魔法石",
            "originalName": "Harry Potter and the Sorcerer's Stone",
            "rating": "9.2",
            "img": "https://img2.doubanio.com/view/photo/s/public/p2614949805.jpg",
            "sid": "1295038",
            "year": "2001",
            "intro": "哈利波特是一个孤儿，从小寄养在姨妈家，受尽欺凌。但就在哈利11岁生日的时候，他意外收到了霍格沃茨学院的入学通知书。哈利从该学院派来接他的巨人海格口中得知，这是一间魔法学院，并得知了自己的身世，原来哈利的父母都是伟大的魔法师，在对付伏地魔的战斗中双双献身，唯有哈利幸免于难。哈利进入霍格沃茨后，表现出了超乎想象的飞行天赋，得到麦格教授的推荐进入了格兰芬多的魁地奇球队。另一方面，哈利发现霍格沃茨学院内有一股黑暗势力似乎在暗暗滋长，揭开谜团的关键就在有凶恶的三头犬守护的房间内。哈利、罗恩和赫敏三个好朋友决定探个究竟。",
            "director": "克里斯·哥伦布",
            "writer": "史蒂夫·克洛夫斯 / J. K. 罗琳",
            "actor": "丹尼尔·雷德克里夫 / 艾玛·沃森 / 鲁伯特·格林特 / 艾伦·瑞克曼 / 玛吉·史密斯 / 汤姆·费尔顿 / 伊恩·哈特 / 理查德·哈里斯 / 约翰·赫特 / 罗彼·考特拉尼 / 朱丽·沃特斯 / 邦妮·怀特 / 约翰·克里斯 / 肖恩·比格斯代夫",
            "genre": "奇幻 / 冒险",
            "site": "www.harrypotter.co.uk",
            "country": "美国 / 英国",
            "language": "英语",
            "screen": "2002-01-26(中国大陆) / 2020-08-14(中国大陆重映) / 2001-11-04(英国首映) / 2001-11-16(美国)",
            "duration": "152分钟 / 159分钟(加长版)",
            "subname": "哈利波特1：神秘的魔法石(港/台) / 哈1 / Harry Potter and the Philosopher's Stone",
            "imdb": "tt0241527",
            "celebrities": [
                {
                    "id": "1049716",
                    "img": "https://img3.doubanio.com/view/celebrity/raw/public/p10680.jpg",
                    "name": "克里斯·哥伦布",
                    "role": "导演"
                }
            ]
        }]
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
                this.searchList = res.data
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