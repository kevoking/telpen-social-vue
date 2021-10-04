<script>
import { ref } from 'vue'
import { mapState, mapActions} from 'vuex'

export default {
  data () {
    return {
      adFormData: {
        user_id: '',
        category_id: '',
        title: '',
        description: '',
        phone: '',
        email: '',
        link: ''
      }
    }
  },
  mounted () {
    this.getAdCategories()

  },
  computed: {
    ...mapState(['adCategories']),
  },
  methods: {
    ...mapActions(['getAdCategories', 'createAd']),
    submitAdForm () {
      this.adFormData.user_id = this.storage.user._id
      this.createAd(this.adFormData)
    }
  }
}

</script>

<template>
  <div class="w-full text-left px-4">
    <form @submit.prevent="submitAdForm">
      <div class="mb-4 text-sm">
        <label class="text-gray-400">Category</label>
        <select class="input-full" v-model="adFormData.category_id" required>
          <option value="">Select Category</option>
          <option v-for="category in adCategories" :key="category._id" :value="category._id">
            {{category.name}}
          </option>
        </select>
      </div>
      <div class="mb-4 text-sm">
        <label class="text-gray-400">Title</label>
        <input type="text" class="input-full" v-model="adFormData.title" placeholder="Title">
      </div>
      <div class="mb-4 text-sm">
        <label class="text-gray-400">Description</label>
        <textarea class="input-full" v-model="adFormData.description" placeholder="Description"></textarea>
      </div>
      <div class="mb-4 text-sm">
        <label class="text-gray-400">Phone</label>
        <input type="text" class="input-full" v-model="adFormData.phone" placeholder="Phone">
      </div>
      <div class="mb-4 text-sm">
        <label class="text-gray-400">Email</label>
        <input type="text" class="input-full" v-model="adFormData.email" placeholder="address@email.com">
      </div>
      <div class="mb-4 text-sm">
        <label class="text-gray-400">Website/Link</label>
        <input type="text" class="input-full" v-model="adFormData.link" placeholder="www.myproduct.com">
      </div>
      <div class="mb-4 text-sm flex justify-end items-center">
        <button type="submit" class="btn">
          Create
        </button>
      </div>
    </form>
  </div>
</template>

<style scoped>
</style>
