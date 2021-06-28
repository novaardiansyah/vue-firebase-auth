                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        
<template>
  <div class="container">
  	<transition name="slide">
    	<div class="card text-cl-dark pt-3" v-show="showCardLogin">
    	  <div class="card-body">
    	    <div class="position-absolute top-0 start-50 translate-middle">
      	    <img 
      	      src="../assets/images/profile.png" 
      	      alt="profile"
      	      class="shadow rounded-circle"
      	      width="120"
      	    />
    	    </div>
    	    
    	    <h3 class="card-title text-center mt-5">
    	      Login
    	    </h3>
    	    
    	    <p class="small text-muted text-center card-text px-3">
    	      You must login first to be able to use our service
    	    </p>
    	    
    	    <form method="post" @submit.prevent="Login" class="mt-3">
    	      <div class="mb-3">
    	        <label :for="state.emailRef.title" class="form-label text-capitalize">
    	          {{ state.emailRef.title }}
    	        </label>
    	         
    	         <input 
    	           :type="state.emailRef.type || state.emailRef.title"
    	           class="form-control"
    	           :id="state.emailRef.title"
    	           :placeholder="state.emailRef.placeholder"
    	           v-model="state.emailRef.value"
    	         />
    	      </div>
    	      
    	      <div class="mb-3">
    	        <label :for="state.passwordRef.title" class="form-label text-capitalize">
    	          {{ state.passwordRef.title }}
    	        </label>
    	        
    	        <input 
    	           :type="state.passwordRef.type || state.passwordRef.title"
    	           class="form-control"
    	           :id="state.passwordRef.title"
    	           :placeholder="state.passwordRef.placeholder"
    	           v-model="state.passwordRef.value"
    	         />
    	      </div>
    	      
    	      <div class="button_actions">
      	      <button
      	        type="submit"
      	        class="btn btn-primary text-capitalize"
      	      >
      	        <i class="fa fa-fw fa-sign-in-alt"></i>
      	        Login
      	      </button>
      	      
      	      <div class="register__page text-center mt-3">
      	        <p class="mb-0 small">
      	          need an account? register 
      	          <router-link :to="{ name: 'Register' }" class="text-primary">
      	            here
        	        </router-link>
      	        </p>
      	      </div>
      	      <!-- /.register__page -->
    	      </div>
    	    </form>
    	  </div>
    	</div>
    	<!-- /.card -->
    </transition>
  </div>
</template>

<script>
	import { ref, onMounted, reactive } from 'vue'
	import firebase from 'firebase'
	import Swal from 'sweetalert2'
	
	export default {
		name: 'Login',
		components: {},
		props: [],
		setup(props, { emit }) {
			const showCardLogin = ref(false)
			
			const state = reactive({
			  emailRef: {
			    title: 'email',
			    placeholder: 'enter your email address',
			    value: ''
			  },
			  passwordRef: {
			    title: 'password',
			    placeholder: 'enter your password',
			    value: ''
			  }
			})
			
			onMounted(() => {
			  showCardLogin.value = true
			  
			  // For Safari
			  document.body.scrollTop = 0
			  // For Chrome, Firefox, IE and Opera
        document.documentElement.scrollTop = 0
			})
			
			const Login = () => {
			  firebase
			    .auth()
			    .signInWithEmailAndPassword(state.emailRef.value, state.passwordRef.value)
			    .catch(error => {
			      Swal.fire({
              text: error.message,
              icon: 'error',
              confirmButtonText: 'confirm',
              confirmButtonColor: 'rgba(72, 126, 176, 1)',
              timer: 3000
            })
			    })
			}
			
			return { showCardLogin, state, Login }
		}
	}
</script>

<style lang="scss" scoped>
  /* ==== main style ==== */
  @import '@/assets/scss/auth.scss'
	/* ==== variables ==== */
	/* @import '@/assets/scss/partials/_variables.scss'; */
	/* ==== mixin ==== */
	/* @import '@/assets/scss/partials/_mixin.scss'; */
	/* ==== animations ==== */
	/* @import '@/assets/scss/partials/_animations.scss'; */
	
	/* ====  ==== */
</style>