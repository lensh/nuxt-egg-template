'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  const jwt = app.middleware.jwt({ app });
  router.group({ name: 'user', prefix: '/user' }, router => {
    router.get('/', jwt, controller.user.index);
  });
  router.get('/', controller.home.index);
};