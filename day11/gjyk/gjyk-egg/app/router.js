'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);

  router.post('/login',controller.user.login)

  router.get('/delete',controller.user.delete)

  router.post('/registry',controller.user.registry)

  router.get('/getuser',controller.user.getuser)

  router.get('/getlist',controller.user.getlist)
};
