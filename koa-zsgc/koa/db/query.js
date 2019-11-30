const connect = require('./index.js')

const query = (sql) =>{
    return new Promise((reslove,reject)=>{
        connect.query(sql,(err,data)=>{
            if(!err){
                reslove({code:1,data})
            }else{
                reject({code:0,err})
            }
        })
    })
}
module.exports = query