<script>
import { ref } from 'vue'
import { mapState } from 'vuex'
import { Contacts } from '@capacitor-community/contacts';
import ContactItem from './ContactItem.vue'

export default {
  name: 'ContactList',
  components: {
    ContactItem,
  },
  props: {
    mode: String,
  },
  data () {
    return {
      contacts: false,
    }
  },
  created () {
    Contacts.getPermissions().then(r => {
      console.log(r)
      Contacts.getContacts().then(result => {
        this.contacts = result.contacts
      })
    })
  },
  computed: {
    ...mapState(['url'])
  }
}

</script>

<template>
  
  <div class="w-full">

    <!-- work item -->
    <div v-if="contacts" class="w-full divide-y px-2">
      
      <div v-for="(contact, index) in contacts" :key="index" class="w-full flex justify-between items-center space-x-4 p-2">

        <div v-if="mode === 'calls'" >
          <contact-item :contact="contact" />
        </div>

        <router-link v-else to="/chat/conversation" >
          <contact-item :contact="contact" />
        </router-link>

        <div v-if="mode === 'calls'" class="space-x-2 flex justify-end items-center">
          <button class="w-8 h-8 flex justify-center items-center border border-gray-200 rounded-full">
            <fa icon="phone" class="text-green-400" />
          </button>
          <button class="w-8 h-8 flex justify-center items-center border border-gray-200 rounded-full">
            <fa icon="video" class="text-pink-400" />
          </button>
        </div>

      </div>

    </div>
    <!-- end work item card -->

  </div>
</template>

<style scoped>
</style>
