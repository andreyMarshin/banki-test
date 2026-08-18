<script setup lang="ts">
defineProps<{ value: string }>()

const emit = defineEmits<{
  (e: 'input', value: string): void
  (e: 'submit'): void
}>()

const onInput = (event: Event) => {
  emit('input', (event.target as HTMLInputElement).value)
}
</script>

<template>
  <form
    class="flex h-12"
    @submit.prevent="emit('submit')"
  >
    <input
      :value="value"
      type="search"
      class="h-full min-w-0 flex-1 appearance-none border border-r-0 border-line bg-transparent px-4 text-h5 text-ink outline-none placeholder:text-ink-placeholder focus:border-line-strong"
      placeholder="Поиск по названию картины"
      aria-label="Поиск по названию картины"
      @input="onInput"
    />
    <button
      type="submit"
      class="h-full w-[122px] shrink-0 bg-brand text-h4 text-white transition-colors duration-150 hover:bg-brand-hover"
    >
      Найти
    </button>
  </form>
</template>
