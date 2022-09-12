import { defineStore } from "pinia";

const useHomeStore = defineStore("home", {
    state: () => ({
        searchList:[]

    }),
    actions: {
        // async fetchSearchList() {
        //     const res = await getSearchList()
        //     this.searchList = res.data
        // },
    }
})

export default useHomeStore