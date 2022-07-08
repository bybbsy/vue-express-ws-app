<template>
  <div class="w-full h-full">
    <main class="flex h-full items-center">
      <div class="flex w-full h-full bg-blue-200">
        <ul class="py-4 px-5   w-full overflow-y-scroll">
          <li v-for="(msg, i) in messages" :key="i" class="bg-white rounded my-2 py-2 px-3">
            <header class="flex items-center">
              <span class="font-bold mr-2">{{ msg.email }} </span>
              <span class="text-sm">{{ formatDate(msg.dateSend) }}</span>
            </header>
            <p class="text-left">{{ msg.message }}</p>
          </li>
        </ul>
      </div>
    </main>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from 'vue'
import { formatDistanceToNow } from 'date-fns'

interface IMessage {
  email: string,
  dateSend: string,
  message: string
}

export default defineComponent({
  props: {
    messages: Array as PropType<IMessage[]>
  },
  setup() {
    const formatDate = (date: number) => formatDistanceToNow(new Date(date), { addSuffix: true})

    return {
      formatDate
    }
  }
})
</script>


<!-- <script lang="ts">
// const messages = [
//   {
//     username: 'Jeff 222',
//     message: 'Hey folks',
//   },
//   {
//     username: 'jimmy the boi',
//     message: 'Hola everybody, how are you?'
//   },
//   {
//     username: 'Cindy',
//     message: 'Im fine listening to music 😀😀😀'
//   },
//   {
//     username: 'Jeff 222',
//     message: 'Hey folks',
//   },
//   {
//     username: 'jimmy the boi',
//     message: 'Hola everybody, how are you?'
//   },
//   {
//     username: 'Cindy',
//     message: 'Im fine listening to music 😀😀😀'
//   },
//   {
//     username: 'Jeff 222',
//     message: 'Hey folks',
//   },
//   {
//     username: 'jimmy the boi',
//     message: 'Hola everybody, how are you?'
//   },
//   {
//     username: 'Cindy',
//     message: 'Im fine listening to music 😀😀😀'
//   },
//   {
//     username: 'Jeff 222',
//     message: 'Hey folks',
//   },
//   {
//     username: 'jimmy the boi',
//     message: 'Hola everybody, how are you?'
//   },
//   {
//     username: 'Cindy',
//     message: 'Im fine listening to music 😀😀😀'
//   },
//   {
//     username: 'Jeff 222',
//     message: 'Hey folks',
//   },
//   {
//     username: 'jimmy the boi',
//     message: 'Hola everybody, how are you?'
//   },
//   {
//     username: 'Cindy',
//     message: 'Im fine listening to music 😀😀😀'
//   }
// ]
</script> -->
