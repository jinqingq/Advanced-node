import React,{Component} from 'react'
import { Input , Button } from 'antd';
import httpAxios from '../../untils/request'
class Meun extends Component{
    state={
        name:'',
        pwd:'',
        gender:'',
        tel:'',
        emali:'',
        states:'',
        times:''
    }
    render(){
        let {name,pwd,gender,tel,email,states,times} = this.state
        return <div>
            姓名：<Input placeholder='name' style={{width:280}} value={name} name="name" onChange={this.handchange.bind(this)}/>
            <br />
            密码：<Input placeholder='pwd' style={{width:280}} value={pwd} name="pwd" onChange={this.handchange.bind(this)}/>
            <br />
            性别：<Input placeholder='gender' style={{width:280}} value={gender} name="gender" onChange={this.handchange.bind(this)}/>
            <br />
            电话：<Input placeholder='tel' style={{width:280}} value={tel} name="tel" onChange={this.handchange.bind(this)}/>
            <br />
            邮箱：<Input placeholder='email' style={{width:280}} value={email} name="email" onChange={this.handchange.bind(this)}/>
            <br />
            状态：<Input placeholder='states' style={{width:280}} value={states} name="states" onChange={this.handchange.bind(this)}/>
            <br />
            时间：<Input placeholder='times' style={{width:280}} value={times} name="times" onChange={this.handchange.bind(this)}/>
            <br />
            <br />
            <Button onClick={this.add.bind(this)}>提交</Button>
        </div>
    }
    handchange(e){
        let name = e.target.name
        let val = e.target.value
        this.setState({[name]:val})
    }
    async add(){
        let {name,pwd,gender,tel,email,states,times} = this.state

        let res = await httpAxios.post('/registry',{name,pwd,gender,tel,email,states,times})

        if(res.code == 1){
            this.props.history.push('/home/user')
        }
    }
}
export default Meun