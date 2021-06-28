                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import firebase from 'firebase'

// bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

// global style
import '@/assets/scss/colors.scss'
import '@/assets/scss/app.scss'

const firebaseConfig = {
  apiKey: process.env.VUE_APP__API_KEY,
  authDomain: process.env.VUE_APP__AUTH_DOMAIN,
  projectId: process.env.VUE_APP__PROJECT_ID,
  storageBucket: process.env.VUE_APP__STORAGE_BUCKET,
  messagingSenderId: process.env.VUE_APP__MESSAGING_SENDER_ID,
  appId: process.env.VUE_APP__APP_ID,
}

// Initialize Firebase
firebase.initializeApp(firebaseConfig)

createApp(App).use(router).mount('#app')