<template>
  <label :for="inputId" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">{{ text }}</label>
</template>


<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    inputId: String,
    text: String
  }
})
</script>
