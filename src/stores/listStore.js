import {defineStore} from "pinia";
import axiosInstance from "@/servers/request";
import axios from "axios";
axiosInstance.all = axios.all
axiosInstance.spread = axios.spread
const useListStore = defineStore("list", {
    state: () => ({
        input: '',
        tvData: {},
        movieData: {},
        personData: {},
        collectionData: {},
        // tvList: [],
        // movieList: [],
        // personList: [],
        // collectionList: [],
    }),
    getters: {},


    actions: {
        // async getSearchData() {
        //     await this.getSearchList()
        //     this.tvList =  this.tvData?.results
        //     this.movieList =  this.movieData?.results
        //     this.personList = this.personData?.results
        //     this.collectionList =  this.collectionData?.results
        // }

        //axios.all是一个静态方法
         async getSearchData() {
            Promise.all([
               await this.getSearchTV(),
                await this.getSearchMovie(),
                await this.getSearchPerson(),
                await this.getSearchCollection()
            ]).then(axiosInstance.spread(async (tvRes, movieRes, personRes, collectionRes) => {
                this.tvData = await tvRes.data
                this.movieData = movieRes.data
                this.personData = personRes.data
                this.collectionData = collectionRes.data
            }))
        },

        //search TV
        async getSearchTV() {
            return await axiosInstance.get('/search/tv', {
                params: {
                    api_key: '6575ea93f20a3172600a4cfb722e23ce',
                    language: 'zh',
                    query: this.input,
                    page: 1,
                    include_adult: false
                }
            })
        },
        async getSearchMovie() {
            return await axiosInstance.get('/search/movie', {
                params: {
                    api_key: '6575ea93f20a3172600a4cfb722e23ce',
                    language: 'zh',
                    query: this.input,
                    page: 1,
                    include_adult: false
                }
            })
        },
        async getSearchPerson() {
            return await axiosInstance.get('/search/person', {
                params: {
                    api_key: '6575ea93f20a3172600a4cfb722e23ce',
                    language: 'zh',
                    query: this.input,
                    page: 1,
                    include_adult: false
                }
            })
        },

        async getSearchCollection() {
            return await axiosInstance.get('/search/collection', {
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