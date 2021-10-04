<script>
import { ref } from 'vue'
import { mapState, mapActions } from 'vuex'

export default {
  name: 'UserProfile',
  props: {
    ads: Array,
  },
  mounted () {
    this.getMySkills({
      user: this.storage.user._id
    })
  },
  computed: {
    ...mapState(['url', 'mySkills'])
  },
  methods: {
    ...mapActions(['getMySkills'])
  }
}

</script>

<template>
  
  <div class="w-full">

    <!-- work item -->
    <div class="w-full px-2">

      <div class="bg-gray-50 px-2 py-2 shadow rounded-md">
        <div class="flex justify-between items-center">
          <h4 class="text-blue-400 py-2">My Skills</h4>
          <router-link to="/add-skill" class="flex justify-center items-center w-10 h-10 bg-white rounded-full shadow">
            <fa icon="plus" />
          </router-link>
        </div>
        <!-- list skills -->
        <div>
          <div v-if="!mySkills.length" class="my-4 py-4 px-2 bg-white bg-opacity-50 rounded-xl">
            
          </div>
          <div v-else class="divide-y divide-gray-200">
            <div v-for="skill in mySkills" :key="skill._id" class="py-2">

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
                  <span class="text-xs bg-green-300 px-2 rounded-full text-green-600">
                    {{skill.category.name}}
                  </span>
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
      </div>
      
    </div>
    <!-- end work item card -->

  </div>
</template>

<style scoped>
</style>
