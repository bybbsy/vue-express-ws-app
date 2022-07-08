<template>
  <ul class="flex flex-col h-full">
    <li class="my-2 mx-1 flex px-5 justify-between items-center text-neutral-200 border-[2p]" v-for="(room, i) in rooms" :key="i">
      <a href="#" class="flex items-center ">
        <span class="mr-2 font-bold text-2xl">#</span>
        <span class=" ">{{ room.name }}</span>
      </a>
      <span class="flex tracking-widest">0/{{ room.size }}</span>
    </li>
  </ul>
</template>

<script lang="ts">
import { socketService } from '@/service/webscokets'
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    const rooms = ref([])
    socketService.onmessage = (event) => {
      console.log(JSON.parse(event.data))
      rooms.value = JSON.parse(event.data).rooms
    }

    return {
      rooms
    }
  },
})
</script>

