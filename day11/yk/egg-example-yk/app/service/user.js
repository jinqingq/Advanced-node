const Service = require('egg').Service

class UserService extends Service{
    async look(name,pwd){
        let sql = `select * from user where name='${name}' and pwd='${pwd}'`
        const res = await this.app.mysql.query(sql)
        return res
    }
    async registry(name,pwd){
        let sql = `insert into user (name,pwd) values ('${name}','${pwd}')`
        const res = await this.app.mysql.query(sql)
        return res
    }
    async getlist(id){
        let roleid = `select role_id from user_role where user_id=${id}`
        let powerid = `select power_id from role_power where role_id in (${roleid})`
        let sql = `select * from power where id in (${powerid})`
        const res = await this.app.mysql.query(sql)
        return res
    }
    async getuser(id){
        let roleid = `select role_id from user_role where user_id=${id}`
        let sql = `select * from role where id in (${roleid})`
        const res = await this.app.mysql.query(sql)
        return res
    }
}
module.exports = UserService