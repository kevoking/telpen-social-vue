<script>
import { ref } from 'vue'
import { mapState, mapActions } from 'vuex'
import ChatList from './lists/ChatList.vue'
import CallsLog from './lists/CallsLog.vue'

export default {
  name: 'Chat',
  components: {
    ChatList,
    CallsLog,
  },
  data() {
    return {
      tab: 'chat',
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
    <div class="fixed w-full uppercase flex z-50 justify-center items-center top-12 bg-blue-500">

      <button class="btn-top-tab" :class="tab === 'chat' ? 'btn-top-tab-active' : ''" @click="tab = 'chat'">
        <div>
          <span class="w-full block text-white uppercase">Chat</span>
        </div>
      </button>

      <button class="btn-top-tab" :class="tab === 'calls' ? 'btn-top-tab-active' : ''" @click="tab = 'calls'">
        <div>
          <span class="w-full block text-white uppercase">Call</span>
        </div>
      </button>

    </div>

    <div class="w-full mt-6">

      <div v-if="tab === 'chat'">

        <router-link to="/contacts/chat" class="fixed bottom-16 right-2 shadow-lg rounded-full flex justify-center items-center text-white border-pink-600 bg-pink-600 text-xs h-10 w-10">
          <div class="">
            <fa icon="comment-dots" class="text-xl" />
          </div>
        </router-link>

        <chat-list />
      </div>

      <div v-else-if="tab === 'calls'">

        <router-link to="/contacts/calls" class="fixed bottom-16 right-2 shadow-lg rounded-full flex justify-center items-center text-white border-pink-600 bg-pink-600 text-xs h-10 w-10">
          <div class="">
            <fa icon="phone" class="text-xl" />
          </div>
        </router-link>

        <calls-log />
      </div>

    </div>

  </div>

</template>

<style scoped>
</style>
