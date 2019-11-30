'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);


  router.post('/registry',controller.user.registry);
  router.post('/login',controller.user.login)

  router.get('/list',controller.user.getlist)

  router.get('/delete',controller.user.delete)
};
