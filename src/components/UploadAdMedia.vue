<script>
import { ref } from 'vue'
import { mapActions, mapState } from 'vuex'

import Cropper from 'cropperjs'
import ImageCompressor from '@xkeshi/image-compressor'

export default {
  name: 'UploadAdMedia',
  components: {
  },
  data () {
    return {
      myfiles: [],
      filesError: '',
    }
  },
  mounted () {
    this.getAd({
      id: this.$route.params.id,
    })
  },
  computed: {
    ...mapState(['ad'])
  },
  methods: {
    ...mapActions(['uploadAdMedia', 'getAd']),
    submitAdMedia() {
      let formData = new FormData();

      formData.append('ad_id', this.$route.params.id)

      for (let i = 0;  i < this.myfiles.length; i++) {
        formData.append('files[' + i + ']', this.myfiles[i])
      }

      if (this.myfiles.length > 0) {
        this.uploadAdMedia({
          id: this.$route.params.id,
          data: formData
        })
      } else {
        this.filesError = 'Please select at least 1 file to upload.'
      }
    }
  }
}
</script>

<template>
  
  <div class="w-full">

    <div v-if="myfiles.length" class="fixed z-50 py-2 px-4 space-x-2 w-full bottom-0 bg-pink-500 flex justify-between items-center text-white text-sm">
      <div class="px-2 space-x-2">
        <fa icon="check-circle" />
        <span>{{ myfiles.length }} File{{ myfiles.length > 1 ? 's' : '' }}</span>
      </div>
      <button @click="submitAdMedia" class="space-x-2 flex px-4 bg-pink-400 py-1 rounded-full justify-center items-center">
        <span class="uppercase ">
          Upload
        </span>
        <fa icon="upload" />
      </button>
    </div>

    <div class="w-full pb-12">

      <!-- ad item -->
      <div v-if="ad" class="w-full bg-gray-50 shadow-lg mb-4">
        <div class="w-full flex justify-between items-center py-2 px-2">

          <div class="flex-grow flex justify-start items-center">
            <div class="w-12 h-12 bg-gray-300 rounded-full flex justify-center items-center">
              <fa icon="user" class="text-3xl text-gray-400" />
            </div>
            <div class="pl-4 text-left">
              <div class="w-full text-sm capitalize">
                {{ad.title}}
              </div>
              <div class="w-full text-xs">
                Kelvin Mwangi
              </div>
            </div>
          </div>

          <div>
            <!--  -->
            <div v-if="ad.category" class="bg-yellow-100 px-2 rounded-full text-xs">
              {{ad.category.name}}
            </div>
          </div>

        </div>

        <div class="w-full text-start text-sm flex py-2 px-2 capitalize">
          {{ad.description}}
        </div>

      </div>

      <div class="w-full flex justify-center items-center">
        <div class="max-w-full">
          <va-alert v-if="filesError" dense color="danger" icon="info" class="mb-4" >
            {{filesError}}
          </va-alert>
          <va-file-upload class="grid grid-cols-1 p-2 justify-center items-center text-center" v-model="myfiles" type="gallery" file-types="image/*" />
        </div>
      </div>
      <!-- end ad item card -->
    </div>

  </div>
</template>

<style scoped>

</style>
