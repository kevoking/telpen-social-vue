<script>
import { ref } from 'vue'
import { mapActions, mapState } from 'vuex'

export default {
  name: 'AdFilter',
  components: {
  },
  data () {
    return {
      categoryValue: [],
    }
  },
  mounted () {
    this.getCategoryValues()
  },
  computed: {
    ...mapState(['adCategories']),
    /*  */
  },
  methods: {
    ...mapActions(['getAdCategories']),
    getCategoryValues () {
      
      Object.keys(this.adCategories).forEach(key => {
        this.categoryValue.push(false)
      })

    }
  }
}
</script>

<template>
  
  <div class="w-full">

    <div class="w-full px-2 pt-2">

      <va-accordion
        v-model="categoryValue"
        class="text-left"
      >
        <va-collapse
        v-for="(category, index) in adCategories"
        :key="index"
        :header="category.name"
        >
        <div>
          {{ category }}
        </div>
        </va-collapse>
      </va-accordion>

    </div>

  </div>
</template>

<style scoped>

</style>
