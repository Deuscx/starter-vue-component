<script lang="ts">
import { defineComponent } from 'vue'
import CustomComponent from './Component.vue'

export default defineComponent({
  name: 'App',
  components: {
    CustomComponent,
  },
})
</script>

<template>
  <CustomComponent :initial="0" />
</template>
