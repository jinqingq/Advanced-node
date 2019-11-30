import React,{Component} from 'react'
import { Form, Icon, Input, Button} from 'antd';
import httpAxios from '../../untils/request'

class Login extends Component{
    state={
        name:'',
        pwd:''
    }
    render(){
        let {name,pwd} = this.state
        return <div>
            <Form onSubmit={this.handleSubmit} className="login-form">
                <Form.Item>
                    <Input
                    prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    placeholder="Username"
                    style={{width:280}}
                    value={name} name='name' onChange={this.handleChange.bind(this)}
                    />
                </Form.Item>
                <Form.Item>
                    <Input
                    prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    placeholder="password"
                    style={{width:280}}
                    value={pwd} name='pwd' onChange={this.handleChange.bind(this)}
                    />
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit" className="login-form-button" 
                    onClick={this.handleSub.bind(this)}
                    >
                        Login
                    </Button>
                </Form.Item>
            </Form>
        </div>
    }
    handleChange(e){
        let name = e.target.name
        let val = e.target.value
        this.setState({[name]:val})
    }
    async handleSub(){
        let {name,pwd} = this.state
        console.log(name,pwd)
        const res = await httpAxios.post('/login',{name,pwd})
        console.log(res)
        if(res.code == 1){
            window.localStorage.token = res.token
            window.localStorage.setItem('obj',JSON.stringify({userId:res.userId},name))
            this.props.history.push('/home')
        }
    }
}
export default Login