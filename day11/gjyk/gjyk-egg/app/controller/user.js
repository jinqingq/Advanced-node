'use strict';

const Controller = require('egg').Controller;
const jwt = require('jsonwebtoken')

class UserController extends Controller {
  // 登录
  async login() {
    let {ctx} = this

    let{name,pwd} = ctx.request.body

    const res = await ctx.service.user.see(name,pwd)
    if(res.length > 0){
      const userInfo={
        ...res[0]
      }

      const token = jwt.sign(userInfo,this.app.config.keys,{expiresIn:'10h'})

        ctx.body = {
            code:1,
            mes:'登录成功',
            token,
            status:200,
            userId:res[0].id
        }
    }else{
        ctx.body = {
            code:0,
            mes:'没有该用户，请注册',
            status:400
        }
    }
  }
  // 注册    添加
  async registry(){
    let {ctx} = this
    let {name,pwd} = ctx.request.body

    let user = await ctx.service.user.see(name,pwd)
    if(user.length > 0){
      ctx.body = {
        code:2,
        mes:'此用户已存在',
        status:400
      }
      return
    }
    let res = await ctx.service.user.registry(name,pwd)
    console.log(res)

    if(res.affectedRows == 1){
      ctx.body = {
        code:1,
        mes:'添加成功',
        status:200
      }
    }else{
      ctx.body = {
        code:0,
        mes:'添加失败',
        status:400
      }
    }

  }
  // 删除
  async delete(){
    let {ctx} = this
    let {id} = ctx.query

    let user = await ctx.service.user.look(id)
    console.log(user)
    if(user.length == 0){
      ctx.body = {
        code:2,
        mes:'没有该用户',
        status:400
      }
      return
    }

    const res = await ctx.service.user.delete(id)
    console.log(res)
    if(res.length > 0){
      ctx.body = {
        code:1,
        mes:'删除成功',
        status:200
      }
    }else{
      ctx.body = {
        code:0,
        mes:'删除失败',
        status:400
      }
    }
  }
  async getuser(){
    let {ctx} = this
    let {id} = ctx.query

    let user = await ctx.service.user.look(id)
    if(user.length == 0){
      ctx.body = {
        code:0,
        mes:'没有该用户'
      }
      return
    }

    const res = await ctx.service.user.getuser(id)
    ctx.body = res
  }
  async getlist(){
    let {ctx} = this
    let {id} = ctx.query

    let user = await ctx.service.user.look(id)
    if(user.length == 0){
      ctx.body = {
        code:0,
        mes:'没有该用户'
      }
      return
    }
    const res = await ctx.service.user.getlist(id)
    ctx.body = res
  }
}

module.exports = UserController;
