<script setup>
import { useRoute } from 'vue-router'

defineOptions({ name: 'LayoutHeader' })

const route = useRoute()
</script>

<template>
  <div class="header">
    <div class="headerLeft">
      <div class="breadcrumbs">
        <span v-if="route.meta">{{ route.meta?.title }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">
.header {
  display: flex;
  flex: 0 0 auto;
  align-items: center;
  justify-content: space-between;
  height: 48px;
  line-height: 48px;
  padding: 0 10px;
}
</style>
