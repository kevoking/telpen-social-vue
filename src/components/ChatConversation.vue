<script>
import { ref } from 'vue'
import { mapState, mapActions } from 'vuex'
import ConversationList from './lists/ConversationList.vue'

export default {
  name: 'ChatConversation',
  components: {
    ConversationList,
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

  <div class="mt-2 pb-12 w-full text-left">

    <conversation-list />

    <div class="fixed w-full flex z-50 px-2 py-1 justify-center items-center bottom-0 bg-blue-50">

      <input type="text" placeholder="Message..." class="py-2 px-4 rounded-full flex-grow" />

      <button class="rounded-full w-10 h-10 flex justify-center items-center">
        <fa icon="paper-plane" class="transform rotate-45" />
      </button>
    </div>

  </div>

</template>

<style scoped>
</style>
