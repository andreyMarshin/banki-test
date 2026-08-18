<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import AppChevronIcon from './icons/AppChevronIcon.vue'

const props = defineProps<{ images: string[]; alt: string }>()

const activeIndex = ref(0)

const hasControls = computed(() => props.images.length > 1)

const goTo = (index: number) => {
  const total = props.images.length

  activeIndex.value = (index + total) % total
}

const onKeydown = (event: KeyboardEvent) => {
  if (!hasControls.value) return

  if (event.key === 'ArrowLeft') goTo(activeIndex.value - 1)

  if (event.key === 'ArrowRight') goTo(activeIndex.value + 1)
}

onMounted(() => window.addEventListener('keydown', onKeydown))

onBeforeUnmount(() => window.removeEventListener('keydown', onKeydown))
</script>

<template>
  <div class="relative overflow-hidden rounded bg-surface">
    <div
      class="flex transition-transform duration-300 ease-out"
      :style="{ transform: `translateX(-${activeIndex * 100}%)` }"
    >
      <img
        v-for="(image, index) in images"
        :key="image"
        :src="image"
        :alt="alt"
        class="aspect-[16/10] w-full shrink-0 object-cover"
        :loading="index ? 'lazy' : 'eager'"
      />
    </div>

    <template v-if="hasControls">
      <button
        type="button"
        class="absolute left-3 top-1/2 flex size-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/80 text-ink backdrop-blur transition-colors duration-150 hover:bg-white"
        aria-label="Предыдущее изображение"
        @click="goTo(activeIndex - 1)"
      >
        <AppChevronIcon
          direction="left"
          class="size-5"
        />
      </button>
      <button
        type="button"
        class="absolute right-3 top-1/2 flex size-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/80 text-ink backdrop-blur transition-colors duration-150 hover:bg-white"
        aria-label="Следующее изображение"
        @click="goTo(activeIndex + 1)"
      >
        <AppChevronIcon class="size-5" />
      </button>
      <div class="absolute inset-x-0 bottom-3 flex justify-center gap-2">
        <button
          v-for="(image, index) in images"
          :key="`dot-${image}`"
          type="button"
          class="h-2 rounded-full transition-all duration-200"
          :class="
            index === activeIndex
              ? 'w-6 bg-brand'
              : 'w-2 bg-white/70 hover:bg-white'
          "
          :aria-label="`Изображение ${index + 1}`"
          @click="goTo(index)"
        />
      </div>
    </template>
  </div>
</template>
