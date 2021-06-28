                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        
<template>
  <router-view />
</template>

<script>
  import { ref, onBeforeMount, onMounted } from 'vue'
  import { useRouter, useRoute } from 'vue-router'
  import firebase from 'firebase'
  
	export default {
		name: 'App',
		setup() {
		  const router = useRouter()
		  const route = useRoute()
		  const authIsReady = ref(false)
		  
		  onBeforeMount(() => {
		    firebase.auth().onAuthStateChanged(user => {
		      // if the user is not logged in
		      if (!user) return router.replace({ name: 'Login' })
		      
		      // if the user is already logged in
		      if (route.name == 'Login' || route.name == 'Register') {
		        router.replace({ name: 'Home' })
		      }
		    })
		  })
      
		  return {}
		}
	}
</script>

<style lang="scss" scoped>
  /* ==== variables ==== */
	/* @import '@/assets/scss/partials/_variables.scss'; */
	/* ==== mixin ==== */
	/* @import '@/assets/scss/partials/_mixin.scss'; */
	/* ==== animations ==== */
	/* @import '@/assets/scss/partials/_animations.scss'; */
	
	/* ====  ==== */
</style>