'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/home', controller.home.index);

  router.post('/adduser', controller.user.adduser);
  router.get('/look',controller.user.look);
  router.post('/del',controller.user.del);
  router.post('/update',controller.user.update)
};
