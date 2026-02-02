<script setup>
defineOptions({ name: 'LayoutContent' })
</script>

<template>
  <div class="layout-content p-3 flex-1 overflow-x-hidden overflow-y-auto bg-[--color-background]">
    <RouterView v-slot="{ Component, route }">
      <transition name="fade-slide" mode="out-in">
        <component :is="Component" :key="route.path" />
      </transition>
    </RouterView>
  </div>
</template>
