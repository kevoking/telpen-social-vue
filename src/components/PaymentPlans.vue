<script>
import { mapActions, mapState } from 'vuex'

export default {
  name: 'PaymentPlans',
  data () {
    return {
      planFormData: {
        country_id: '',
        plan: 'monthly',
        months: 1,
        amount: ''
      }
    }
  },
  mounted () {
    this.getCountries()
    this.getPaymentPlans()
  },
  computed: {
    ...mapState(['paymentPlans', 'countries'])
  },
  methods: {
    ...mapActions(['getPaymentPlans', 'createPaymentPlan', 'getCountries']),
    submitPlan () {
      this.createPaymentPlan(this.planFormData)
    }
  }
}
</script>

<template>
  <div>

    <div>
      <div>
        <label for="">Country</label>
        <select v-model="planFormData.country_id">
          <option v-for="country in countries" :key="country._id" :value="country._id">
            {{country.flag}} {{country.name}}
          </option>
        </select>
      </div>
      <div>
        <label for="">Months</label>
        <input type="number" v-model="planFormData.months" />
      </div>
      <div>
        <label for="">Amount</label>
        <input type="number" v-model="planFormData.amount" />
      </div>

      <button class="btn">
        <span>Save</span>
      </button>
    </div>

    <div>
      {{paymentPlans}}
    </div>
  </div>
</template>

<style scoped>
</style>
