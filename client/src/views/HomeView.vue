<template>
  <div class="w-full flex border-[1px] border-blue-500 rounded-md">
    <div class="w-1/5 flex flex-col h-full bg-slate-800 rounded-l-md">
      <div class="my-4">
        <button @click.prevent="handleToggleCreateRoom"
          class="bg-transparent hover:bg-white-500 text-white font-semibold hover:text-blue-700 hover:bg-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
          Create Room
        </button>

        <create-room-form v-if="isCreateRoomModal"/>

      </div>
      <RoomsList />
    </div>

    <div class="w-4/5 h-full bg-slate-700 py-4 px-6 rounded-r-md">
      <div class="h-full flex flex-col" v-if="currentRoom">
        <header class="mb-6 flex items-center">
          <nav class="p-0">
            <ul class="flex">
              <li class="mr-2">
                <button
                  class="bg-transparent hover:bg-blue-500 text-white font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                  Back
                </button>
              </li>
              <li v-if="inSelectedRoom">
                <button @click="handleLeaveRoom"
                  class="bg-transparent hover:bg-orange-400 text-white font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                  Leave
                </button>
              </li>
              <li v-else>
                <button @click="handleJoinRoom"
                  class="bg-transparent hover:bg-emerald-500 text-white font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                  Join
                </button>
              </li>
            </ul>
          </nav>
          <h4 class="text-white w-full font-bolder text-lg">{{ currentRoom?.name }}</h4>
        </header>

        <div class="flex w-full h-full flex-col" v-if="inSelectedRoom">
          <div class="h-[85%] flex">
            <MessagesList :messages="currentChat?.messages" />
          </div>
          <div>
            <div class="flex w-full mt-5">
              <MessageInput v-on:input-data="handleMessageInput" />
              <div class="">
                <button @click="handleMessageSubmit"
                  class="bg-transparent hover:bg-blue-500 text-white font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>

        <div class="w-full" v-else>
          <p class="text-white text-3xl font-bold text-left">Room description: {{ currentRoom.description}}</p>
        </div>
      </div>
      <div class="flex w-full h-full items-center justify-center" v-else>
        <p class="text-white text-3xl font-bold">Join any room in room list</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import RoomsList from '@/components/chat/RoomsList.vue';
import MessagesList from '@/components/chat/MessagesList.vue';
import MessageInput from '@/components/chat/MessageInput.vue';
import { authStore } from '@/store/authStore';
import { useSocketService } from '@/service/webscokets';
import { computed } from '@vue/reactivity';
import { chatStore } from '@/store/chatStore';
import CreateRoomForm from '@/components/chat/createForm/CreateRoomForm.vue'

export default defineComponent({
  name: 'HomeView',
  setup() {
    const messageInput = ref('')
    const useAuthStore = authStore()
    const useChatStore = chatStore()
    const isCreateRoomModal = ref(false)

    const currentChat = computed(() => useChatStore.currentChat)
    const currentRoom = computed(() => useChatStore.currentRoom)
    const inSelectedRoom = computed(() => useChatStore.inSelectedRoom)

    useSocketService.send({
      action: 'receive-rooms',
      payload: {}
    })

    const handleMessageSubmit = () => {
      if(messageInput.value.trim()) {
        useSocketService.send({
        action: 'send-message',
        payload: {
          room: useChatStore.currentRoom,
          message: {
            authorName: useAuthStore.user.email,
            authorId: useAuthStore.user.uid,
            dateSent: new Date,
            text: messageInput.value.trim()
          }
        }
      })
      }
    }

    const handleMessageInput = (value: string) => messageInput.value = value

    const handleLeaveRoom = () => useChatStore.leaveRoom()
    const handleJoinRoom = () => useChatStore.joinRoom()

    const handleToggleCreateRoom = () => isCreateRoomModal.value = !isCreateRoomModal.value

    return {
      messageInput,
      handleMessageInput,
      handleMessageSubmit,
      isCreateRoomModal,
      handleToggleCreateRoom,
      currentRoom,
      inSelectedRoom,
      handleLeaveRoom,
      handleJoinRoom,
      currentChat
    }
  },
  components: {
    RoomsList,
    MessagesList,
    MessageInput,
    CreateRoomForm
  }
});
</script>

<style>
.thin-scrollbar::-webkit-scrollbar-track {
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
}
</style>
