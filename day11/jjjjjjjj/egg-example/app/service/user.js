const Service = require('egg').Service

class UserService extends Service{
    // 根据id查询
    async look(id){
        let sql = `select * from user where id='${id}'`
        const res = await this.app.mysql.query(sql)
        return res
    }
    // 登录
    async login(name,pwd){
        let sql = `select * from user where name='${name}' and pwd='${pwd}'`
        const res = await this.app.mysql.query(sql)
        return res
    }
    // 查询用户身份  列表
    async getlist(id){
        let roleid = `select role_id from user_role where user_id=${id}`
        let powerid = `select power_id from role_power where role_id in (${roleid})`
        let sql = `select * from power where id in (${powerid})`
        const res = await this.app.mysql.query(sql)
        return res
    }
    // 查询用户身份权限
    async getuser(id){
        let roleid = `select role_id from user_role where user_id=${id}`
        let sql = `select * from role where id in (${roleid})`
        const res = await this.app.mysql.query(sql) 
        return res
    }
    // 增加
    async registry(name,pwd,gender,tel,email,states,times){
        let sql = `insert into user (name,pwd,gender,tel,email,states,times) values ('${name}','${pwd}','${gender}','${tel}','${email}','${states}','${times}')`
        const res = await this.app.mysql.query(sql)
        return res
    }
    // 删除
    async delete(id){
        let sql = `delete from user where id=${id}`
        const res = await this.app.mysql.query(sql)
        return res
    }
    // 修改
    async modify(id,name,pwd,gender,tel,email,states,times){
        let sql =  `update user set name='${name}',pwd='${pwd}',gender='${gender}',tel='${tel}',email='${email}',states='${states}',times='${times}' where id='${id}'`
        const res = await this.app.mysql.query(sql)
        return res
    }
    // 查用户列表
    async querys(){
        let sql =  `select * from user`
        const res = await this.app.mysql.query(sql)
        return res
    }
}
module.exports = UserService