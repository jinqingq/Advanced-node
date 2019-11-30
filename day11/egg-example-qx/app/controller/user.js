'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
  async getuser() {
    let {ctx} = this

    let {id} = ctx.query

    const res = await ctx.service.user.getuser(id)
    ctx.body = res

  }
}

module.exports = UserController;
