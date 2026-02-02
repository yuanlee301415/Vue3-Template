<script setup>
import { useRoute } from 'vue-router'

defineOptions({ name: 'LayoutHeader' })

const route = useRoute()
</script>

<template>
  <div class="layout-header">
    <div class="header-left">
      <div v-if="route.meta?.title" class="breadcrumbs">
        <span>{{ route.meta.title }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">
.layout-header {
  display: flex;
  flex: 0 0 auto;
  align-items: center;
  justify-content: space-between;
  height: 48px;
  line-height: 48px;
  padding: 0 10px;
}
</style>
