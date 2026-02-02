<script setup>
import { useRoute } from 'vue-router'

defineOptions({ name: 'LayoutHeader' })

const route = useRoute()
</script>

<template>
  <header class="layout-header flex items-center h-12 px-3">
    <div class="header-left">
      <div v-if="route.meta?.title" class="breadcrumbs">
        <span>{{ route.meta.title }}</span>
      </div>
    </div>
  </header>
</template>
