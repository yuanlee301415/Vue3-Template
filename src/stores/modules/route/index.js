/*
 * 路由 Store
 * */

import { defineStore } from 'pinia'
import { ref } from 'vue'

import { StoreId } from '@/enums/index.js'
import { basicRoutes } from '@/router/routes'
import { genMenus } from '../../shared'

export const useRouteStore = defineStore(StoreId.Route, () => {
  /**
   * 菜单列表
   * @type {Menu[]}
   */
  const menus = ref([])

  getMenus()

  /**
   * 获取菜单列表
   */
  function getMenus() {
    menus.value = genMenus([...basicRoutes])
  }

  return {
    menus,
  }
})
