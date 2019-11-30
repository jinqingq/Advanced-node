const http = require('http')
const server = http.createServer()

// 引入socket.io 
const io = require('socket.io')(server)

// const userList = []

// 开启链接
io.on('connection',(user)=>{
    console.log('有人进来了')

    // userList.push(user)
    user.emit('msg','msg')

    user.on('send',(val)=>{
        console.log(val)
        // userList.forEach((item,index)=>{
        //     item.emit('input',val)
        // })
        user.broadcast.emit('input',val)
        user.emit('input',val)
    })
    user.on('disconnect',()=>{
        console.log('有人下线了')
    })
})

server.listen(9098)