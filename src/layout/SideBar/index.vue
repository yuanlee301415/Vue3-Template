<script setup>
import { ROOT_ROUTE } from '@/router/routes'
import { router } from '@/router/index.js'
import { useRouteStore } from '@/stores/index.js'
import Menu from '../Menu/index.vue'

defineOptions({ name: 'LayoutSideBar' })

const VITE_APP_TITLE = import.meta.env.VITE_APP_TITLE
const routeStore = useRouteStore()
</script>

<template>
  <aside class="layout-sidebar" style="--logo-height: 48px">
    <div class="logo" @click="router.push(ROOT_ROUTE)">
      <img src="@/assets/logo.svg" alt="Logo" width="32" height="32" />
      <h2>{{ VITE_APP_TITLE }}</h2>
    </div>
    <nav>
      <Menu :menus="routeStore.menus" />
    </nav>
  </aside>
</template>

<style scoped lang="less">
.layout-sidebar {
  .logo {
    display: flex;
    align-items: center;
    height: var(--logo-height);
    padding: 10px 0 10px 10px;
    cursor: pointer;

    h2 {
      font-weight: 700;
      font-size: 16px;
      line-height: normal;
      margin-left: 0.5rem;
    }
  }

  nav {
    height: calc(100% - var(--logo-height));
    overflow-y: auto;
    user-select: none;
  }
}
</style>
