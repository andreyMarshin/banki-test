<script setup lang="ts">
import AppSearch from './AppSearch.vue'
import useProducts from '@/composables/useProducts'
import { NAV_LINKS } from '@/constants/navigation'

const { searchQuery } = useProducts()
</script>

<template>
  <header class="border-b border-line bg-page">
    <div
      class="container-page flex flex-col gap-4 py-4 lg:h-header lg:flex-row lg:items-center lg:justify-between lg:gap-8 lg:py-0"
    >
      <nav
        class="-mx-4 flex shrink-0 items-center gap-8 overflow-x-auto px-4 sm:-mx-6 sm:px-6 lg:mx-0 lg:gap-12 lg:overflow-visible lg:px-0"
      >
        <a
          v-for="link in NAV_LINKS"
          :key="link.label"
          :href="link.href"
          class="nav-link whitespace-nowrap text-h5 text-ink"
        >
          {{ link.label }}
        </a>
      </nav>
      <AppSearch
        v-model="searchQuery"
        class="w-full lg:w-[416px] lg:shrink-0"
      />
    </div>
  </header>
</template>
