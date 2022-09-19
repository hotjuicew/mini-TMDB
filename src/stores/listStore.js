import {defineStore} from "pinia";
import axiosInstance from "@/servers/request";
import axios from "axios";
import jsonToHump from "@/hooks/jsonToHump";
axiosInstance.all = axios.all
axiosInstance.spread = axios.spread
const useListStore = defineStore("list", {
    state: () => ({
        tvCrtPage:1,
        key:0,
        input: '',
        tvData: {},
        movieData: {},
        personData: {},
        collectionData: {},
    }),
    getters: {},


    actions: {
        tvDataJTH(){
            const tvData=this.tvData
            jsonToHump(tvData)
            return tvData
        },
        movieDataJTH(){
            const movieData=this.movieData
            jsonToHump(movieData)
            return movieData
        },
        personDataJTH(){
            const personData=this.personData
            jsonToHump(personData)
            return personData
        },
        collectionDataJTH(){
            const collectionData=this.collectionData
            jsonToHump(collectionData)
            return collectionData
        },
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