<template>
  <ul class="flex flex-col h-full overflow-y-auto scrollbar-thin scrollbar-thumb-gray-900 scrollbar-track-gray-50">
    <li
      class="my-2 mx-1 flex px-5 justify-between items-center text-neutral-200 border-[2p] cursor-pointer transition-all hover:bg-slate-700 rounded"

      v-for="room in rooms" :key="room._id" @click.prevent="handleRoomClick(room)"
      :class="{'bg-slate-500': selectedRoom(room._id)}">
      <span class="flex items-center">
        <span class="mr-2 font-bold text-2xl">#</span>
        <span class=" ">{{ room.name }}</span>
      </span>
      <span class="flex tracking-widest">{{ room.users.length }}/{{ room.size }}</span>
    </li>
  </ul>
</template>

<script lang="ts">
import { useSocketService } from '@/service/webscokets'
import { chatStore, IRoom } from '@/store/chatStore'
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    const useChatStore = chatStore()
    const currentUser = localStorage.getItem('email')
    const rooms = ref<IRoom[]>([])


    useSocketService.onMessage(evt => {
      console.log(JSON.parse(evt.data))
      rooms.value = JSON.parse(evt.data).rooms

      const joinedRooms = rooms.value.filter((room) => {
        const userInARoom = room.users.filter(user => user === currentUser)

        if (userInARoom.length) {
          return userInARoom
        }
      })

      useChatStore.setJoinedRooms(joinedRooms)
    })


    const selectedRoom = (_id: string) => _id === useChatStore.currentRoom?._id

    const handleRoomClick = (room: IRoom) => {
      useChatStore.visitRoom(room)
    }

    return {
      rooms,
      handleRoomClick,
      selectedRoom
    }
  },
})
</script>

