<script setup>
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { Menu } from '@/models/index.js'

const props = defineProps({
  item: {
    type: Menu,
  },
})

const route = useRoute()
const open = ref(false)

watch(
  () => route.path,
  () => {
    open.value = initOpen()
  },
  {
    immediate: true,
  },
)

function initOpen() {
  if (!props.item.children?.length) return false
  return route.path.startsWith(props.item.path)
}

function handleToggleOpen() {
  open.value = !open.value
}
</script>

<template>
  <dl :class="{ open: open }" :style="{ textIndent: item.depth + 'em' }" class="menu-item">
    <template v-if="item.children?.length">
      <dt @click="handleToggleOpen">
        <span>{{ item.title }}</span>
        <i />
      </dt>
      <dd>
        <MenuItem v-for="child of item.children" :key="child.path" :item="child" />
      </dd>
    </template>
    <template v-else>
      <dt>
        <router-link :to="{ path: item.path }">{{ item.title }}</router-link>
      </dt>
    </template>
  </dl>
</template>

<style scoped lang="less">
@import './MenuItem.less';
</style>
