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
  <aside class="layout-sidebar flex flex-col fixed w-[--side-width] h-full border-r border-solid border-r-[--vt-c-black-soft]">
    <div class="logo flex items-center h-12 py-3 pl-3 cursor-pointer" @click="router.push(ROOT_ROUTE)">
      <img src="@/assets/logo.svg" alt="Logo" width="32" height="32" />
      <h2 class="font-bold text-base ml-2">{{ VITE_APP_TITLE }}</h2>
    </div>
    <nav class="flex-1 overflow-y-auto select-none">
      <Menu :menus="routeStore.menus" />
    </nav>
  </aside>
</template>
