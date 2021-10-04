<script>
import { ref } from 'vue'
import { mapState, mapActions } from 'vuex'

import AdList from './lists/AdList.vue'

export default {
  name: 'Home',
  components: {
    AdList,
  },
  data() {
    return {
    }
  },
  mounted () {
    this.getAdCategories()
    this.getAds({
      live: true
    })
  },
  computed: {
    ...mapState(['adCategories', 'ads']),
  },
  methods: {
    ...mapActions(['getAdCategories', 'getAds', 'changeTest']),
    updateStorage (val) {
      this.changeTest(val)
    }
  }
}
</script>

<template>
  
  <div class="w-full">

    <div class="fixed z-40 w-full flex justify-between items-center px-2 top-12 h-12 bg-blue-500">

      <router-link to="/ad-filter" class="w-10 h-10 rounded-full flex justify-center items-center">
        <fa icon="th" class="text-xl text-white" />
      </router-link>

      <div class="flex flex-grow justify-center items-center">
        <fa icon="search" class="absolute left-16 text-blue-500" />
        <input type="text" class="pl-10 pr-4 py-1 flex-grow bg-blue-300 focus:bg-white rounded-full" placeholder="Search" >
      </div>

    </div>

    <router-link to="/create" class="fixed bottom-16 right-2 shadow-lg rounded-full flex justify-center items-center text-white border-pink-600 bg-pink-600 text-xs h-10 w-10">
      <div class="">
        <fa icon="pencil-alt" class="text-xl" />
      </div>
    </router-link>

    <div class="pt-12 w-full text-left">
      <ad-list :ads="ads" />
    </div>

  </div>
</template>

<style scoped>
</style>
