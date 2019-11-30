const Service = require('egg').Service

class UserService extends Service{
    async login(name,pwd){
        let sql = `select * from user where name='${name}' and pwd='${pwd}'`
        const res = await this.app.mysql.query(sql)
        return res
    }
    async look(id){
        let sql = `select * from user where id=${id}`
        const res = await this.app.mysql.query(sql)
        return res
    }
    async getuser(id){
        let roleid = `select role_id from user_role where user_id=${id}`
        let sql = `select * from role where id in (${roleid})`
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
    async add(name,pwd,gender,tel,email,states,times){
        let sql = `insert into user (name,pwd,gender,tel,email,states,times) values ('${name}','${pwd}','${gender}','${tel}','${email}','${states}','${times}')`
        const res = await this.app.mysql.query(sql)
        return res
    }
    async del(id){
        let sql = `delete from user where id=${id}`
        const res = await this.app.mysql.query(sql)
        return res
    }
    async update(id,name,pwd,gender,tel,email,states,times){
        let sql =  `update user set name='${name}',pwd='${pwd}',gender='${gender}',tel='${tel}',email='${email}',states='${states}',times='${times}' where id='${id}'`
        const res = await this.app.mysql.query(sql)
        return res
    }
    async list(){
        let sql = `select * from user`
        const res = await this.app.mysql.query(sql)
        return res
    }
}

module.exports = UserService