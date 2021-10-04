<script>
import { ref } from 'vue'
import { mapState } from 'vuex'

export default {
  name: 'CallsLog',
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
      
      <div class="w-full flex justify-between items-center space-x-4 p-2">

        <div class="rounded-full bg-gray-100 w-12 h-12 flex justify-center items-center">
          <fa icon="user" class="text-2xl" />
        </div>

        <div class="flex-grow">
          <div class="flex justify-between items-center">
            <h4 class="text-blue-500">Kevin Mwangi</h4>
          </div>
          <div>
            <p class="text-sm">
              Today, 8:41 PM
            </p>
          </div>
        </div>

        <div class="space-y-1 text-right">
          <fa icon="phone" />
        </div>

      </div>

      <div class="w-full flex justify-between items-center space-x-4 p-2">

        <div class="rounded-full bg-gray-100 w-12 h-12 flex justify-center items-center">
          <fa icon="user" class="text-2xl" />
        </div>

        <div class="flex-grow">
          <div class="flex justify-between items-center">
            <h4 class="text-blue-500">Kevin Mwangi</h4>
          </div>
          <div>
            <p class="text-sm">
              September 17, 9:01 PM
            </p>
          </div>
        </div>

        <div class="space-y-1 text-right">
          <fa icon="video" />
        </div>

      </div>


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
