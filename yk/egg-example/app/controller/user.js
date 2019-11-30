'use strict';

const Controller = require('egg').Controller;
const jwt = require('jsonwebtoken')

class UserController extends Controller {
    // 注册
    async registry() {
        let {ctx} = this
        let {name,pwd,tel,bq,role,userid,address,bz,times,zd} = ctx.request.body
        // 判断不为空
        if(!name && !pwd && !tel && !bq && !role && !userid && !address && !bz && !times && !zd){
            ctx.body = {
                code:3,
                mes:'信息不完整'
            }
            return
        }
        // 判断用户名不重复
        let user = await ctx.service.user.look(name)
        if(user.length > 0){
            ctx.body = {
                code:2,
                mes:'此用户已存在'
            }
            return
        }
        // 注册     密码加密
        const res = await ctx.service.user.registry(name,ctx.helper.pass(pwd),tel,bq,role,userid,address,bz,times,zd)
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
    }
    // 登录
    async login(){
        let {ctx} = this
        let {name,pwd} = ctx.request.body

        if(!name && !pwd){
            ctx.body = {
                code:3,
                mes:'信息不完整'
            }
        }

        const res = await ctx.service.user.login(name,ctx.helper.pass(pwd))
        // ctx.body = res
        if(res.length > 0){
            // token 校验
            const token = jwt.sign({...res[0]},this.app.config.keys,{expiresIn:'10h'})
            ctx.body = {
                code:1,
                mes:'登录成功',
                token,
                userid:res[0].id
            }
        }else{
            ctx.body = {
                code:0,
                mes:'登录失败'
            }
        }
    }
    // 获取用户身份
    async getuser(){
        let {ctx} = this
        let {id} = ctx.query
        const res = await ctx.service.user.getuser(id)
        ctx.body=res
    }
    // 获取用户身份对应的权限
    async getlist(){
        let {ctx} = this
        let {id} = ctx.query
        const res = await ctx.service.user.getlist(id)
        ctx.body=res
    }
    // 删除
    async del(){
        let {ctx} = this
        let {id} = ctx.query

        // 根据id判断是否存在
        let user = await ctx.service.user.see(id)
        if(user.length == 0){
            ctx.body = {
                code:2,
                mes:'用户不存在'
            }
            return
        }

        const res = await ctx.service.user.del(id)
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
    // 列表
    async list(){
        let {ctx} = this
        const res = await ctx.service.user.list()
        ctx.body = res
    }
}

module.exports = UserController;
