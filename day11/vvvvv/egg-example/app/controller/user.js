const Controller = require('egg').Controller
const jwt = require('jsonwebtoken')

class UserController extends Controller{
    async login(){
        let {ctx} = this
        let {name,pwd} = ctx.request.body
        const res = await ctx.service.user.login(name,pwd)
        if(res.length == 0){
            ctx.body = {
                code:0,
                mes:'此用户不存在',
                status:400
            }
        }else{
            const token = jwt.sign({...res[0]},this.app.config.keys,{expiresIn:'12h'})

            ctx.body = {
                code:1,
                mes:'登陆成功',
                token,
                status:200,
                userid:res[0].id
            }
        }
    }
    async getuser(){
        let {ctx} = this
        let {id} = ctx.query
        
        let user = await ctx.service.user.look(id)
        if(user.length == 0){
            ctx.body = {
                res:2,
                mes:'用户不存在'
            }
            return
        }

        let res = await ctx.service.user.getuser(id)
        ctx.body = res
    }
    async getlist(){
        let {ctx} = this
        let {id} = ctx.query

        let user = await ctx.service.user.look(id)
        if(user.length == 0){
            ctx.body = {
                res:2,
                mes:'用户不存在'
            }
            return
        }

        let res = await ctx.service.user.getlist(id)
        ctx.body = res
    }
    async add(){
        let {ctx} = this
        let {name,pwd,gender,tel,email,states,times} = ctx.request.body

        let user = await ctx.service.user.login(name,pwd)
        if(user.length > 0){
            ctx.body = {
                res:2,
                mes:'用户已存在'
            }
            return
        }

        const res = await ctx.service.user.add(name,ctx.helper.help(pwd),gender,tel,email,states,times)
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
    async del(){
        let {ctx} = this
        let {id} = ctx.query

        let user = await ctx.service.user.look(id)
        if(user.length == 0){
            ctx.body = {
                res:2,
                mes:'用户不存在'
            }
            return
        }

        let res = await ctx.service.user.del(id)
        if(res.affectedRows == 1){
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
    async update(){
        let {ctx} = this
        let {id,name,pwd,gender,tel,email,states,times} = ctx.request.body

        let user = await ctx.service.user.login(name,pwd)
        if(user.length == 0){
            ctx.body = {
                res:2,
                mes:'用户不存在'
            }
            return
        }

        const res = await ctx.service.user.update(id,name,pwd,gender,tel,email,states,times)
        if(res.affectedRows == 1){
            ctx.body = {
                code:1,
                mes:'修改成功'
            }
        }else{
            ctx.body = {
                code:1,
                mes:'修改失败'
            }
        }
    }
    async list(){
        let {ctx} = this
        const res = await ctx.service.user.list()
        ctx.body = res
    }
}

module.exports = UserController