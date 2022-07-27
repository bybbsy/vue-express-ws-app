<template>
  <li class=" rounded my-2 py-2 px-3 hover:bg-slate-500 transition-all cursor-pointer">
    <header class="flex items-center">
      <span class="text-white font-bold mr-4">{{ message?.authorName || 'no-name' }} </span>
      <span class="text-sm text-gray-300">{{ formatDate(message?.dateSent) }}</span>
    </header>
    <p class="text-left text-gray-300">{{ message?.text }}</p>
  </li>
</template>

<script lang="ts">
import { formatDistanceToNow } from 'date-fns'
import { defineComponent, PropType } from 'vue'
import { IMessage } from './MessagesList.vue'

export default defineComponent({
  props: {
    message: {} as PropType<IMessage>
  },
  setup() {
    const formatDate = (date: number) => formatDistanceToNow(new Date(date), { addSuffix: true })

    return {
      formatDate
    }
  }
})
</script>

