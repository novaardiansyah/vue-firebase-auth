                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        
<template>
  <transition name="slide">
    <div class="container" v-show="state.showContent">
      <div class="row justify-content-center">
        <div class="col-md-8">
          <h3 class="text-center text-capitalize">Welcome Back {{ state.username }}</h3>
          
          <div class="text-center mt-3">
            <button class="btn btn-secondary" @click="Logout">
              <i class="fas fa-fw fa-sign-out-alt"></i>
              Logout
            </button>
          </div>
          
          <p class="mt-3" v-for="paragraph in 5" :key="paragraph">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum dicta veniam accusantium magnam pariatur eveniet similique dolore inventore est nulla recusandae illum iste cupiditate maiores nemo, aliquam dolorem beatae iure repellat quidem! Porro, aliquam, quaerat.
          </p>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
	import { ref, reactive, onBeforeMount, onMounted } from 'vue'
	import firebase from 'firebase'
	
	export default {
		name: 'Home',
		components: {},
		props: [],
		setup(props, { emit }) {
			const state = reactive({
			  username: '',
			  showContent: false
			})
			
			onBeforeMount(() => {
			  const user = firebase.auth().currentUser
			  
			  if (user) return state.username = user.email.split('@')[0]
			})
			
			onMounted(() => {
			  state.showContent = true
			  // For Safari
			  document.body.scrollTop = 0
			  // For Chrome, Firefox, IE and Opera
        document.documentElement.scrollTop = 0
			})
			
			const Logout = () => {
			  firebase.auth().signOut()
			}
			
			return { state, Logout, state }
		}
	}
</script>

<style lang="scss" scoped>
  /* ==== variables ==== */
	/* @import '@/assets/scss/partials/_variables.scss'; */
	/* ==== mixin ==== */
	/* @import '@/assets/scss/partials/_mixin.scss'; */
	/* ==== animations ==== */
	@import '@/assets/scss/partials/_animations.scss';
	
  .slide-enter-active {
    @include animate__slideInDown(1.5s);
  }
  /* ====  ==== */
</style>