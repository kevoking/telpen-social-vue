<script>
import { mapState, mapActions } from 'vuex'

  export default {
    name: 'AddSkill',
    data () {
      return {
        skillFormData: {
          user_id: '',
          name: '',
          category_id: '',
          description: '',
          availability: true,
          state: '',
          city: '',
          area: '',
        }
      }
    },
    mounted () {
      this.getSkillCategories()
    },
    computed: {
      ...mapState(['skillCategories'])
    },
    methods: {
      ...mapActions(['getSkillCategories', 'createSkill']),
      submitSkill () {
        this.skillFormData.user_id = this.storage.user._id
        this.createSkill(this.skillFormData)
      }
    }
  }
</script>

<template>
  <div class="text-left w-full px-2">

    <div class="text-left p-2 space-y-4">

      <div>
        <label for="" class="text-sm text-blue-300">Category</label>
        <select v-model="skillFormData.category_id" class="input-full">
          <option value="">Select Category</option>
          <option v-for="category in skillCategories" :key="category._id" :value="category._id">
            {{category.name}}
          </option>
        </select>
        
      </div>

      <div>
        <label for="" class="text-sm text-blue-300">Skill Name</label>
        <input type="text" v-model="skillFormData.name" class="input-full" placeholder="Skill" />
      </div>

      <div>
        <label for="" class="text-sm text-blue-300">Description</label>
        <textarea v-model="skillFormData.description" class="input-full" placeholder="Brief description" ></textarea>
      </div>

      <div>
        <label for="" class="text-sm text-blue-300">State, County or District</label>
        <input type="text" v-model="skillFormData.state" class="input-full" placeholder="State/County/District" />
        <span class="text-xs text-gray-400">Optional</span>
      </div>

      <div>
        <label for="" class="text-sm text-blue-300">City orTown</label>
        <input type="text" v-model="skillFormData.city" class="input-full" placeholder="City/Town" />
        <span class="text-xs text-gray-400">Optional</span>
      </div>

      <div>
        <label for="" class="text-sm text-blue-300">Area</label>
        <input type="text" v-model="skillFormData.area" class="input-full" placeholder="Area" />
        <span class="text-xs text-gray-400">Optional</span>
      </div>

      <div class="flex justify-center items-center">
        <button @click="submitSkill" class="btn space-x-4 btn-long flex justify-center items-center">
          <fa icon="check-circle" class="text-pink-300 text-xl" />
          <span>Save</span>
        </button>
      </div>

    </div>
  </div>
</template>

<style scoped>
</style>
