<script>
import { ref } from 'vue'
import { mapState, mapActions } from 'vuex'

export default {
  name: 'WorkList',
  props: {
    skills: Array,
  },
}

</script>

<template>
  
  <div class="w-full">

    <!-- work item -->
    <!-- list skills -->
    <div class="px-2">
      <div v-if="!skills.length" class="my-4 py-4 px-2 bg-opacity-50 rounded-xl">
        
      </div>
      <div v-else class="divide-y divide-gray-200">
        <div v-for="skill in skills" :key="skill._id" class="py-2">

          <div class="flex justify-between items-center">
            <h4 class="text-sm">{{skill.name}}</h4>
            <div class="flex justify-between items-center">
              <div class="space-x-1 flex justify-center items-center">
                <div class="flex justify-start items-center">
                  <fa icon="star" class="text-xs text-yellow-400" />
                  <fa icon="star" class="text-xs text-yellow-400" />
                  <fa icon="star" class="text-xs text-yellow-400" />
                  <fa icon="star" class="text-xs text-yellow-400" />
                  <fa icon="star-half-alt" class="text-xs text-yellow-400" />
                </div>
                <span class="text-xs">3.4k</span>
              </div>
            </div>
          </div>

          <div>
            <p class="text-sm text-gray-400">
              {{skill.description}}
            </p>
          </div>

          <div class="flex justify-between items-center">
            <div>
              <!-- <span class="text-xs bg-green-300 px-2 rounded-full text-green-600">
                {{skill.category.name}}
              </span> -->
            </div>
            <div class="text-xs space-x-2">
              <span>
                {{skill.state}}
              </span>
              <span>
                {{skill.city}}
              </span>
              <span>
                {{skill.area}}
              </span>
            </div>
          </div>

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
