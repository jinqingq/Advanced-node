import React,{Component} from 'react'
import {Layout,Menu,Table,Button,Drawer,Form,Col,Row,Input,Select,DatePicker,Icon} from 'antd'
import httpAxios from '../untils/request'

const {Header,Content} =Layout

class Home extends Component{
    state={
        names:'',
        list:[],
        data:[],
        columns:[
            {title:'用户昵称',dataIndex:'name'},
            {title:'手机号',dataIndex:'tel'},
            {title:'标签',dataIndex:'bq'},
            {title:'用户身份',dataIndex:'role'},
            {title:'身份证',dataIndex:'userid'},
            {title:'公司地址',dataIndex:'address'},
            {title:'跟进记录',dataIndex:'bz'},
            {title:'注册时间',dataIndex:'times'},
            {title:'注册终端',dataIndex:'zd'},
            {title:'操作',dataIndex:'',
            render:(value,item,index)=>{
                let {data} = this.state
                return <div>
                    <Button>查看</Button>
                    <Button onClick={async ()=>{
                        const del = await httpAxios.get('/del?id='+item.id)
                        let ind = data.findIndex(index=>index.id===item.id)
                        data.splice(ind,1)
                        this.setState({data})
                    }}>删除用户</Button>
                </div>
            }
        }
        ],
        visible:false,
        name:'',pwd:'',tel:'',role:'',userid:'',address:'',bz:'',times:'',zd:'',bq:''
    }
    render(){
        let {names,list,data,columns,name,pwd,tel,role,userid,address,bz,times,zd,bq} = this.state
        return <div>
            <Layout className="layout">
                <Header style={{marginBottom:20}}>
                    <Menu theme="dark" mode="horizontal" style={{lineHeight:'64px'}}>
                        <Menu.Item>
                            {names}
                        </Menu.Item>
                    </Menu>
                </Header>
                <Content style={{padding:'0 50px',marginBottom:20}}>
                    <div style={{background:'#fff',padding:24,minHeight:380}}>
                        <div>
                            <Button type="primary" onClick={this.showDrawer}>>
                                <Icon type="plus" /> 添加用户
                            </Button>
                            <Drawer title="Create a new account" width={720} onClose={this.onClose} visible={this.state.visible} bodyStyle={{ paddingBottom: 80 }} >
                                <Form layout="vertical" hideRequiredMark>
                                <Row gutter={16}>
                                <Col span={12}>
                                    <Form.Item label="用户昵称">
                                        <Input value={name} name="name" onChange={this.ipts.bind(this)}/>
                                    </Form.Item>
                                </Col>
                                <Col span={12}>
                                    <Form.Item label="密码">
                                        <Input style={{ width: '100%' }} value={pwd} name="pwd" onChange={this.ipts.bind(this)}/>,
                                    </Form.Item>
                                </Col>
                                <Col span={12}>
                                    <Form.Item label="手机号">
                                        <Input value={tel} name="tel" onChange={this.ipts.bind(this)}/>
                                    </Form.Item>
                                </Col>
                                <Col span={12}>
                                    <Form.Item label="标签">
                                        <Input value={bq} name="bq" onChange={this.ipts.bind(this)}/>
                                    </Form.Item>
                                </Col>
                                <Col span={12}>
                                    <Form.Item label="用户身份">
                                        <Input style={{ width: '100%' }} value={role} name="role" onChange={this.ipts.bind(this)}/>,
                                    </Form.Item>
                                </Col>
                                <Col span={12}>
                                    <Form.Item label="身份证号">
                                        <Input value={userid} name="userid" onChange={this.ipts.bind(this)}/>
                                    </Form.Item>
                                </Col>
                                <Col span={12}>
                                    <Form.Item label="公司地址">
                                        <Input style={{ width: '100%' }} value={address} name="address" onChange={this.ipts.bind(this)}/>,
                                    </Form.Item>
                                </Col>
                                <Col span={12}>
                                    <Form.Item label="跟进记录">
                                        <Input value={bz} name="bz" onChange={this.ipts.bind(this)}/>
                                    </Form.Item>
                                </Col>
                                <Col span={12}>
                                    <Form.Item label="注册时间">
                                        <Input style={{ width: '100%' }} value={times} name="times" onChange={this.ipts.bind(this)}/>,
                                    </Form.Item>
                                </Col>
                                <Col span={12}>
                                    <Form.Item label="注册终端">
                                        <Input value={zd} name="zd" onChange={this.ipts.bind(this)}/>
                                    </Form.Item>
                                </Col>
                            </Row>
          </Form>
          <div
            style={{
              position: 'absolute',
              right: 0,
              bottom: 0,
              width: '100%',
              borderTop: '1px solid #e9e9e9',
              padding: '10px 16px',
              background: '#fff',
              textAlign: 'right',
            }}
          >
            <Button onClick={this.onClose} style={{ marginRight: 8 }}>
              取消
            </Button>
            <Button onClick={this.onClose} type="primary" onClick={this.handleclick.bind(this)}>
              提交
            </Button>
          </div>
        </Drawer>
                        </div>
                        <Table columns={columns} dataSource={data}/>
                    </div>
                </Content>
            </Layout>
        </div>
    }
    async componentDidMount(){
        let obj = JSON.parse(window.localStorage.getItem('obj'))

        const user = await httpAxios.get('/getuser?id='+obj.userid)
        this.setState({names:obj.name+'----'+user[0].name})

        const lists = await httpAxios.get('/getlist?id='+obj.userid)
        this.setState({list:lists})
        console.log(this.state.list)

        const datas = await httpAxios.get('/list')
        this.setState({data:datas})
    }
    showDrawer=()=>{
        this.setState({
            visible:true
        })
    }
    onClose=()=>{
        this.setState({
            visible:false
        })
    }
    ipts(e){
        let name = e.target.name
        let val = e.target.value
        this.setState({[name]:val})
    }
    async handleclick(){
        let {name,pwd,tel,role,userid,address,bz,times,zd,bq} = this.state

        const add = await httpAxios.post('/registry',{name,pwd,tel,bq,role,userid,address,bz,times,zd})
        this.setState({
            visible:false
        })
        const datas = await httpAxios.get('/list')
        this.setState({data:datas})
    }
}

const App = Form.create()(Home);

export default App