<script setup lang="ts">
import { onBeforeUnmount, onMounted } from 'vue'
import ProductBuyButton from './ProductBuyButton.vue'
import ProductGallery from './ProductGallery.vue'
import AppCloseIcon from './icons/AppCloseIcon.vue'
import { IProduct } from '@/types/product'
import { formatPrice } from '@/utils/formatters'

defineProps<{ product: IProduct }>()

const emit = defineEmits<{ (e: 'close'): void }>()

const onKeydown = (event: KeyboardEvent) => {
  if (event.key === 'Escape') emit('close')
}

onMounted(() => {
  document.body.classList.add('is-locked')
  window.addEventListener('keydown', onKeydown)
})

onBeforeUnmount(() => {
  document.body.classList.remove('is-locked')
  window.removeEventListener('keydown', onKeydown)
})
</script>

<template>
  <div
    class="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 sm:p-6"
    role="dialog"
    aria-modal="true"
    :aria-label="product.title"
    @click.self="emit('close')"
  >
    <div
      class="relative max-h-full w-full max-w-[880px] overflow-y-auto rounded bg-white"
    >
      <button
        type="button"
        class="absolute right-3 top-3 z-10 flex size-10 items-center justify-center rounded-full bg-white/80 text-ink backdrop-blur transition-colors duration-150 hover:bg-white"
        aria-label="Закрыть"
        @click="emit('close')"
      >
        <AppCloseIcon class="size-5" />
      </button>

      <div class="grid gap-6 p-4 sm:p-6 md:grid-cols-2 md:gap-8 md:p-8">
        <ProductGallery
          :images="product.images"
          :alt="product.title"
          class="self-start"
        />

        <div class="flex flex-col">
          <h2 class="pr-10 text-h1 text-ink">{{ product.title }}</h2>
          <p class="mt-4 text-h5 text-ink-muted">{{ product.description }}</p>

          <div class="mt-auto pt-8">
            <div class="flex flex-col justify-center">
              <span
                v-if="product.oldPrice && !product.isSold"
                class="text-h6 text-ink-subtle line-through"
              >
                {{ formatPrice(product.oldPrice) }}
              </span>
              <span class="text-h1 text-ink">
                {{
                  product.isSold
                    ? 'Продана на аукционе'
                    : formatPrice(product.price)
                }}
              </span>
            </div>
            <ProductBuyButton
              v-if="!product.isSold"
              :product-id="product.id"
              class="mt-4"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
