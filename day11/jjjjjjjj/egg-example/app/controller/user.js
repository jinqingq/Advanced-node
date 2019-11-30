const Controller = require('egg').Controller
const jwt = require('jsonwebtoken')

class UserController extends Controller{
    // 登录
    async login(){
        let {ctx} = this
        let {name,pwd} = ctx.request.body
        //查询一下用户是否存在
        const res = await ctx.service.user.login(name,pwd)
        if(res.length == 0){
            ctx.body = {
                code:0,
                mes:'用户不存在',
                status:400
            }
        }else{
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
        }
    }
    // 查询用户身份
    async getuser(){
        let {ctx} = this
        let {id} = ctx.query
        // 查看用户是否存在
        let user = await ctx.service.user.look(id)
        if(user.length == 0){
            ctx.body = {
                code:2,
                mes:'用户不存在'
            }
            return
        }

        const res = await ctx.service.user.getuser(id)
        ctx.body = res
    }
    // 查询用户身份权限
    async getlist(){
        let {ctx} = this
        let {id} = ctx.query
        // 查看用户是否存在
        let user = await ctx.service.user.look(id)
        if(user.length == 0){
            ctx.body = {
                code:2,
                mes:'用户不存在'
            }
            return
        }

        const res = await ctx.service.user.getlist(id)
        if(res.length > 0){
            ctx.body = {
                code:1,
                mes:'成功',
                list:res
            };
    
        } else {
            ctx.body = {
                code:0,
                mes:'没有查询到'
            }
        }
    }
    // 增加
    async registry(){
        let {ctx} = this
        let {name,pwd,gender,tel,email,states,times} = ctx.request.body

        let user = await ctx.service.user.login(name,pwd)
        if(user.length > 0){
            ctx.body = {
                code:2,
                mes:'此用户已存在'
            }
            return
        }

        let res = await ctx.service.user.registry(name,pwd,gender,tel,email,states,times)
        if(res.affectedRows == 1){
            ctx.body = {
                code:1,
                mes:'添加成功'
            }
        }else{
            ctx.body = {
                code:1,
                mes:'添加失败'
            }
        }
    }
    // 删除
    async delete(){
        let {ctx} = this
        let {id} = ctx.query

        // 查看用户是否存在
        let user = await ctx.service.user.look(id)
        if(user.length == 0){
            ctx.body = {
                code:2,
                mes:'用户不存在'
            }
            return
        }

        const res = await ctx.service.user.delete(id)
        if(res.affectedRows == 1){
            ctx.body = {
                code:1,
                mes:'删除成功'
            }
        }else{
            ctx.body = {
                code:2,
                mes:'删除失败'
            }
        }
        
    }
    // 修改
    async modify(){
        let {ctx} = this
        let {id,name,pwd,gender,tel,email,states,times} = ctx.request.body

        // 查看用户是否存在
        let user = await ctx.service.user.look(id)
        if(user.length == 0){
            ctx.body = {
                code:2,
                mes:'用户不存在'
            }
            return
        }

        const res = await ctx.service.user.modify(id,name,pwd,gender,tel,email,states,times)
        if(res.affectedRows == 1){
            ctx.body = {
                code:1,
                mes:'修改成功'
            }
        }else{
            ctx.body = {
                code:0,
                mes:'修改失败'
            }
        }
    }
    // 查用户列表
    async querys(){
        let {ctx} = this
        const res = await ctx.service.user.querys()
        ctx.body = {
            code:1,
            status:200,
            list:res
        }
    }
}
module.exports = UserController