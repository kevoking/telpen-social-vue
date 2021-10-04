<script>
import { ref, watch } from 'vue'

const props = {
  show: {
    type: Boolean,
    default: false,
  },
};

export default {
  name: 'FilterCategories',
  props,
  setup(props) {
    const showModal = ref(false);

    function closeModal() {
      showModal.value = false;
    }

    watch(
      () => props.show,
      show => {
        showModal.value = show;
      },
    );

    return {
      showModal,
      closeModal,
    };
  },
  data () {
    return {
      test: [1,2,3,4,5,6,7,8,9,10],
    }
  }
};
</script>

<template>
  <teleport to="body">
    <div
      v-if="showModal"
      ref="modal-backdrop"
      class="fixed z-10 inset-0 overflow-y-auto bg-black bg-opacity-50"
    >
      <div
        class="flex items-start justify-center min-h-screen pt-24 px-8 text-center"
      >
        <div class="w-full">
          <div class="w-full flex justify-end items-start relative transform translate-x-4 translate-y-6">
            <button @click="closeModal" class="flex justify-center items-center bg-gray-200 rounded-full w-12 h-12 z-50">
              <fa icon="times" class="text-xl" />
            </button>
          </div>
          <div
            class="bg-white rounded-lg text-left overflow-hidden shadow-xl px-4 py-10 w-full"
            role="dialog"
            ref="modal"
            aria-modal="true"
            aria-labelledby="modal-headline"
          >
            <div class="grid grid-cols-3 gap-2">
              <div v-for="(x,index) in test" :key="index" class="flex flex-col justify-center items-center p-2 bg-red-50">
                <fa icon="user" class="text-2xl" />
                <span class="w-full block text-center text-xs">
                  {{x}}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </teleport>
</template>
