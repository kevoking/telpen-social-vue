<script>
import { mapActions, mapState } from 'vuex'
import allCountries from '../utils/allCountries.json'

  export default {
    name: 'Otp',
    data () {
      return {
        phone: '',
        country: '+254',
        countries: allCountries
      }
    },
    computed: {
      ...mapState(['otpSent']),
    },
    methods: {
      ...mapActions(['requestOTP']),
      submitPhone () {
        const phone = this.country + this.phone
        this.requestOTP({
          phone: phone,
        })
      }
    }
  }
</script>

<template>

  <div class="flex px-2 bg-blue-50 h-full">
    <div class="px2">
      <h1 class="text-indigo-500 text-xl font-bold py-4">One Time Password</h1>

      <div class="">

        <div class="flex justify-center items-center py-8">
          <select class="px-4 py-2 w-11/12 rounded-lg shadow bg-blue-100 border-blue-200" v-model="country">
            <option v-for="country in countries" :key="country.dial_code" :value="country.dial_code">
              <span class="space-x-4" >
                <span>{{country.flag}}</span>
                <span class="text-xl ml-4">{{country.name}}</span>
              </span>
            </option>
          </select>
        </div>

        <h4 class="text-gray-400 text-sm">Enter your phone number</h4>

        <div class="flex justify-center mx-4 my-1 shadow items-center mb-4 bg-white rounded-lg border-blue-100">

          <div class="px-2 py-2 text-xl">
            {{country.flag}} {{country}}
          </div>

          <input type="tel" v-model="phone" class="px-4 py-2 w-6/12 text-xl " />

        </div>

        <div class="flex justify-center items-center py-4 px-8">
          <button @click="submitPhone" class="px-4 py-2 w-full flex justify-center items-center space-x-4 rounded-lg shadow-md bg-blue-500 text-white">
            <span class="uppercase">Next</span>
            <fa icon="arrow-right" />
          </button>
        </div>

      </div>
    </div>
  </div>

</template>

<style scoped>
</style>
