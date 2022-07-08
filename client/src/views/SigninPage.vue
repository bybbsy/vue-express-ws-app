<template>
  <div class="h-screen font-sans login bg-cover">
    <div class="container mx-auto h-full flex flex-1 justify-center items-center">
      <div class="w-full max-w-lg">
        <div class="leading-loose">
          <form class="max-w-sm m-4 p-10 bg-white bg-opacity-25 rounded shadow-xl">
            <p class="text-white font-medium text-center text-lg font-bold">LOGIN</p>
            <div class="">
              <label class="block text-sm text-white" for="email">E-mail</label>
              <input class="w-full px-5 py-1 text-gray-700 bg-gray-300 rounded focus:outline-none focus:bg-white"
                type="email" id="email" placeholder="Digite o e-mail" aria-label="email" required v-model="email">
            </div>
            <div class="mt-2">
              <label class="block  text-sm text-white">Password</label>
              <input class="w-full px-5 py-1 text-gray-700 bg-gray-300 rounded focus:outline-none focus:bg-white"
                type="password" id="password" placeholder="Digite a sua senha" arial-label="password" required>
            </div>
            <div class="mt-4 items-center flex justify-between">
              <button class="px-4 py-1 text-white font-light tracking-wider bg-gray-900 hover:bg-gray-800 rounded"
                type="submit" @click.prevent="handleLogin">Submit</button>
              <a class="inline-block right-0 align-baseline font-bold text-sm text-500 text-white hover:text-red-400"
                href="#">Forgot a password?</a>
            </div>
            <div class="text-center">
              <a class="inline-block right-0 align-baseline font-light text-sm text-500 hover:text-red-400">Create a new
                account</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { authStore } from '@/store/authStore'
import { defineComponent, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'

export default defineComponent({
  setup() {
    const email = ref('')
    const useAuthStore = authStore()

    const route = useRouter()

    const handleLogin = () => {
      try {
        useAuthStore.authUser({ email: email.value, password: null })
        route.push({name: 'home'})
      } catch (e) {
        console.log(e)
      }
    }

    return {
      email, handleLogin
    }
  },
})
</script>


<style>
.login {
  /*
    background: url('https://tailwindadmin.netlify.app/dist/images/login-new.jpeg');
  */
  background: url('http://bit.ly/2gPLxZ4');
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
