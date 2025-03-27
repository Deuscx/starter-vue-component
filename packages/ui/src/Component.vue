<script setup lang="ts">
import { useCounter } from '@vueuse/core'

const props = defineProps<{
  initial: number
}>()

const { count, inc, dec } = useCounter(props.initial)
</script>

<template>
  <div>
    {{ count }}
    <button class="inc btn" @click="inc()">
      +
    </button>
    <button class="dec btn" @click="dec()">
      -
    </button>
  </div>
</template>
