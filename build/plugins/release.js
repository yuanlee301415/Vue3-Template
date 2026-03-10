import { writeFileSync } from 'node:fs'
import { resolve } from 'node:path'

/**
 * 生成 release 文件
 * @param {string} version 语义版本 + 内部版本号
 * @param {string} time 构建时间
 * @param {string} mode 构建模式
 * @return {{writeBundle(): void, name: string}}
 */
export function releasePlugin(version, time, mode) {
  return {
    name: 'release-plugin',
    writeBundle() {
      const text = ['VERSION: ' + version, 'BUILD_TIME: ' + time, 'MODE: ' + mode].join('\n')
      writeFileSync(resolve('dist/release'), text, 'utf-8')
      console.log(`
      \n--------------------[GenerateRelease]:: Success--------------------
      \n${text}
      \n-------------------------------------------------------------------
      `)
    },
  }
}
