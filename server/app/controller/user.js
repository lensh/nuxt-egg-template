'use strict';

const Controller = require('./base');

class UserController extends Controller {
  async index() {
    const data = {
      app_name: 'nuxt-egg'
    }
    this.success(data);
  }
}

module.exports = UserController;
