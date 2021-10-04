<script>
import { mapActions, mapState } from 'vuex'
import axios from 'axios'

  export default {
    name: 'Otp',
    data () {
      return {
        otp: '',
        verification: ''
      }
    },
    computed: {
      ...mapState(['url', 'otpSent'])
    },
    methods: {
      ...mapActions(['verifyOTP']),
      submitOtp () {
        
        axios.post(this.url + '/api/verify-otp', {
          phone: this.otpSent.user.phone,
          otp: this.otp
        }).then(response => {

          this.verification = response.data
          
          if (response.data.verified.status) {
            this.storage.user = response.data.user
            this.$router.replace('/')
          }
        })
      }

    }
  }
</script>

<template>

  <div class="w-full text-center px-4">

    <h1 class="text-blue-500 text-xl font-bold py-4">One Time Password</h1>

    <!-- enter otp received -->
    <div class="py-4 mt-4">

      <div>

        <h4 class="text-gray-500">Enter the code sent to your phone <span>{{otpSent.otp.token}}</span></h4>

      </div>

      <div class="py-2 mt-10 rounded-lg flex justify-center items-center bg-transparent">
        <div id="divOuter">
          <div id="divInner">
            <input class="bg-transparent" id="partitioned" type="tel" maxlength="6" v-model="otp" oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');"  onKeyPress="if(this.value.length==6) return false;"/>
          </div>
        </div>
      </div>
      <h4 v-if="otpSent.user" class="text-xs text-gray-400 ">
        We have sent a 6-Digit code to {{otpSent.user.phone}}
      </h4>

      <div class="flex justify-center items-center py-4 px-4 rounded-lg">
        <button @click="submitOtp" class="px-4 w-full py-2 rounded-md bg-blue-500 text-white">
          <span>Verify</span>
        </button>
      </div>{{verification}}

    </div>

  </div>

</template>

<style scoped>
#partitioned {
  padding-left: 15px;
  letter-spacing: 40px;
  border: 0;
  background-image: linear-gradient(to left, blue 70%, rgba(255, 255, 255, 0) 0%);
  background-position: bottom;
  background-size: 50px 2px;
  background-repeat: repeat-x;
  background-position-x: 35px;
  width: 340px;
  min-width: 340px;
}

#divInner{
  left: 0;
  position: sticky;
}

#divOuter{
  width: 300px; 
  overflow: hidden;
}
</style>
