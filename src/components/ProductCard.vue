<script setup lang="ts">
import ProductBuyButton from './ProductBuyButton.vue'
import { IProduct } from '@/types/product'
import { formatPrice } from '@/utils/formatters'

defineProps<{ product: IProduct }>()

const emit = defineEmits<{ (e: 'open', product: IProduct): void }>()
</script>

<template>
  <article
    class="flex h-full flex-col overflow-hidden rounded border border-line bg-white transition-colors duration-150 xl:h-[328px]"
    :class="product.isSold ? 'opacity-50' : 'hover:border-line-strong'"
  >
    <button
      type="button"
      class="block shrink-0"
      :aria-label="`Подробнее: ${product.title}`"
      @click="emit('open', product)"
    >
      <img
        :src="product.images[0]"
        :alt="product.title"
        class="h-40 w-full border-b border-line-soft object-cover"
        loading="lazy"
      />
    </button>
    <div class="flex flex-1 flex-col px-6 pb-6 pt-5">
      <h2 class="text-h2 text-ink xl:min-h-[54px]">
        <button
          type="button"
          class="text-left transition-colors duration-150 hover:text-brand-hover"
          @click="emit('open', product)"
        >
          {{ product.title }}
        </button>
      </h2>
      <div class="mt-auto pt-[22px]">
        <div class="flex h-12 items-center justify-between gap-4">
          <div class="flex flex-col justify-center">
            <span
              v-if="product.oldPrice && !product.isSold"
              class="text-h6 text-ink-subtle line-through"
            >
              {{ formatPrice(product.oldPrice) }}
            </span>
            <span class="whitespace-nowrap text-h3 text-ink">
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
            class="shrink-0"
          />
        </div>
      </div>
    </div>
  </article>
</template>
