import { LAYOUT } from '@/router/constants.js'

const TEST_ROUTE = {
  path: '/test',
  name: 'Test',
  component: LAYOUT,
  redirect: '/test/a',
  meta: {
    title: 'Test',
  },
  children: [
    {
      path: 'a',
      name: 'TestA',
      component: () => import('@/views/test/a.vue'),
      meta: {
        title: 'TestA',
      },
    },
    {
      path: 'b',
      name: 'TestB',
      component: () => import('@/views/test/b.vue'),
      meta: {
        title: 'TestB',
      },
    },
  ],
}

export default TEST_ROUTE
