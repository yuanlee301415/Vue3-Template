<script setup>
import LayoutSideBar from './SideBar/index.vue'
import LayoutHeader from './Header/index.vue'
import LayoutContent from './Content/index.vue'

defineOptions({ name: 'LayoutContainer' })
</script>

<template>
  <section class="layout-container" style="--side-width: 210px">
    <LayoutSideBar class="sideBar" />

    <main>
      <LayoutHeader />
      <LayoutContent class="content" />
    </main>
  </section>
</template>

<style scoped lang="less">
.layout-container {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  overflow: hidden;
  .sideBar {
    position: fixed;
    width: var(--side-width);
    height: 100vh;
    border-right: 1px solid var(--vt-c-black-soft);
  }
  main {
    height: 100%;
    margin-left: var(--side-width);
    display: flex;
    flex-direction: column;
    overflow: hidden;
    .content {
      background-color: var(--color-background);
      padding: 10px;
      flex: 1;
      overflow-x: hidden;
      overflow-y: auto;
    }
  }
}
</style>
