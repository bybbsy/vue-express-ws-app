<template>
  <input :type="type" min="0" :id="id" v-model="messageInput"
    class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
    >
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue'

export default defineComponent({
  emits: [
    'inputData'
  ],
  props: {
    id: {
      type: String,
      required: true
    },
    type: {
      type: String,
      default: 'text'
    },
    min: {
      type: String,
    }
  },
  setup(ctx, { emit }) {
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

