import React,{Component} from 'react'
import { Form, Input, Button } from 'antd'
import httpAxios from '../../utils/request'

class Login extends Component{
    state={
        name:'',
        pwd:''
    }
    render(){
        let {name,pwd} = this.state
        return <div>
            <Form>
                <Form.Item>
                    <Input
                        placeholder="Username"
                        value={name} name='name' onChange={this.handleChange.bind(this)}
                        />
                </Form.Item>
                <Form.Item>
                    <Input
                        placeholder="Password"
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
        let {name,pwd} =this.state
        console.log(name,pwd)
        let res = await httpAxios.post('/login',{name,pwd})
        if(res.code == 1){
            console.log(res)
            window.localStorage.token = res.token
            window.localStorage.userId = res.userid
            this.props.history.push('/home?name='+name)
        }
    }
}
export default Login