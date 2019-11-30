'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);

  // 注册  添加
  router.post('/registry',controller.user.registry)

  // 登录
  router.post('/login',controller.user.login)

  // 获取用户身份
  router.get('/getuser',controller.user.getuser)

  // 获取用户身份对应的权限
  router.get('/getlist',controller.user.getlist)

  // 删除
  router.get('/del',controller.user.del)

  // 查看列表
  router.get('/list',controller.user.list)
};
