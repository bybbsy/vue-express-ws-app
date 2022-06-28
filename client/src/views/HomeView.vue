<template>
  <div class="">
    <form>
      <div class="">
        <input type="text" v-model="messageInput">
      </div>
      <button @click.prevent="sendMessage">Send</button>
    </form>
    <p>From server: {{ dataFromServer }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent, onBeforeUnmount, ref } from 'vue';
export default defineComponent({
  name: 'HomeView',
  setup() {
    const messageInput = ref('')
    const dataFromServer = ref([])
    const socket = new WebSocket('ws://localhost:6100');

    socket.onmessage = (event) => dataFromServer.value = JSON.parse(event.data)

    const sendMessage = () => {
      socket.send(messageInput.value)
    }

    
    return {
      messageInput,
      sendMessage,
      dataFromServer
    }
  }
});
</script>
