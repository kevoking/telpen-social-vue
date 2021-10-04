<script>
import { ref } from 'vue'
import axios from 'axios'
import { mapState, mapActions } from 'vuex'
// import VLazyImage from 'v-lazy-image'
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide } from 'vue3-carousel';


export default {
  name: 'AdBudget',
  components: {
    Carousel,
    Slide
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
    slides () {
      const slides = []
      if (this.ad) {
        Object.keys(this.ad.media).forEach(key => {
          slides.push(this.url + this.ad.media[key].path)
        })
      }
      return slides
    }
  },
  methods: {
    ...mapActions(['getAd', 'updateAd', 'createAdPayment']),
    submitAdPayment () {
      this.updateAd({
        id: this.$route.params.id,
        data: {
          live: true,
        }
      })
      /* this.createAdPayment({
        id: this.$route.params.id,
        data: {
          ad_id: this.$route.params.id,
          amount: 100 * this.months
        }
      }) */
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

      <div class="w-full sticky top-12 bg-white py-2 px-2">

        <div class=" flex justify-between items-center ">
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
        
        <!-- <carousel :items-to-show="1.5">
          <slide v-for="media in ad.media" :key="media._id">
            <img :src="url + media.path" alt="" class="object-cover w-full" />
          </slide>
        </carousel> -->

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

        <div class="w-full flex border-t space-x-2 justify-center items-end py-2 px-4">

          <div class="text-left">
            <label for="" class="block text-xs text-gray-500">Months</label>
            <input type="number" v-model="months" class="py-1 px-2 w-24 border border-gray-300 rounded-md" placeholder="Months" />
          </div>

          <div class="flex flex-grow justify-end space-x-2 items-end">
            
            <div class="text-right">
              <div>
                Kenya
              </div>
              <div>
                KES 100.00/Month
              </div>
            </div>
            
          </div>

        </div>

      </div>

      <div class="px-2 py-4">
        <div class="w-full px-4 py-2 bg-white border border-blue-100 rounded-lg divide-y">

          <div class="flex justify-between items-center py-2">
            <div>
              Tax
            </div>
            <div>
              KES 20.00
            </div>
          </div>

          <div class="flex justify-between items-center py-2">
            <div>
              Service Charges
            </div>
            <div>
              KES 180.00
            </div>
          </div>

          <div class="flex justify-between items-center py-2 font-bold">
            <div>
              Amount Payable
            </div>
            <div>
              KES 200.00
            </div>
          </div>

          <div class="flex justify-end space-x-2 items-center py-2">
            
            <button @click="submitAdPayment()" class="px-4 py-2 rounded-md bg-green-400 shadow-md text-sm flex justify-center space-x-2 items-center">
              <fa icon="wallet" class="text-green-50" />
              <span>PAY NOW</span>
            </button>

          </div>

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
