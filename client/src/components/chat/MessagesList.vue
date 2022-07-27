<template>
  <div class="w-full min-h-[100%]">
    <main class="flex h-full items-center">
      <div class="flex w-full h-full">
        <ul class="py-4 pr-5 w-full overflow-y-scroll thin-scrollbar scrollbar-thumb-gray-900 scrollbar-track-gray-50">
          <TheMessage v-for="msg in messages" :key="msg._id" :message="msg" />
        </ul>
      </div>
    </main>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import TheMessage from './TheMessage.vue'

export interface IMessage {
  _id: string,
  authorName: string,
  dateSent: number,
  text: string
}

export default defineComponent({
  props: {
    messages: Array as PropType<IMessage[]>
  },
  components: {
    TheMessage
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
