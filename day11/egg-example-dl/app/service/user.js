'use strict';

const Service = require('egg').Service;

class UserService extends Service {
  async registry(names,pwd) {
    const sql = `insert into loginlist (names,pwd) values ('${names}','${pwd}')`
    const res = await this.app.mysql.query(sql)
    return res
  }
  async getuser(names){
      let res = await this.app.mysql.query(`select * from loginlist where names='${names}'`)
      return res
  }
  async login(names,pwd){
      const sql = `select * from loginlist where names='${names}' and pwd='${pwd}'`
      const res = await this.app.mysql.query(sql)
      return res
  }
  async getlist(){
      const sql = 'select * from loginlist'
      let res = await this.app.mysql.query(sql)
      return res
  }
  async delete(id){
      const sql = `delete from loginlist where id=${id}`
      let res = await this.app.mysql.query(sql)
      return res
  }
}

module.exports = UserService;
