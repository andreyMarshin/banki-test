<script setup lang="ts">
import { ref } from 'vue'
import AppFooter from './components/AppFooter.vue'
import AppHeader from './components/AppHeader.vue'
import ProductCard from './components/ProductCard.vue'
import ProductDialog from './components/ProductDialog.vue'
import useProducts from './composables/useProducts'
import { IProduct } from './types/product'

const { products, isEmpty, searchQuery } = useProducts()

const activeProduct = ref<IProduct | null>(null)
</script>

<template>
  <div class="flex min-h-screen flex-col">
    <AppHeader />

    <main
      id="catalog"
      class="container-page pb-16 pt-[45px]"
    >
      <h1 class="text-h1 text-ink">Картины эпохи Возрождения</h1>

      <p
        v-if="isEmpty"
        class="mt-[39px] text-h5 text-ink-muted"
      >
        По запросу «{{ searchQuery }}» ничего не нашлось.
      </p>
      <div
        v-else
        class="mt-[39px] grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
      >
        <ProductCard
          v-for="product in products"
          :key="product.id"
          :product="product"
          @open="activeProduct = $event"
        />
      </div>
    </main>

    <AppFooter />

    <transition name="fade">
      <ProductDialog
        v-if="activeProduct"
        :product="activeProduct"
        @close="activeProduct = null"
      />
    </transition>
  </div>
</template>
