import React,{Component} from 'react'
import { Input , Button } from 'antd';
import httpAxios from '../../untils/request'

class Dictionaries extends Component{
    state={
        id:'',
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
            姓名：<Input placeholder='name' style={{width:280}} value={name} name="name" onChange={(e)=>{this.handchange(e)}}/>
            <br />
            密码：<Input placeholder='pwd' style={{width:280}} value={pwd} name="pwd" onChange={(e)=>{this.handchange(e)}}/>
            <br />
            性别：<Input placeholder='gender' style={{width:280}} value={gender} name="gender" onChange={(e)=>{this.handchange(e)}}/>
            <br />
            电话：<Input placeholder='tel' style={{width:280}} value={tel} name="tel" onChange={(e)=>{this.handchange(e)}}/>
            <br />
            邮箱：<Input placeholder='email' style={{width:280}} value={email} name="email" onChange={(e)=>{this.handchange(e)}}/>
            <br />
            状态：<Input placeholder='states' style={{width:280}} value={states} name="states" onChange={(e)=>{this.handchange(e)}}/>
            <br />
            时间：<Input placeholder='times' style={{width:280}} value={times} name="times" onChange={(e)=>{this.handchange(e)}}/>
            <br />
            <br />
            <Button onClick={()=>{this.update()}}>提交</Button>
        </div>
    }
    componentWillMount(){

        this.setState({
            id:this.props.history.location.state.id,
            name:this.props.history.location.state.name,
            pwd:this.props.history.location.state.pwd,
            gender:this.props.history.location.state.gender,
            tel:this.props.history.location.state.tel,
            email:this.props.history.location.state.email,
            states:this.props.history.location.state.states,
            times:this.props.history.location.state.times
        })
    }
    handchange(e){
        let name = e.target.name
        let val = e.target.value
        this.setState({[name]:val})
    }
    async update(){
        let {id,name,pwd,gender,tel,email,states,times} = this.state

        let res = await httpAxios.post('/modify',{id,name,pwd,gender,tel,email,states,times})

        if(res.code == 1){
            this.props.history.push('/home/user')
        }
    }
}
export default Dictionaries