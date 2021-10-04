<script>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue'
import { mapState } from 'vuex'

export default {
  components: {
    Menu,
    MenuButton,
    MenuItems,
    MenuItem,
  },
  mounted () {
    if (!this.storage.user._id) {
      this.$router.replace('/auth')
    }
  },
  computed: {
    ...mapState(['appTitle']),
    showBottomTabs () {
      const path = this.$route.path

      if (path === '/') return true
      else if (path === '/chat') return true
      else if (path === '/work') return true
      else if (path === '/profile') return true
      else return false
    }
  },
  methods: {
    currentPage (tab) {
      // alert(this.$route.path.length)
      if (this.$route.path === '/' && tab === 'ads') {
        return true
      } else {
        if (this.$route.path.indexOf(tab) > -1) return true
        else return false
      }
      
    }
  }
}
</script>

<template>
  <div class="bg-blue-50 h-screen">
    <div v-if="$route.path.indexOf('auth') < 0" class="fixed z-50 w-full flex justify-between items-center px-2 top-0 h-12 bg-blue-500">

      <div class="flex justify-center items-center">
        <button @click="$router.back()" class="w-10 h-10 rounded-full flex justify-center items-center">
          <fa icon="arrow-left" class="text-white text-xl" />
        </button>

        <h4 class="text-xl text-white">{{ appTitle }}</h4>
      </div>


      <Menu>
        <MenuButton class="w-10 h-10 flex justify-center items-center">
          <fa icon="ellipsis-v" class="text-white" />
        </MenuButton>
        <MenuItems class="absolute right-2 w-48 text-left py-4 z-50 divide-y top-12 rounded-md shadow-lg bg-white">
          <MenuItem class="dropdown-menu-item">
            <router-link to="/" class="dropdown-menu-item-inner">
              <fa icon="user-cog" />
              <span class="ml-4">Account Settings</span>
            </router-link>
          </MenuItem>
          <MenuItem class="dropdown-menu-item">
            <router-link to="/admin" class="dropdown-menu-item-inner">
              <fa icon="user" />
              <span class="ml-4">IAM Admin</span>
            </router-link>
          </MenuItem>
          <MenuItem class="dropdown-menu-item">
            <button class="dropdown-menu-item-inner">
              <fa icon="logout" />
              <span class="ml-4">logout</span>
            </button>
          </MenuItem>
        </MenuItems>
      </Menu>

    </div>

    <div class="flex justify-center items-center pb-12 mb-8 bg-blue-50" :class="showBottomTabs ? 'pb-12 mb-8' : 'pb-4'">
      <router-view class="pt-12" />
    </div>

    <div v-if="showBottomTabs" class="fixed w-full flex z-50 justify-center items-center bottom-0 bg-blue-100">

      <router-link to="/chat" class="btn-bottom-tab">
        <div>
          <fa icon="comments" class="text-xl" :class="currentPage('chat') ? 'text-blue-400' : 'text-blue-200'" />
          <span class="w-full block text-xs">Chat</span>
        </div>
      </router-link>

      <router-link to="/work" class="btn-bottom-tab">
        <div>
          <fa icon="user-tie" class="text-xl" :class="currentPage('work') ? 'text-blue-400' : 'text-blue-200'"  />
          <span class="w-full block text-xs">Skill Shop</span>
        </div>
      </router-link>

      <router-link to="/" class="btn-bottom-tab">
        <div>
          <fa icon="bullhorn" class="text-xl" :class="currentPage('ads') ? 'text-blue-400' : 'text-blue-200'"  />
          <span class="w-full block text-xs">Ads</span>
        </div>
      </router-link>


      <router-link to="/profile" class="btn-bottom-tab">
        <div>
          <fa icon="user-alt" class="text-xl" :class="currentPage('profile') ? 'text-blue-400' : 'text-blue-200'"  />
          <span class="w-full block text-xs">Profile</span>
        </div>
      </router-link>

    </div>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:ital,wght@0,400;1,700&display=swap');
@import url('https://fonts.googleapis.com/icon?family=Material+Icons');

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

input:focus, textarea:focus, select:focus{
  outline: none;
}

.dropdown-menu-item {
  @apply px-2 py-2 w-full flex justify-center items-center;
}

.dropdown-menu-item-inner {
  @apply w-full flex justify-start items-center text-sm;
}

.input-full {
  @apply py-2 px-4 bg-gray-50 bg-opacity-50 w-full text-gray-600 rounded-lg shadow;
}

.btn {
  @apply my-2 py-2 px-6 uppercase bg-pink-500 shadow border border-pink-600 rounded-xl text-white;
}

.btn-long {
  @apply w-2/3;
}

.btn-round {
  @apply w-10 h-10 uppercase bg-green-400 rounded-full text-white;
}

.btn-top-tab {
  @apply py-2 text-blue-300 text-sm flex-grow border-b-2 border-blue-500 items-center bg-blue-500 px-4;
}

.btn-top-tab-active {
  @apply text-white border-white;
}

.btn-bottom-tab {
  @apply py-1 text-blue-400 flex-grow border-t-2 border-gray-50 bg-gray-50 items-center px-4 text-xs;
}

.btn-bottom-tab-active {
  @apply py-1 text-blue-600 font-bold border-t-2 border-blue-500 flex-grow items-center px-4 text-xs;
}
</style>
