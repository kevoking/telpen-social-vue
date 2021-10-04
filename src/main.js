import { createApp } from 'vue'

import router from './router/index'
import store from './store/index'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'

import PrimeVue from 'primevue/config'
import FileUpload from 'primevue/fileupload'

import VueUploadComponent from 'vue-upload-component'
// import { VuesticPluginsWithoutComponents } from 'vuestic-ui'
// import { VaFileUpload } from 'vuestic-ui'
import { VuesticPlugin } from 'vuestic-ui'
// import 'vuestic-ui/dist/vuestic-ui.css'

import ReactiveStorage from "vue-reactive-localstorage";
import VueImageComponent from 'vue-image-component'
import VueOtp2 from 'vue-otp-2'

library.add(fas);
// library.add(far);

import App from './App.vue'
import './css/index.css'

createApp(App)
  .use(router)
  .use(store)
  .use(PrimeVue)
  .use(VuesticPlugin)
  .use(ReactiveStorage, {
    user: {
      auth: false,
      test: '123',
    },
  })
  .use(VueOtp2)
  // .component('va-file-upload', VaFileUpload)
  .component('uploader', FileUpload)
  .component('file-upload', VueUploadComponent)
  .component('fa', FontAwesomeIcon)
  .component('vue-image', VueImageComponent)
  .mount('#app')
