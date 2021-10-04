import { createStore } from "vuex";
import axios from "axios";
import router from "../router";

const api = "https://api.ads.telpen.co.ke/api/";

export default createStore({
  state: {
    url: "https://api.ads.telpen.co.ke",

    api: api,

    adCategories: [],
    ad: [],
    ads: [],
    myAds: [],
    adCreated: false,

    skillCategories: [],
    skills: [],
    mySkills: [],

    paymentChannels: [],
    paymentMethods: [],

    countries: [],

    invoices: [],
    payments: [],
    paymentPlans: [],

    otpSent: null,
    otpVerified: null,

    authToken: localStorage.getItem('token') || "",

    appVersion: 19,
    appVersionName: '0.1.19',
    liveAppVersion: "",
    liveAppVersionName: "",

    appTitle: 'Telpen',
    loading: '',
  },
  mutations: {
    setLoading(state, payload) {
      state.loading = payload;
    },

    /* toggle show/hide dialogs */
    setAdCategories(state, payload) {
      state.adCategories = payload;
    },
    setAd(state, payload) {
      state.ad = payload;
    },
    setAds(state, payload) {
      state.ads = payload;
    },
    setMyAds(state, payload) {
      state.myAds = payload;
    },
    setAdCreated (state, payload) {
      state.adCreated = payload
    },

    setSkillCategories(state, payload) {
      state.skillCategories = payload;
    },
    setSkills(state, payload) {
      state.skills = payload;
    },
    setMySkills(state, payload) {
      state.mySkills = payload;
    },

    setCountries(state, payload) {
      state.countries = payload;
    },

    setAdPaymentPlans(state, payload) {
      state.paymentPlans = payload;
    },

    setPayments(state, payload) {
      state.payments = payload;
    },

    setInvoices(state, payload) {
      state.invoices = payload;
    },

    setLiveAppVersion(state, payload) {
      state.liveAppVersion = payload.version_code
      state.liveAppVersionName = payload.version_name
    },

    /* authentication */

    /* otp sent */
    setOtpSent(state, payload) {
      state.otpSent = payload;
    },

    /* otp verified */
    setOtpVerified(state, payload) {
      state.otpVerified = payload;
    },

  },
  actions: {
    updateLoading({ commit }, payload) {
      commit("setLoading", payload);
    },

    getNewAppVersion({ state, commit }) {
      axios.get(api + 'app-version').then(response => {
        commit("setLiveAppVersion", response.data);
        if (response.data.version_code > state.appVersion) {
          router.push('/update');
        }
      })
    },

    /* Authentication */

    /* request otp */
    requestOTP({ commit }, payload) {
      axios.post(api + 'get-otp', payload).then(response => {
        commit('setOtpSent', response.data)
        if (response.data.otp.status) {
          router.push('/auth/verify-otp')
        }
      })
    },

    /* verify otp */
    verifyOTP({ commit }, payload) {
      axios.post(api + 'verify-otp', payload).then(response => {
        commit("setOtpVerified", response.data)
        if (response.data.verified.status) {
          router.replace('/')
        }
      })
    },

    /* get auth token */
    getAuthToken({ commit }, payload) {
      axios.post(api + 'login', payload).then(response => {
        if (response.data.access_token) {
          commit("setLastOtp", payload.password);
          localStorage.setItem("token", response.data.access_token);
          // window.location.reload();
        }
      })
    },

    /* ADS */

    /* get ad categories */
    getAdCategories({ commit }) {
      axios.get(api + 'ad-category').then(response => {
        commit("setAdCategories", response.data);
      })
    },

    /* view ad */
    getAd({ commit }, payload) {
      axios.get(api + 'ad/' + payload.id).then(response => {
        commit("setAd", response.data);
      })
    },

    /* update ad */
    updateAd({ dispatch }, payload) {
      axios.put(api + 'ad/' + payload.id, payload.data).then(response => {
        dispatch("getAd", {id: payload.id});
        console.log(response.status)
      })
    },

    /* get ads */
    getAds({ commit }, payload) {
      axios.get(api + 'ad?live=' + payload.live).then(response => {
        commit("setAds", response.data);
      })
    },

    /* get my-ads */
    getMyAds({ commit }, payload) {
      axios.get(api + 'ad?user=' + payload.user).then(response => {
        commit("setMyAds", response.data);
      })
    },

    /* create ad */
    createAd({ commit }, payload) {
      axios.post(api + 'ad', payload).then(response => {
        commit("setAd", payload.data);
        router.push('/upload-ad-media/' + response.data._id)
      })
    },

    uploadAdMedia ({ dispatch }, payload) {
      axios.post(api + 'ad-media', payload.data, {
        headers: {
          "Content-Type": "multipart/form-data",
        }
      }).then(response => {
        dispatch('getAd', payload.id)
        router.push('/ad/' + payload.id)
        console.log(response.status)
      })
    },

    /* SKILLSHOP */

    /* get skill categories */
    getSkillCategories({ commit }) {
      axios.get(api + 'skillshop/category').then(response => {
        commit('setSkillCategories', response.data)
      })
    },

    /* get skills */
    getSkills({ commit }) {
      axios.get(api + 'skillshop/user-skill').then(response => {
        commit("setSkills", response.data);
      })
    },

    /* get skills */
    getMySkills({ commit }, payload) {
      axios.get(api + 'skillshop/user-skill?user=' + payload.user).then(response => {
        commit("setMySkills", response.data);
      })
    },

    /* create permission */
    createSkill({ commit }, payload) {
      axios.post(api + 'skillshop/user-skill', payload).then(response => {
        commit("getSkills");
      })
    },

    /*  */

    /* create designation */
    createDesignation({ dispatch }, payload) {
      axios.post(api + 'school/designation', payload).then(response => {
        dispatch("getDesignations");
        console.log(response.data)
      })
    },

    /* create staff */
    createStaff({ commit, dispatch }, payload) {
      axios.post(api + 'school/staff', payload).then(response => {
        commit('toggleStaffFormDialog', false);
        dispatch("getStaff", { school: payload.school_id });
        console.log(response.data)
      })
    },

    /* update staff */
    updateStaff({ commit, dispatch }, payload) {
      axios.put(api + 'school/staff/' + payload.id, payload.data).then(response => {
        commit('toggleStaffFormDialog', false);
        dispatch("getStaff", { school: payload.school_id });
        console.log(response.data)
      })
    },

    /* get staff list */
    getStaff({ commit }, payload) {
      axios.get(api + 'school/staff?school=' + payload.school).then(response => {
        commit('setStaff', response.data)
      })
    },

    /* get staff profile */
    getStaffProfile({ commit }, payload) {
      axios.get(api + 'school/staff/' + payload.id).then(response => {
        commit('setStaffProfile', response.data)
      })
    },

    /* assign user role */
    assignUserRole({ dispatch }, payload) {
      axios.post(api + 'assign-user-role', payload).then(response => {
        dispatch("getUsers", response.data);
      })
    },

    /* assign staff role */
    assignStaffRole({ dispatch }, payload) {
      axios.post(api + 'assign-staff-role', payload.data).then(response => {
        dispatch("getStaffProfile", { id: payload.data.user_id });
        console.log(response.data);
      })
    },

    /* revoke staff role */
    revokeStaffRole({ dispatch }, payload) {
      axios.post(api + 'revoke-staff-role', payload.data).then(response => {
        dispatch("getStaffProfile", { id: payload.data.user_id });
        console.log(response.data);
      })
    },

    /*get staff attendance*/
    getStaffAttendance({ commit }, payload) {
      axios.get(api + 'school/staff-attendance?day=' + payload.day)
        .then(response => {
          commit("setStaffAttendance", response.data);
        })
    },

    /* staff clock in */
    staffClockIn({ dispatch }, payload) {
      axios.post(api + 'school/staff-attendance', payload)
        .then(response => {
          dispatch('getStaffAttendance', { day: payload.day });
          console.log(response.data);
        })
    },

    /* staff clock out */
    staffClockOut({ dispatch }, payload) {
      axios.put(api + 'school/staff-attendance/' + payload.id, payload.data)
        .then(response => {
          dispatch('getStaffAttendance', { day: payload.day });
          console.log(response.data);
        })
    },

    /* delete user */
    deleteUser({ dispatch }, payload) {
      axios.get(api + 'delete-user?id=' + payload).then(response => {
        dispatch("getUsers");
        console.log(response.data);
      })
    },

  },
  modules: {},
});
