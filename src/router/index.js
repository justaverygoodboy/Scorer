import Vue from 'vue'
import Router from 'vue-router'
import dz181 from '@/views/dz181'
import dz182 from '@/views/dz182'
import dz183 from '@/views/dz183'
import dz184 from '@/views/dz184'
import dz185 from '@/views/dz185'
import dz186 from '@/views/dz186'
import dz187 from '@/views/dz187'
import dz188 from '@/views/dz188'
import wlw181 from '@/views/wlw181'
import wlw182 from '@/views/wlw182'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  routes: [
    {
      path: '/',
      name: 'dz181',
      component: dz181
    },
    {
      path: '/dz182',
      name: 'dz182',
      component: dz182
    },
    {
      path: '/dz183',
      name: 'dz183',
      component: dz183
    },
    {
      path: '/dz184',
      name: 'dz184',
      component: dz184
    },
    {
      path: '/dz185',
      name: 'dz185',
      component: dz185
    },
    {
      path: '/dz186',
      name: 'dz186',
      component: dz186
    },
    {
      path: '/dz187',
      name: 'dz187',
      component: dz187
    },
    {
      path: '/dz188',
      name: 'dz188',
      component: dz188
    },
    {
      path: '/wlw181',
      name: 'wlw181',
      component: wlw181
    },
    {
      path: '/wlw182',
      name: 'wlw182',
      component: wlw182
    }
  ]
})
