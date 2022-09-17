import {defineStore} from "pinia";
import axiosInstance from "@/servers/request";
import axios from "axios";

axiosInstance.all = axios.all
axiosInstance.spread = axios.spread
const useListStore = defineStore("list", {
    state: () => ({
        input: '',
        tvData:{},
        movieData:{},
        personData:{},
        collectionData:{},
        tvList: this.tvData.results,
        movieList: this.movieData.results,
        personList: this.personData.results,
        collectionList: this.collectionData.results,
    }),
    getters: {

    },


    actions: {
        //axios.all是一个静态方法
        getSearchList() {
            Promise.all([
                this.getSearchTV(),
                this.getSearchMovie(),
                this.getSearchPerson(),
                this.getSearchCollection()
            ]).then(axiosInstance.spread((tvRes, movieRes, personRes, collectionRes) => {
                this.tvData = tvRes.data
                this.movieData = movieRes.data
                this.personData = personRes.data
                this.collectionData = collectionRes.data
            }))
        },

        //search TV
        getSearchTV() {
            return axiosInstance.get('/search/tv', {
                params: {
                    api_key: '6575ea93f20a3172600a4cfb722e23ce',
                    language: 'zh',
                    query: this.input,
                    page: 1,
                    include_adult: false
                }
            })
        },
        getSearchMovie() {
            return axiosInstance.get('/search/movie', {
                params: {
                    api_key: '6575ea93f20a3172600a4cfb722e23ce',
                    language: 'zh',
                    query: this.input,
                    page: 1,
                    include_adult: false
                }
            })
        },
        getSearchPerson() {
            return axiosInstance.get('/search/person', {
                params: {
                    api_key: '6575ea93f20a3172600a4cfb722e23ce',
                    language: 'zh',
                    query: this.input,
                    page: 1,
                    include_adult: false
                }
            })
        },

        getSearchCollection() {
            return axiosInstance.get('/search/collection', {
                params: {
                    api_key: '6575ea93f20a3172600a4cfb722e23ce',
                    language: 'zh',
                    query: this.input,
                    page: 1,
                }
            })
        },

    }
})

export default useListStore