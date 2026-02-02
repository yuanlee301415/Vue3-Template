/*
 * 导航菜单
 * */

export class Menu {
  /**
   * 路径
   * @type {string}
   */
  path

  /**
   * 名称
   * @type {string}
   */
  title

  /**
   * 嵌套深度
   * @type {number}
   */
  depth

  /**
   * 子菜单
   * @type {Menu[]|null}
   */
  children

  /**
   * @param {Menu} _
   */
  constructor(_) {
    const { path, title, depth, children } = { ..._ }
    this.path = path
    this.title = title
    this.depth = depth
    this.children = children
  }

  /**
   * 批量实例化
   * @param {Array} [list]
   * @return {Menu[]|void}
   */
  from(list) {
    return list?.map((_) => new this(_))
  }
}
