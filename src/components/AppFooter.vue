<script setup lang="ts">
import AppPhoneIcon from './icons/AppPhoneIcon.vue'
import AppPinIcon from './icons/AppPinIcon.vue'
import { CONTACTS, NAV_LINKS } from '@/constants/navigation'
</script>

<template>
  <footer class="mt-auto bg-surface">
    <div
      class="container-page flex flex-col gap-4 py-6 lg:h-header lg:flex-row lg:items-center lg:justify-between lg:gap-8 lg:py-0"
    >
      <nav
        class="-mx-4 flex shrink-0 items-center gap-8 overflow-x-auto px-4 sm:-mx-6 sm:px-6 lg:mx-0 lg:gap-12 lg:overflow-visible lg:px-0"
      >
        <a
          v-for="link in NAV_LINKS"
          :key="link.label"
          :href="link.href"
          class="nav-link whitespace-nowrap text-h5 text-ink-muted"
        >
          {{ link.label }}
        </a>
      </nav>
      <div
        class="flex flex-col gap-3 text-h5 text-ink-muted sm:flex-row sm:items-center sm:gap-12"
      >
        <a
          :href="CONTACTS.phoneHref"
          class="nav-link flex items-center gap-2 whitespace-nowrap"
        >
          <AppPhoneIcon class="size-4 shrink-0" />
          {{ CONTACTS.phone }}
        </a>
        <p class="flex items-center gap-2">
          <AppPinIcon class="size-4 shrink-0" />
          {{ CONTACTS.address }}
        </p>
      </div>
    </div>
  </footer>
</template>
