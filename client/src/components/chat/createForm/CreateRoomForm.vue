<template>
  <form class="px-5 py-6 my-2 mx-4 bg-white rounded-lg">
    <div>
      <FormLabel input-id="name-input" text="Room name" />
      <FormInput id="name-input" v-on:input-data="handleNameInput" />
    </div>
    <div>
      <FormLabel input-id="users-input" text="Max users" />
      <FormInput id="users-input" type="number" v-on:input-data="handleSizeInput" />
    </div>
    <div>
      <FormLabel input-id="input-description" text="Description" />
      <FormInput id="input-description" v-on:input-data="handleDescriptionInput" />
    </div>
    <div>
      <button @click.prevent="handleRoomCreate"
        class="mr-2 bg-transparent hover:bg-green-600 text-blue-500 font-semibold hover:text-white mt-4 py-2 px-4 border border-blue-500 hover:border-transparent rounded">
        Create
      </button>
      <button @click.prevent="handleRoomDiscard"
        class="bg-transparent hover:bg-red-600 text-red-600 font-semibold hover:text-white mt-4 py-2 px-4 border border-red-600 hover:border-transparent rounded">
        Discard
      </button>
    </div>
  </form>
</template>

<script lang="ts">
import { useSocketService } from '@/service/webscokets'
import { defineComponent, ref } from 'vue'
import FormLabel from './FormLabel.vue'
import FormInput from './FormInput.vue'

export default defineComponent({
  setup() {
    const roomNameInput = ref('')
    const roomSizeInput = ref(2)
    const roomDescriptionInput = ref('')

    const handleNameInput = (val: string) => roomNameInput.value = val
    const handleSizeInput = (val: string) => roomSizeInput.value = +val
    const handleDescriptionInput = (val: string) => roomDescriptionInput.value = val

    const handleRoomCreate = () => {
      useSocketService.send({
        action: 'create-room',
        payload: {
          name: roomNameInput.value,
          description: roomDescriptionInput.value,
          size: roomSizeInput.value,
          users: []
        }
      })
    }

    const handleRoomDiscard = () => {
      roomNameInput.value = ''
      roomSizeInput.value = 2
      roomDescriptionInput.value = ''
    }

    return {
      roomNameInput,
      roomSizeInput,
      roomDescriptionInput,
      handleRoomCreate,
      handleRoomDiscard,
      handleNameInput,
      handleSizeInput,
      handleDescriptionInput
    }
  },
  components: {
    FormLabel,
    FormInput
  }
})
</script>
