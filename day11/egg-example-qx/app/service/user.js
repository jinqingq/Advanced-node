'use strict';

const Service = require('egg').Service;

class UserService extends Service {
  async getuser(id) {
    let roleid = `select role_id from user_role where user_id=${id}`

    let powerid = `select power_id from role_power where role_id in (${roleid})` 
    
    let sql = `select * from power where id in (${powerid})`

    const res = await this.app.mysql.query(sql)
    return res
  }
}

module.exports = UserService;
