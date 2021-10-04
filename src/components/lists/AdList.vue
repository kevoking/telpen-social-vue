<script>
import { ref } from 'vue'
import { mapState } from 'vuex'

export default {
  name: 'AdList',
  props: {
    ads: Array,
    page: String
  },
  computed: {
    ...mapState(['url'])
  }
}

</script>

<template>
  
  <div class="w-full" :class="page === 'admin' ? 'space-y-2' : 'pb-8'">

    <!-- ad item -->
    <div v-for="ad in ads" :key="ad._id" class="w-full bg-gray-50" :class="page === 'admin' ? 'rounded-md shadow' : 'pb-4'">

      <div v-if="page !== 'admin'" class="w-full bg-white flex justify-center items-center">
        <div class="w-full">
          <div class="w-full flex justify-center items-center">
            <img v-if="ad.media.length" :src="url + ad.media[0].path" class="object-cover w-full" style="max-height: 55vh;" />
            <fa v-else icon="image" class="text-8xl text-yellow-100" />
          </div>
          <div v-if="ad.media.length < 1" class="p-4 flex justify-end items-center w-full">
            <router-link :to="'/upload-ad-media/' + ad._id" class="btn-round flex justify-center items-center">
              <fa icon="camera" />
            </router-link>
          </div>
        </div>
      </div>
      
      <router-link :to="'/ad/' + ad._id" class="w-full flex justify-between items-center py-2 px-2">

        <div class="flex-grow flex justify-start items-center">
          <div class="w-10 h-10 bg-gray-300 rounded-full flex justify-center items-center">
            <fa icon="user" class="text-2xl text-gray-400" />
          </div>
          <div class="pl-4 text-left">
            <div class="w-full text-sm">
              {{ad.title}}
            </div>
            <div v-if="ad.user" class="w-full text-xs">
              {{ad.user.phone}}
            </div>
          </div>
        </div>

        <div class="w-10 h-10 flex justify-center items-center rounded-full">
          <fa icon="ellipsis-h" />
        </div>

      </router-link>

      <div class="w-full text-start text-sm flex py-2 px-2">
        {{ad.description}}
      </div>

      <div class="w-full py-2 px-2 flex justify-end items-center">

        <div v-if="page === 'admin' || ad.user_id === storage.user._id" class="space-x-2 flex justify-end items-center ">
          <div>

            <!-- ad publish status -->
            <div>
              <div v-if="ad.live">
                <div class="capitalize text-xs px-2 space-x-1 text-green-600">
                  <fa icon="check-circle" class="text-sm text-green-400" />
                  <span>published</span>
                </div>
              </div>
              <div v-else>
                <div class="capitalize text-xs px-2 space-x-1 text-red-600">
                  <fa icon="exclamation-circle" class="text-sm text-red-400" />
                  <span>unpublished</span>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <div v-if="ad.admin_review" c>
            <!-- admin ad review status -->
              <div>
                <div v-if="ad.approved">
                  <div class="capitalize text-xs px-2 space-x-1 text-green-600">
                    <fa icon="check-circle" class="text-sm text-green-400" />
                    <span>Approved</span>
                  </div>
                </div>
                <div v-else>
                  <div class="capitalize text-xs px-2 space-x-1 text-red-600">
                    <fa icon="exclamation-circle" class="text-sm text-red-400" />
                    <span>Rejected</span>
                  </div>
                </div>
              </div>
            </div>
            <div v-else>
              <div class="capitalize text-xs space-x-1 text-yellow-600">
                <fa icon="info-circle" class="text-sm text-yellow-400" />
                <span class="capitalize text-xs">
                  pending review
                </span>
              </div>
            </div>
          </div>
          
        </div>

        <div v-if="page !== 'admin' && ad.live && ad.user_id !== storage.user._id" class="flex justify-center items-center space-x-1">
          <button class="w-8 h-8 flex justify-center items-center">
            <fa icon="heart" class="text-pink-500" />
          </button>
          <button class="w-8 h-8 flex justify-center items-center">
            <fa icon="comment-dots" class="text-green-500" />
          </button>
        </div>

      </div>

    </div>
    <!-- end ad item card -->

    <!-- skeleton -->
    <!-- <div class="w-full bg-gray-100 shadow-lg rounded-md">
      <div class="w-full flex justify-between items-center py-2 ">

        <div class="flex-grow flex justify-center items-center px-2">
          <div class="w-12 h-12 bg-gray-300 animate-pulse rounded-full"></div>
          <div class="flex-grow px-2">
            <div class="h-4 w-full my-1 rounded-full animate-pulse bg-gray-300"></div>
            <div class="h-4 w-full my-1 rounded-full animate-pulse bg-gray-300"></div>
          </div>
        </div>

      </div>
    </div> -->

  </div>
</template>

<style scoped>
</style>
