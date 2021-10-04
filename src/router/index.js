import { createRouter, createWebHistory } from 'vue-router'

import Home from '/src/components/Home.vue'
import Profile from '/src/components/Profile.vue'
import CreateAd from '/src/components/CreateAd.vue'
import AdView from '/src/components/AdView.vue'
import SystemSettings from '/src/components/SystemSettings.vue'
import UploadAdMedia from '/src/components/UploadAdMedia.vue'
import AdBudget from '/src/components/AdBudget.vue'
import AdFilter from '/src/components/AdFilter.vue'
import Chat from '/src/components/Chat.vue'
import Work from '/src/components/Work.vue'
import ChatConversation from '/src/components/ChatConversation.vue'
import Contacts from '/src/components/Contacts.vue'
import Otp from '/src/components/Otp.vue'
import VerifyOtp from '/src/components/VerifyOtp.vue'
import Admin from '/src/components/Admin.vue'
import AddSkill from '/src/components/AddSkill.vue'
import AdminAds from '/src/components/AdminAds.vue'
import PaymentPlans from '/src/components/PaymentPlans.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/auth',
        name: 'Otp',
        component: Otp,
    },
    {
        path: '/admin',
        name: 'Admin',
        component: Admin,
    },
    {
        path: '/admin-ads',
        name: 'AdminAds',
        component: AdminAds,
    },
    {
        path: '/payment-plans',
        name: 'PaymentPlans',
        component: PaymentPlans,
    },
    {
        path: '/add-skill',
        name: 'AddSkill',
        component: AddSkill,
    },
    {
        path: '/auth/verify-otp',
        name: 'VerifyOtp',
        component: VerifyOtp,
    },
    {
        path: '/profile',
        name: 'Profile',
        component: Profile,
    },
    {
        path: '/create',
        name: 'CreateAd',
        component: CreateAd,
    },
    {
        path: '/chat',
        name: 'Chat',
        component: Chat,
    },
    {
        path: '/contacts/:mode',
        name: 'Contacts',
        component: Contacts,
    },
    {
        path: '/chat/conversation',
        name: 'ChatConversation',
        component: ChatConversation,
    },
    {
        path: '/work',
        name: 'Work',
        component: Work,
    },
    {
        path: '/upload-ad-media/:id',
        name: 'UploadAdMedia',
        component: UploadAdMedia,
    },
    {
        path: '/ad-budget/:id',
        name: 'AdBudget',
        component: AdBudget,
    },
    {
        path: '/ad/:id',
        name: 'AdView',
        component: AdView,
    },
    {
        path: '/ad-filter',
        name: 'AdFilter',
        component: AdFilter,
    },
    {
        path: '/system-settings',
        name: 'SystemSettings',
        component: SystemSettings,
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
