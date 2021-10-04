<script>
import { ref } from 'vue'
import { mapState, mapActions } from 'vuex'

import {
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogOverlay,
  DialogTitle,
} from '@headlessui/vue'

export default {
  components: {
    TransitionRoot,
    TransitionChild,
    Dialog,
    DialogOverlay,
    DialogTitle,
  },
  data () {
    return {
      isCategoryModalOpen: false,
      isChargesModalOpen: false,
      adCategoryFormData: {
        name: '',
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
    ...mapActions(['getAdCategories', 'createAdCategory']),
    closeModal () {
      this.isCategoryModalOpen = false
      this.isChargesModalOpen = false
    },
    submitAdCategoryForm () {
      this.createAdCategory(this.adCategoryFormData)
      this.closeModal()
    }
  }
}
</script>

<template>
  <div class="w-full px-2 space-y-4">

    <TransitionRoot appear :show="isCategoryModalOpen" as="template">
      <Dialog as="div" @close="closeModal">
        <div class="fixed inset-0 z-10 overflow-y-auto bg-yellow-300 bg-opacity-75">
          <div class="min-h-screen px-4 text-center">
            <TransitionChild
              as="template"
              enter="duration-300 ease-out"
              enter-from="opacity-0"
              enter-to="opacity-100"
              leave="duration-200 ease-in"
              leave-from="opacity-100"
              leave-to="opacity-0"
            >
              <DialogOverlay class="fixed inset-0" />
            </TransitionChild>

            <span class="inline-block h-screen align-middle" aria-hidden="true">
              &#8203;
            </span>

            <TransitionChild
              as="template"
              enter="duration-300 ease-out"
              enter-from="opacity-0 scale-95"
              enter-to="opacity-100 scale-100"
              leave="duration-200 ease-in"
              leave-from="opacity-100 scale-100"
              leave-to="opacity-0 scale-95"
            >
              <div
                class="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl"
              >
                <form @submit.prevent="submitAdCategoryForm"> 
                  <DialogTitle
                    as="h3"
                    class="text-lg font-medium leading-6 text-gray-900"
                  >
                    Create Category
                  </DialogTitle>

                  <div class="mt-2">
                    <div class="mb-4 text-sm">
                      <label class="text-gray-400">Name</label>
                      <input type="text" class="input-full" placeholder="Category Name" v-model="adCategoryFormData.name" required>
                    </div>
                  </div>

                  <div class="mt-4 flex justify-center space-x-2">
                    <button
                      type="button"
                      class="inline-flex justify-center px-4 py-2 text-sm font-medium text-gray-900 bg-gray-100 border border-transparent rounded-md hover:bg-gray-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-gray-500"
                      @click="closeModal"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      class="inline-flex justify-center px-4 py-2 text-sm font-medium text-green-900 bg-green-100 border border-transparent rounded-md hover:bg-green-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-green-500"
                    >
                      Create
                    </button>
                  </div>
                </form>
              </div>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </TransitionRoot>


    <TransitionRoot appear :show="isChargesModalOpen" as="template">
      <Dialog as="div" @close="closeModal">
        <div class="fixed inset-0 z-10 overflow-y-auto bg-yellow-300 bg-opacity-75">
          <div class="min-h-screen px-4 text-center">
            <TransitionChild
              as="template"
              enter="duration-300 ease-out"
              enter-from="opacity-0"
              enter-to="opacity-100"
              leave="duration-200 ease-in"
              leave-from="opacity-100"
              leave-to="opacity-0"
            >
              <DialogOverlay class="fixed inset-0" />
            </TransitionChild>

            <span class="inline-block h-screen align-middle" aria-hidden="true">
              &#8203;
            </span>

            <TransitionChild
              as="template"
              enter="duration-300 ease-out"
              enter-from="opacity-0 scale-95"
              enter-to="opacity-100 scale-100"
              leave="duration-200 ease-in"
              leave-from="opacity-100 scale-100"
              leave-to="opacity-0 scale-95"
            >
              <div
                class="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl"
              >
                <DialogTitle
                  as="h3"
                  class="text-lg font-medium leading-6 text-gray-900"
                >
                  Create Ad Charges
                </DialogTitle>

                <div class="mt-2">
                  <form @submit.prevent="submitAdForm"> 
                    <div class="mb-4 text-sm">
                      <label class="text-gray-400">Amount</label>
                      <input type="number" class="input-full" placeholder="Amount">
                    </div>
                  </form>
                </div>

                <div class="mt-4 flex justify-center space-x-2">
                  <button
                    type="button"
                    class="inline-flex justify-center px-4 py-2 text-sm font-medium text-gray-900 bg-gray-100 border border-transparent rounded-md hover:bg-gray-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-gray-500"
                    @click="closeModal"
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    class="inline-flex justify-center px-4 py-2 text-sm font-medium text-green-900 bg-green-100 border border-transparent rounded-md hover:bg-green-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-green-500"
                    @click="closeModal"
                  >
                    Create
                  </button>
                </div>
              </div>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </TransitionRoot>

    <div class="w-full bg-gray-100 rounded-md shadow-lg px-2 py-2">
      <div class="w-full flex justify-between items-center py-2 border-b border-gray-300">
        <h1>Ad Categories</h1>
        <button @click="isCategoryModalOpen = true" class="btn-round">
          <fa icon="plus" />
        </button>
      </div>

      <div class="py-4 divide-y divide-gray-200">
        
        <div v-for="category in adCategories" :key="category._id" class="flex justify-between items-center py-2">
          <div>
            {{category.name}}
          </div>
        </div>

      </div>

    </div>

    <div class="w-full bg-gray-100 rounded-md shadow-lg px-2 py-2">
      <div class="w-full flex justify-between items-center border-b border-gray-300 py-2">
        <h1>Ad Charges</h1>
        <button @click="isChargesModalOpen = true" class="btn-round">
          <fa icon="plus" />
        </button>
      </div>

      <div class="py-4">
        <div class="flex justify-between items-center">
          <div>
            Normal Rate
          </div>
          <div>
            KES 100.00/Month
          </div>
        </div>
      </div>

    </div>

  </div>
</template>

<style scoped>
</style>
