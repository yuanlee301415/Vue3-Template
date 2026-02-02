<script setup>
import LayoutSideBar from './SideBar/index.vue'
import LayoutHeader from './Header/index.vue'
import LayoutContent from './Content/index.vue'

defineOptions({ name: 'LayoutContainer' })
</script>

<template>
  <section class="layout-container flex flex-col size-full overflow-hidden" style="--side-width: 210px">
    <LayoutSideBar />

    <main class="h-full flex flex-col overflow-hidden ml-[--side-width]">
      <LayoutHeader />
      <LayoutContent />
    </main>
  </section>
</template>
