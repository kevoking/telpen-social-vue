<script>
import { ref } from 'vue'
import { mapState, mapActions } from 'vuex'
import ContactList from './lists/ContactList.vue'

export default {
  name: 'Contacts',
  components: {
    ContactList,
  },
  data() {
    return {
      tab: 'ads',
    }
  },
  mounted () {
    this.getAds()
  },
  computed: {
    ...mapState(['ads']),
  },
  methods: {
    ...mapActions(['getAds']),
  }
}
</script>

<template>

  <div class="mt-2 w-full text-left">

    <contact-list :mode="$route.params.mode" />

  </div>

</template>

<style scoped>
</style>
