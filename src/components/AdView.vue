<script>
import { ref } from 'vue'
import axios from 'axios'
import { mapState, mapActions } from 'vuex'
// import VLazyImage from 'v-lazy-image'

export default {
  name: 'AdView',
  components: {
    // VLazyImage,
  },
  data () {
    return {
      //
    }
  },
  mounted () {
    this.getAd({
      id: this.$route.params.id,
    })
  },
  computed: {
    ...mapState(['url', 'ad']),
  },
  methods: {
    ...mapActions(['getAd', 'updateAd']),
    submitAdApprovel (approval) {
      this.updateAd({
        id: this.$route.params.id,
        data: {
          admin_review: true,
          approved: approval
        }
      })
    }
  }
}
</script>

<template>
  
  <div class="w-full">

    <!-- ad item -->
    <div v-if="ad._id">

      <div>

        <div v-if="ad.admin_review">
          <div v-if="ad.approved" class="px-4 flex justify-between items-center bg-green-300 py-1">
            <fa icon="check-circle" class="text-green-700" />
            <span class="text-sm">Approved</span>
          </div>
          <div v-else class="px-4 flex justify-between items-center bg-red-400 py-1">
            <fa icon="exclamation-triangle" class="text-red-700" />
            <span class="text-sm">Rejected</span>
          </div>
        </div>
        <div v-else class="px-4 flex justify-between items-center bg-yellow-300 py-1">
          <fa icon="info-circle" class="text-yellow-700" />
          <span class="text-sm">Pending Review</span>
        </div>

      </div>

      <div class="w-full sticky top-12 bg-white flex justify-between items-center py-2 px-2">

        <div class="flex-grow flex justify-start items-center space-x-4">
          <div class="w-10 h-10 bg-white rounded-full flex justify-center items-center">
            <fa icon="user" class="text-xl text-gray-400" />
          </div>
          <div class="text-left">
            <div class="w-full text-sm capitalize text-blue-600">
              {{ad.title}}
            </div>
            <div v-if="ad.user" class="w-full text-xs">
              {{ad.user.name}}
            </div>
          </div>
        </div>

        <div>
          <div v-if="ad.live">
            <div class="capitalize text-xs px-2 space-x-1 text-green-600">
              <fa icon="check" class="text-xs text-green-400" />
              <span>published</span>
            </div>
          </div>
          <div v-else>
            <div class="capitalize text-xs px-2 space-x-1 text-red-600">
              <fa icon="times" class="text-xs text-red-300" />
              <span>unpublished</span>
            </div>
          </div>
        </div>

      </div>

      <div class="w-full bg-white">

        <div class="flex justify-between items-center px-4 py-1">
          <!--  -->
          <div class="text-xs">
            {{ad.category.name}}
          </div>
          <div class="text-xs">
            2 days ago
          </div>
        </div>

        <div class="w-full text-left text-sm flex py-2 px-4 text-gray-500 capitalize">
          {{ad.description}}
        </div>

        <div class="w-full flex bg-gray-50 space-x-2 justify-end items-center py-2 px-2">

          <div class="flex justify-center items-center space-x-1">
            <button class="w-8 h-8 flex justify-center items-center">
              <fa icon="heart" class="text-pink-500" />
            </button>
            <button class="w-8 h-8 flex justify-center items-center">
              <fa icon="comment-dots" class="text-green-500" />
            </button>
          </div>

          <div class="flex justify-center space-x-2 items-center">
            <router-link :to="'/ad-budget/' + ad._id" class="px-2 py-1 rounded-md text-sm bg-green-100 border border-green-400 flex justify-center space-x-1 items-center">
              <fa icon="money-bill-wave" class="text-green-500" />
              <span>Billing</span>
            </router-link>
            <button @click="submitAdApprovel(false)" class="px-2 py-1 rounded-md text-sm bg-red-100 border border-red-400 flex justify-center space-x-1 items-center">
              <fa icon="heart" class="text-red-500" />
              <span>Reject</span>
            </button>
            <button @click="submitAdApprovel(true)" class="px-2 py-1 rounded-md border border-green-400 bg-green-100 text-sm flex justify-center space-x-1 items-center">
              <fa icon="check-circle" class="text-green-500" />
              <span>Approve</span>
            </button>
          </div>

        </div>

      </div>

      <div class="w-full">
        <div v-for="media in ad.media" :key="media._id" class="w-full flex justify-center items-center">
          <img :src="url + media.path" alt="" class="object-contain w-full" />
          <!-- <fa icon="image" class="text-8xl text-yellow-100" /> -->
        </div>
      </div>

    </div>
    <!-- end ad item card -->

    <!-- skeleton -->
    <div v-else class="w-full bg-gray-100 shadow-lg rounded-md">
      <div class="w-full flex justify-between items-center py-2 ">

        <div class="flex-grow flex justify-center items-center px-2">
          <div class="w-12 h-12 bg-gray-300 animate-pulse rounded-full"></div>
          <div class="flex-grow px-2">
            <div class="h-4 w-full my-1 rounded-full animate-pulse bg-gray-300"></div>
            <div class="h-4 w-full my-1 rounded-full animate-pulse bg-gray-300"></div>
          </div>
        </div>

      </div>
    </div>

  </div>
</template>

<style scoped>
</style>
