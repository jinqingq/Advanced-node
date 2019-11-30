'use strict';

const Service = require('egg').Service;

class AuthorizationService extends Service {
    // 查询用户名是否存在
    async look(name) {
        let sql = `select * from user where name='${name}'`
        const res = this.app.mysql.query(sql)
        return res
    }
    // 根据id判断是否存在
    async see(id){
        let sql = `select * from user where id=${id}`
        const res = this.app.mysql.query(sql)
        return res
    }
    // 注册
    async registry(name,pwd,tel,bq,role,userid,address,bz,times,zd){
        let sql = `insert into user (name,pwd,tel,bq,role,userid,address,bz,times,zd) values ('${name}','${pwd}','${tel}','${bq}','${role}','${userid}','${address}','${bz}','${times}','${zd}')`
        const res = this.app.mysql.query(sql)
        return res
    }
    // 登录
    async login(name,pwd){
        let sql = `select * from user where name='${name}' and pwd='${pwd}'`
        const res = this.app.mysql.query(sql)
        return res
    }
    // 查用户身份
    async getuser(id){
        let roleid = `select role_id from user_role where user_id=${id}`
        let sql =  `select * from role where id in (${roleid})`
        const res = this.app.mysql.query(sql)
        return res
    }
    // 获取用户身份对应的权限
    async getlist(id){
        let roleid = `select role_id from user_role where user_id=${id}`
        let powerid =  `select power_id from role_power where role_id in (${roleid})`
        let sql = `select * from power where id in (${powerid})`
        const res = this.app.mysql.query(sql)
        return res
    }
    // 删除
    async del(id){
        let sql =  `delete from user where id=${id}`
        const res = this.app.mysql.query(sql)
        return res
    }
    // 列表
    async list(){
        let sql = `select * from user`
        const res = this.app.mysql.query(sql)
        return res
    }
}

module.exports = AuthorizationService;