<script>
import { ref } from 'vue'
import { mapState, mapActions } from 'vuex'
import WorkList from './lists/WorkList.vue'

export default {
  name: 'Work',
  components: {
    WorkList,
  },
  data() {
    return {
    }
  },
  mounted () {
    this.getSkills()
  },
  computed: {
    ...mapState(['url', 'skills'])
  },
  methods:  {
    ...mapActions(['getSkills'])
  }
}
</script>

<template>

  <div class="mt-2 w-full text-left">

    <div class="fixed z-40 w-full flex justify-center items-center px-2 top-12 h-12 bg-blue-500">

      <!-- <router-link to="/ad-filter" class="w-10 h-10 rounded-full flex justify-center items-center">
        <fa icon="th" class="text-xl text-white" />
      </router-link> -->

      <div class="flex flex-grow justify-center items-center">
        <fa icon="search" class="absolute left-4 text-blue-500" />
        <input type="text" class="pl-8 pr-4 py-1 flex-grow bg-blue-300 focus:bg-white rounded-full" placeholder="Search" >
      </div>

    </div>

    <work-list :skills="skills" class="mt-10" />
    
  </div>

</template>

<style scoped>
</style>
