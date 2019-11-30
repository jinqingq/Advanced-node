'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);

  // 注册
  router.post('/registry',controller.user.registry)

  // 登录
  router.post('/login',controller.user.login)

  // 用于获取用户权限
  router.get('/getlist',controller.user.getlist)

  // 用于获取角色
  router.get('/getuser',controller.user.getuser)
};
