'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);

  // 登录
  router.post('/login',controller.user.login)

  // 查找用户对应的身份
  router.get('/getuser',controller.user.getuser)

  // 查找用户身份对应的权限
  router.get('/getlist',controller.user.getlist)

  // 增加
  router.post('/add',controller.user.add)

  // 删除
  router.get('/del',controller.user.del)

  // 修改
  router.post('/update',controller.user.update)

  // 查看列表
  router.get('/list',controller.user.list)
};
