<template>
  <div class="wrapper h-full">
    <component :is="layout">
      <router-view />
    </component>
  </div>
</template>
<script lang="ts">
import { computed, defineAsyncComponent, defineComponent } from 'vue'
import { useRoute, useRouter } from 'vue-router';
import { authStore } from './store/authStore';

export default defineComponent({
  setup(props, ctx) {
    const route = useRoute();
    const router = useRouter()
    const useAuthStore = authStore()

    const email = localStorage.getItem('email')


    const layout = computed(() => {
      const name = (route.meta?.layout ?? 'main') + 'Layout'

      return defineAsyncComponent(() => import(`@/layouts/${name}.vue`));
    })

    if(email) {
      useAuthStore.authUser({email, password: null})
    }
    else {
      router.push({name: 'auth'})
    }


    return {
      layout
    }
  }
})
</script>


<style>
@tailwind base;
@tailwind components;
@tailwind utilities;

html,
body,
* {
  box-sizing: border-box;
}

html,
body,
.wrapper {
  height: 100%;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
  /* min-height: 100% */
  /* height: 100vh; */
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
