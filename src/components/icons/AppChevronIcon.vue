<script setup lang="ts">
withDefaults(defineProps<{ direction?: 'left' | 'right' }>(), {
  direction: 'right'
})
</script>

<template>
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="true"
  >
    <polyline
      v-if="direction === 'left'"
      points="15 18 9 12 15 6"
    />
    <polyline
      v-else
      points="9 18 15 12 9 6"
    />
  </svg>
</template>
