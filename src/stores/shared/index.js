import { Menu } from '@/models/index.js'

/**
 * 生成菜单
 * @param {RouteLocation[]} routes 路由列表
 * @param {string} [path]
 * @param {number} [depth] 嵌套深度
 * @param {Menu[]} [result] 缓存的中间结果
 * @return {Menu[]} 菜单列表
 */
export function genMenus(routes, path = '', depth = 1, result = []) {
  for (const route of routes) {
    // 没有 `title`
    if (!route?.meta?.title) continue

    // 子路由全部无权限
    if (route.children?.length === 0) continue

    const menu = new Menu({
      path: path ? path + '/' + route.path : route.path,
      title: route.meta.title,
      depth,
    })
    result.push(menu)

    if (!route.children) continue

    const children = genMenus(route.children, menu.path, depth + 1)
    menu.children = children.length ? children : null
  }
  return result
}
