<template>
  <div class="w-full flex border-[1px] border-blue-500 rounded-md">
    <div class="w-1/5 bg-slate-800 rounded-l-md">
      <div class="my-2">
        <button @click.prevent="handleToggleCreateRoom"
          class="bg-transparent hover:bg-white-500 text-white font-semibold hover:text-blue-700 hover:bg-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
          Create Room
        </button>

        <form class="px-5 py-6 my-2 mx-4 bg-white rounded-lg" v-if="isCreateRoomModal">
          <div>
            <label for="small-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Room name</label>
            <input type="text" id="small-input"
            v-model="roomNameInput"
              class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
          </div>
          <div>
            <label for="small-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Max users</label>
            <input type="number" id="small-input"
            v-model="roomSizeInput"
              class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
          </div>
          <div>
            <button @click.prevent="handleRoomCreate"
            class="mr-2 bg-transparent hover:bg-green-600 text-blue-500 font-semibold hover:text-white mt-4 py-2 px-4 border border-blue-500 hover:border-transparent rounded">
            Create
          </button>
          <button @click.prevent="handleRoomCreate"
            class="bg-transparent hover:bg-red-600 text-red-600 font-semibold hover:text-white mt-4 py-2 px-4 border border-red-600 hover:border-transparent rounded">
            Discard
          </button>
          </div>
        </form>
      </div>
      <RoomsList />
    </div>

    <div class="w-4/5 bg-slate-50 py-4 px-6 rounded-r-md">
      <header class="mb-6">
        <nav class="p-0">
          <ul class="flex">
            <li class="mr-2">
              <button
                class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                Back
              </button>
            </li>
            <li class="">
              <button
                class="bg-transparent hover:bg-orange-400 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                Leave
              </button>
            </li>
          </ul>
        </nav>
      </header>

      <div class="flex w-full h-[48rem] flex-col">
        <div class="h-[90%]">
          <MessagesList :messages="dataFromServer.messages" />
        </div>
        <div>
          <div class="flex w-full my-5">
            <MessageInput v-on:input-data="handleMessageInput" />
            <div class="">
              <button @click="handleMessageSubmit"
                class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- <form>
      <div class="">
        <input type="text" v-model="messageInput">
      </div>
      <button @click.prevent="sendMessage">Send</button>
    </form>
    <p>From server: {{ dataFromServer }}</p> -->
  </div>
</template>

<script lang="ts">
import { defineComponent, onBeforeUnmount, ref } from 'vue';
import RoomsList from '@/components/chat/RoomsList.vue';
import MessagesList from '@/components/chat/MessagesList.vue';
import MessageInput from '@/components/chat/MessageInput.vue';
import { authStore } from '@/store/authStore';
import { socketService } from '@/service/webscokets';

export default defineComponent({
  name: 'HomeView',
  setup() {
    const messageInput = ref('')
    const dataFromServer = ref([])
    const useAuthStore = authStore()
    const isCreateRoomModal = ref(false)

    const roomNameInput = ref('')
    const roomSizeInput = ref('')

    socketService.onmessage = (event) => {
      dataFromServer.value = JSON.parse(event.data)
    }

    const handleMessageSubmit = () => {
      socketService.send(JSON.stringify({
        email: useAuthStore.user.email,
        dateSend: new Date,
        message: messageInput.value
      }))
    }

    const handleMessageInput = (value: string) => messageInput.value = value

    const handleRoomCreate = () => {
      socketService.send(JSON.stringify({
        action: 'create-room',
        payload: {
          name: roomNameInput.value,
          description: "Description",
          size: roomSizeInput.value,
          users: []
        }
      }))
    }

    const handleToggleCreateRoom = () => isCreateRoomModal.value = !isCreateRoomModal.value

    return {
      messageInput,
      handleMessageInput,
      handleMessageSubmit,
      handleRoomCreate,
      dataFromServer,
      roomNameInput,
      roomSizeInput,
      isCreateRoomModal,
      handleToggleCreateRoom
    }
  },
  components: {
    RoomsList,
    MessagesList,
    MessageInput
  }
});
</script>
