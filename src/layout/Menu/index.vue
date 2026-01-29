<script setup>
import { basicRoutes } from '@/router/routes'
import MenuItem from '@/layout/Menu/MenuItem.vue'
// console.log('basicRoutes:', basicRoutes)

defineOptions({ name: 'MenuComponent' })
</script>

<template>
  <MenuItem v-for="item of basicRoutes" :key="item.name" :item="item" :depth="1" :fullPath="item.path" />
</template>
