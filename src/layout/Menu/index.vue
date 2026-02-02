<script setup>
import MenuItem from '@/layout/Menu/MenuItem.vue'

defineOptions({ name: 'LayoutMenu' })

defineProps({
  menus: {
    type: Array,
  },
})
</script>

<template>
  <MenuItem v-for="item of menus" :key="item.path" :item="item" />
</template>
