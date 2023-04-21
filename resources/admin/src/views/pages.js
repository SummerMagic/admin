export default {
  index: () => import('@v/Index'),
  //admin-permissions
  'admin-permissions': () => import('@v/admin-permissions/Index'),
  'admin-permissions/create': () => import('@v/admin-permissions/Form'),
  'admin-permissions/:id(\\d+)/edit': () => import('@v/admin-permissions/Form'),

  'admin-roles': () => import('@v/admin-roles/Index'),
  'admin-roles/create': () => import('@v/admin-roles/Form'),
  'admin-roles/:id(\\d+)/edit': () => import('@v/admin-roles/Form'),
  //admin-user
  'admin-users': () => import('@v/admin-users/Index'),
  'admin-users/create': () => import('@v/admin-users/Form'),
  'admin-users/:id(\\d+)/edit': () => import('@v/admin-users/Form'),
  //categories
  'config-categories': () => import('@v/config-categories/Index'),
  //config
  configs: () => import('@v/configs/Index'),
  'configs/create': () => import('@v/configs/Form'),
  'configs/:id(\\d+)/edit': () => import('@v/configs/Form'),
  //routers
  'vue-routers': () => import('@v/vue-routers/Index'),
  'vue-routers/create': () => import('@v/vue-routers/Form'),
  'vue-routers/:id(\\d+)/edit': () => import('@v/vue-routers/Form'),
  //system
  'system-media': () => import('@v/system-media/Index'),
  // 订单路由
  'pay-order-infos': () => import('@v/pay-order-infos/Index'),
  'pay-order-infos/create': () => import('@v/pay-order-infos/Form'),
  'pay-order-infos/:id(\\d+)/edit': () => import('@v/pay-order-infos/Form'),
}
