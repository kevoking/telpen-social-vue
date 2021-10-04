<script>
import { ref } from 'vue'
import { mapState, mapActions } from 'vuex'
import AdList from './lists/AdList.vue'
import UserProfile from './user/UserProfile.vue'

export default {
  name: 'Profile',
  components: {
    AdList,
    UserProfile
  },
  data() {
    return {
      tab: 'profile',
    }
  },
  mounted () {
    this.getMyAds({
      user: this.storage.user._id,
    })
  },
  computed: {
    ...mapState(['myAds']),
    user () {
      return this.storage.user
    }
  },
  methods: {
    ...mapActions(['getMyAds']),
  }
}
</script>

<template>

  <div class="w-full">

    <div class="w-full bg-blue-500 flex justify-between items-center px-2 py-2">

      <div class="w-12 h-12 rounded-full shadow-md flex justify-center items-center bg-blue-400">
        <img v-if="user" src="" class="" />

        <fa v-else icon="user" class="text-3xl text-white" />
      </div>

      <div class="text-right text-white">
        <p>Kelvin Mwangi</p>
        <p class="text-sm">Kelvin Mwangi</p>
      </div>
    </div>

    <div class="w-full sticky top-12 flex justify-center bg-blue-500 items-center">
      <button class="btn-top-tab" @click="tab = 'ads'" :class="tab === 'ads' ? 'btn-top-tab-active' : ''">
        <div>
          <!-- <fa icon="bullhorn" :class="tab === 'ads' ? 'text-white' : 'text-blue-200'" /> -->
          <span class="w-full block text-xs">Campaigns</span>
        </div>
      </button>
      <button class="btn-top-tab" @click="tab = 'favorites'" :class="tab === 'favorites' ? 'btn-top-tab-active' : ''">
        <div>
          <!-- <fa icon="heart" :class="tab === 'favorites' ? 'text-white' : 'text-blue-200'"  /> -->
          <span class="w-full block text-xs">Favorites</span>
        </div>
      </button>
      <button class="btn-top-tab" @click="tab = 'profile'" :class="tab === 'profile' ? 'btn-top-tab-active' : ''">
        <div>
          <!-- <fa icon="user-alt" :class="tab === 'profile' ? 'text-white' : 'text-blue-200'"  /> -->
          <span class="w-full block text-xs">Profile</span>
        </div>
      </button>
    </div>

    <div class="w-full text-left">
      
      <!-- my ads -->
      <div class="pt-4" v-if="tab === 'ads'">
        
        <ad-list :ads="myAds" />
      </div>

      <!-- favorites -->
      <div class="pt-4" v-if="tab === 'favorites'">
        <!-- <ad-list :ads="ads" /> -->
        hello
      </div>

      <!-- profile -->
      <div class="pt-4" v-if="tab === 'profile'">
        <!-- proile -->
        <user-profile />
      </div>

    </div>
    
  </div>

</template>

<style scoped>
</style>
