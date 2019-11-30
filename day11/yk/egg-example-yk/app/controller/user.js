const Controller = require('egg').Controller

const jwt = require('jsonwebtoken')

class UserController extends Controller{
    // 注册接口
    async registry(){
        const {ctx} = this
        let {name,pwd} = ctx.request.body

        const user = await ctx.service.user.look(name,pwd)
        if(user.length > 0){
            ctx.body = {
                code:2,mes:'此用户已存在'
            }
            return;
        }
        const res = await ctx.service.user.registry(name,pwd)

        if(res.affectedRows == 1){
            ctx.body = {
                code:1,mes:'注册成功'
            }
        }else{
            ctx.body = {
                code:0,mes:'注册失败'
            }
        }
    }
    // 登录接口
    async login(){
        let {ctx} = this
        let {name,pwd} = ctx.request.body

        const res = await ctx.service.user.look(name,pwd)
        if(res.length == 0){
            ctx.body = {
                code:0,mes:'没有该用户'
            }
        }else{
            const userInfo={
                ...res[0],
                signTime:new Date().getTime()
            }

            const token = jwt.sign(userInfo,this.app.config.keys,{expiresIn:'10h'})

            ctx.body = {
                code:1,
                mes:'登陆成功',
                token,
                userid:res[0].id
            }
        }
    }

    async getlist(){
        let {ctx} = this
        console.log(ctx)
        let {id} = ctx.query
        console.log(id)

        if(!id){
            ctx.body = {
                code:2,mes:'缺少参数'
            }
            return
        }

        const res = await ctx.service.user.getlist(id)

        if(res.length > 0){
            ctx.body = {
                code:1,mes:'成功',list:res
            }
        }else{
            ctx.body = {
                code:0,mes:'没有查询到'
            }
        }
    }

    async getuser(){
        let {ctx} = this
        let {id} = ctx.query
        const res = await ctx.service.user.getuser(id)
        ctx.body=res
    }
}
module.exports = UserController