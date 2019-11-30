const Service = require('egg').Service

class UserService extends Service{
    async look(startIndex,limit){
        const res = await this.app.mysql.query(`select * from loginlist limit ${startIndex},${limit}`)
        return res
    }
    async adduser(names,pwd){
        //操作数据库
        const res = await this.app.mysql.query(`insert into loginlist (names,pwd) values ('${names}','${pwd}')`)
        return res
    }
    async del(id){
        const res = await this.app.mysql.query(`delete from loginlist where id=${id}`)
        return res
    }
    async update(id,names,pwd){
        const res = await this.app.mysql.query(`update loginlist set names='${names}',pwd='${pwd}' where id='${id}'`)
        return res
    }
}

module.exports = UserService