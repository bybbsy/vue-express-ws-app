<template>
  <ul>
    <li v-for="msg in messages" :key="msg._id">
      <p>msg.text</p>
    </li>
  </ul>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: [
    'messages'
  ]
})
</script>

