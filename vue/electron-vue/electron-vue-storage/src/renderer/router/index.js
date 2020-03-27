import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: require('@/components/Index').default,
      children: [{
        name: 'Upload',
        path: 'upload',
        component: require('@/components/Upload').default
      }, {
        name: 'Storage',
        path: 'storage',
        component: require('@/components/Storage').default,
        children: [{
          name: 'OSSAdapter',
          path: 'oss',
          component: require('@/components/storageAdapter/OSSAdapter').default
        }, {
          name: 'COSAdapter',
          path: 'cos',
          component: require('@/components/storageAdapter/COSAdapter').default
        }]
      }]
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
