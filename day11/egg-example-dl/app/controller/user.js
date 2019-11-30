'use strict';

const Controller = require('egg').Controller;

const jwt = require('jsonwebtoken')

class UserController extends Controller {
    //注册
  async registry() {
    let {ctx} = this
    let {names,pwd} = ctx.request.body

    // 判断当前用户名是否存在
    let user = await ctx.service.user.getuser(names)
    if(user.length == 0){
        // 注册
        const res = await ctx.service.user.registry(names,pwd)

        if(res.affectedRows == 1){
            ctx.body = {
                code:1,
                mes:'注册成功'
            }
        }else{
            ctx.body = {
                code:0,
                mes:'注册失败'
            }
        }
    }else{
        ctx.body = {
            code:1,
            mes:'此用户已存在'
        }
    }
  }

   // 登录
  async login(){
      let {ctx} = this
      let {names,pwd} = ctx.request.body

      const user = await ctx.service.user.getuser(names)
      if(user.length == 0){
          ctx.body = {
              code:1,
              mes:'没有此用户，请先注册'
          }
          return;
      }
      const res = await ctx.service.user.login(names,pwd)
      
      if(res.length > 0){

        // 生成token
        const userInfo={
            ...res[0],
            signTime:new Date().getTime()
        }
        const token = jwt.sign(userInfo,this.app.config.keys,{expiresIn:120})


          ctx.body = {
              code:1,
              status:200,
              token:token,
              userId:res[0].id,
              mes:'登陆成功'
          }
      }else{
        ctx.body = {
            code:0,
            status:400,
            mes:'登陆失败'
        }
      }
  }
  async getlist(){
        let {ctx} = this

        const res = await ctx.service.user.getlist()

        if(res.length == 0 ){
            ctx.body = {
                code:0,
                mes:'没有用户信息'
            }
        }else{
            ctx.body = {
                code:1,
                mes:'成功',
                data:res
            }
        }
  }
  async delete(){
      let {ctx} = this
      let {id} = ctx.query

      const res = await ctx.service.user.delete(id)

      if(res.affectedRows == 1){
          ctx.body = {
              code:1,
              mes:'删除成功'
          }
      }else{
          ctx.body = {
              code:0,
              mes:'删除失败'
          }
      }
  }
}



module.exports = UserController;
