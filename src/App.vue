<script lang="ts">
import { defineComponent } from 'vue'
import Component from './Component.vue'

export default defineComponent({
  name: 'App',
  components: {
    Component,
  },
})
</script>

<template>
  <Component />
</template>
