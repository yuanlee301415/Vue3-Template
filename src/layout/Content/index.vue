<script setup>
defineOptions({ name: 'LayoutContent' })
</script>

<template>
  <div class="layout-content">
    <RouterView v-slot="{ Component, route }">
      <transition name="fade-slide" mode="out-in">
        <component :is="Component" :key="route.path" />
      </transition>
    </RouterView>
  </div>
</template>

<style scoped lang="less">
.layout-content {
  padding: 10px;
}
</style>
