const mysql = require('mysql')

const connect = mysql.createConnection({
    user:'root',
    password:'root',
    host:'localhost',
    port:'3306',
    database:'test'
})

connect.connect((err)=>{
    if(!err){
        console.log('数据库连接成功')
    }else{
        console.log('数据库连接失败')
    }
})

module.exports = connect