import {defineStore} from "pinia";
import axiosInstance from "@/servers/request";
import axios from "axios";
axiosInstance.all=axios.all
axiosInstance.spread=axios.spread
const useListStore = defineStore("list", {
    state: () => ({
        input:'',
        tvList: [],
        movieList:[],
        personList:[],
        collectionList:[],
    }),
    getters: {
       // getSearchList(){
       //      this.getSearchMovie().then(res => {
       //          this.movieList = res.data.results
       //      })
       //      this.getSearchTV().then(res => {
       //          this.tvList = res.data.results
       //      })
       //      this.getSearchPerson().then(res => {
       //          this.personList = res.data.results
       //      })
       //     this.getSearchCollection().then(res => {
       //          this.collectionList = res.data.results
       //      })
       //  },
    },


    actions: {
        //axios.all是一个静态方法
        getSearchList(){
            Promise.all([
                this.getSearchTV(),
                this.getSearchMovie(),
                this.getSearchPerson(),
                this.getSearchCollection()
            ]).then(axiosInstance.spread((tvRes, movieRes,personRes,collectionRes) => {
    this.movieList = tvRes.data.results
    this.tvList = movieRes.data.results
    this.personList = personRes.data.results
    this.collectionList = collectionRes.data.results
            }))
        },


        //search TV
         getSearchTV(){
            return axiosInstance.get('/search/tv', {
                params: {
                    api_key: '6575ea93f20a3172600a4cfb722e23ce',
                    language:'zh',
                    query: this.input,
                    page: 1,
                    include_adult:false
                }
            })
        },
         getSearchMovie(){
            return axiosInstance.get('/search/movie', {
                params: {
                    api_key: '6575ea93f20a3172600a4cfb722e23ce',
                    language:'zh',
                    query: this.input,
                    page: 1,
                    include_adult:false
                }
            })
        },
         getSearchPerson(){
            return axiosInstance.get('/search/person', {
                params: {
                    api_key: '6575ea93f20a3172600a4cfb722e23ce',
                    language:'zh',
                    query: this.input,
                    page: 1,
                    include_adult:false
                }
            })
        },

         getSearchCollection(){
            return axiosInstance.get('/search/collection', {
                params: {
                    api_key: '6575ea93f20a3172600a4cfb722e23ce',
                    language:'zh',
                    query: this.input,
                    page: 1,
                }
            })
        },

    }
})

export default useListStore