<script>

export default {
  name: 'ContactItem',
  props: {
    contact: Object,
  }
}

</script>

<template>
  
  <div class="w-full flex justify-center items-center">
    <div class="rounded-full bg-gray-100 w-10 h-10 flex justify-center items-center">
      <!-- <img :src="contact.photoThumbnail" class="h-12 w-full object-contain" /> -->
       <fa icon="user-alt" class="text-xl" />
    </div>

    <div class="flex-grow">
      <div class="flex justify-between items-center">
        <h4 class="text-blue-500">{{contact.displayName}}</h4>
      </div>
      <div v-if="contact.phoneNumbers">
        <span class="text-xs">
        {{contact.phoneNumbers[0].number}}
        </span>
      </div>
    </div>

  </div>

</template>

<style scoped>
</style>
