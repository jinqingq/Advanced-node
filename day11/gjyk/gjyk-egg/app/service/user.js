'use strict';

const Service = require('egg').Service;

class UserService extends Service {
  // 按名字和密码查找
  async see(name,pwd) {
    let sql=`select * from user where name='${name}' and pwd='${pwd}'`
    const res = await this.app.mysql.query(sql)
    return res
  }
  // 按id查找
  async look(id){
    let sql =`select * from user where id='${id}'`
    const res = await this.app.mysql.query(sql)
    return res
  }
  // 添加
  async registry(name,pwd){
    let sql = `insert into user (name,pwd) values ('${name}','${pwd}')`
    const res = await this.app.mysql.query(sql)
    return res
  }
  // 删除
  async delete(id){
    let sql = `delete from user where id=${id}`
    const res = await this.app.mysql.query(sql)
    return res
  }
  // 查找每个人所对应的角色与权限
  async getuser(id){
    let roleid = `select role_id from user_role where user_id=${id}`
    let powerid = `select power_id from role_power where role_id in (${roleid})`
    let sql = `select * from power where id in (${powerid})`
    const res = await this.app.mysql.query(sql)
    return res
  }
  async getlist(id){
    let roleid = `select role_id from user_role where user_id=${id}`
    let sql = `select * from role where id in (${roleid})`
    const res = await this.app.mysql.query(sql)
    return res
  }
}

module.exports = UserService;
