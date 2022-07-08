<template>
    <div class="w-full mr-4">
      <input
        class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-gray-100 focus:border-blue-500"
        id="inline-full-name" type="text" v-model="messageInput" />
    </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue'

export default defineComponent({
  emits: [
    'inputData'
  ],
  setup(ctx, {emit}) {
    const messageInput = ref('')

    watch(messageInput, () => {
      emit('inputData', messageInput.value)
    })

    return {
      messageInput
    }
  },
})
</script>
