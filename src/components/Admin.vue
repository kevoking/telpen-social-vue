<script>
import { mapState, mapActions } from 'vuex'

import allCountries from '../utils/allCountries.json'
import AdList from './lists/AdList.vue'

  export default {
    name: 'Admin',
    components: {
      AdList,
    },
    data () {
      return {
        tab: 'ads',
        countries: allCountries,
        skillCategoryFormData: {
          name: '',
          category: ''
        }
      }
    },
    mounted () {
      this.getSkillCategories()
      this.getCountries()
      this.getAds({
        user: '',
        live: ''
      })
    },
    computed: {
      ...mapState(['skillCategories', 'ads'])
    },
    methods: {
      ...mapActions(['getSkillCategories', 'createSkillCategory', 'getAds', 'createCountry', 'getCountries']),
      submitSkillCategory () {
        this.createSkillCategory(this.skillCategoryFormData)
      },
      /* doCountries () {
        this.createCountry({countries: this.countries})
      } */
    }
  }
</script>

<template>
  <div class="text-left w-full">

    <div class="px-2 py-2">

      <div class="my-2 px-2">
        <div class="">
          <router-link to="/admin-ads" class="flex justify-between items-center text-gray-500 py-2">
            <span class="flex justify-center items-center space-x-2">
              <fa icon="bullhorn" class="text-blue-300" />
              <span>Ad Management</span>
            </span>
            <fa icon="chevron-right" />
          </router-link>
        </div>

        <div class="py-2">
          <router-link to="/admin-ads" class="flex justify-between items-center text-gray-500">
            <span class="flex justify-center items-center space-x-2">
              <fa icon="list" class="text-blue-300" />
              <span>Ad Categories</span>
            </span>
            <fa icon="chevron-right" />
          </router-link>
        </div>

        <div class="py-2">
          <router-link to="/payment-plans" class="flex justify-between items-center text-gray-500">
            <span class="flex justify-center items-center space-x-2">
              <fa icon="wallet" class="text-blue-300" />
              <span>Ad Payment Plans</span>
            </span>
            <fa icon="chevron-right" />
          </router-link>
        </div>

        <div class="py-2">
          <router-link to="/admin-ads" class="flex justify-between items-center text-gray-500">
            <span class="flex justify-center items-center space-x-2">
              <fa icon="briefcase" class="text-blue-300" />
              <span>Skill Categories</span>
            </span>
            <fa icon="chevron-right" />
          </router-link>
        </div>
      </div>

      <div class="text-left p-2 rounded-md border bg-gray-50">

        <h4>
          <span>
            SKill Categories
          </span>
        </h4>

        <div>
          <input type="text" v-model="skillCategoryFormData.name" class="input-full" placeholder="Category Name" />
          <button @click="submitSkillCategory" class="btn">
            <span>Save</span>
          </button>
        </div>

        <div class="divide-y divide-gray-100">
          <div v-for="category in skillCategories" :key="category._id">
            {{category.name}}
          </div>
        </div>

      </div>

    </div>
  </div>
</template>

<style scoped>
</style>
