<script>
import { ref } from 'vue'
import { mapState } from 'vuex'

export default {
  name: 'ChatList',
  props: {
    ads: Array,
  },
  computed: {
    ...mapState(['url'])
  }
}

</script>

<template>
  
  <div class="w-full">

    <!-- work item -->
    <div class="w-full divide-y px-2">
      
      <router-link to="/chat/conversation" class="w-full flex justify-between items-center space-x-4 p-2">

        <div class="rounded-full bg-gray-100 w-12 h-12 flex justify-center items-center">
          <fa icon="user" class="text-2xl" />
        </div>

        <div class="flex-grow">
          <div class="flex justify-between items-center">
            <h4 class="text-blue-500">Kevin Mwangi</h4>
          </div>
          <div>
            <p class="text-sm">
              Good morning...
            </p>
          </div>
        </div>

        <div class="space-y-1 text-right">
          <div class="flex justify-end items-center">
            <span class="text-xs w-5 h-5 flex justify-center items-center rounded-full bg-green-400 text-white" >3</span>
          </div>
          <div>
            <span class="text-xs">
              10:27
            </span>
          </div>
        </div>

      </router-link>

      <router-link to="/chat/conversation" class="w-full flex justify-between items-center space-x-4 p-2">

        <div class="rounded-full bg-gray-100 w-12 h-12 flex justify-center items-center">
          <fa icon="user" class="text-2xl" />
        </div>

        <div class="flex-grow">
          <div class="flex justify-between items-center">
            <h4 class="text-blue-500">Wambui Fruits</h4>
          </div>
          <div>
            <p class="text-sm">
              Please send me your ema...
            </p>
          </div>
        </div>

        <div class="space-y-1 text-right">
          <div class="flex justify-end items-center">
            <span class="text-xs w-5 h-5 flex justify-center items-center rounded-full bg-green-400 text-white" >1</span>
          </div>
          <div>
            <span class="text-xs">
              10:27
            </span>
          </div>
        </div>

      </router-link>
     
      <router-link to="/chat/conversation" class="w-full flex justify-between items-center space-x-4 p-2">

        <div class="rounded-full bg-gray-100 w-12 h-12 flex justify-center items-center">
          <fa icon="user" class="text-2xl" />
        </div>

        <div class="flex-grow">
          <div class="flex justify-between items-center">
            <h4 class="text-blue-500">Grace</h4>
          </div>
          <div>
            <p class="text-sm">
              Good morning...
            </p>
          </div>
        </div>

        <div class="space-y-1 text-right">
          <div class="flex justify-end items-center">
            <!-- <span class="text-xs w-5 h-5 flex justify-center items-center rounded-full bg-green-400 text-white" ></span> -->
          </div>
          <div>
            <span class="text-xs">
              yesterday
            </span>
          </div>
        </div>

      </router-link>

    </div>
    <!-- end work item card -->

    <!-- skeleton -->
    <!-- <div class="w-full bg-gray-100 shadow-lg rounded-md">
      <div class="w-full flex justify-between items-center py-2 ">

        <div class="flex-grow flex justify-center items-center px-2">
          <div class="w-12 h-12 bg-gray-300 animate-pulse rounded-full"></div>
          <div class="flex-grow px-2">
            <div class="h-4 w-full my-1 rounded-full animate-pulse bg-gray-300"></div>
            <div class="h-4 w-full my-1 rounded-full animate-pulse bg-gray-300"></div>
          </div>
        </div>

      </div>
    </div> -->

  </div>
</template>

<style scoped>
</style>
