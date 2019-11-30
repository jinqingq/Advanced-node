'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);

  // 登录
  router.post('/login',controller.user.login)

  // 查询用户身份
  router.get('/getuser',controller.user.getuser)

  // 查询用户身份权限
  router.get('/getlist',controller.user.getlist)

  // 增加
  router.post('/registry',controller.user.registry)

  // 删除
  router.get('/delete',controller.user.delete)

  // 修改
  router.post('/modify',controller.user.modify)

  // 查用户列表
  router.get('/querys',controller.user.querys)
};
