<script setup lang="ts">
import { computed } from 'vue'
import AppCheckIcon from './icons/AppCheckIcon.vue'
import AppSpinnerIcon from './icons/AppSpinnerIcon.vue'
import useCart from '@/composables/useCart'

const props = defineProps<{ productId: string }>()

const { getStatus, addToCart } = useCart()

const status = computed(() => getStatus(props.productId))

const stateClass = computed(() => {
  if (status.value === 'in-cart') return 'cursor-default bg-brand-cart'

  if (status.value === 'pending') return 'cursor-wait bg-brand-hover'

  return 'bg-brand hover:bg-brand-hover'
})

const label = computed(() => {
  if (status.value === 'in-cart') return 'В корзине'

  if (status.value === 'pending') return 'Обрабатывается'

  return 'Купить'
})
</script>

<template>
  <button
    type="button"
    class="flex h-12 w-[118px] items-center justify-center gap-2 text-h4 text-brand-fg transition-colors duration-150"
    :class="stateClass"
    :disabled="status !== 'idle'"
    :aria-label="label"
    :title="label"
    @click="addToCart(productId)"
  >
    <AppSpinnerIcon
      v-if="status === 'pending'"
      class="size-5"
    />
    <template v-else>
      <AppCheckIcon
        v-if="status === 'in-cart'"
        class="size-5 shrink-0"
      />
      <span>{{ label }}</span>
    </template>
  </button>
</template>
