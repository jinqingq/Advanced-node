import React,{Component} from 'react'
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import httpAxios from '../../untils/request'
import RouteView from '../../router/routeView'

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

class Home extends Component{
    state={
        name:'',
        list:[]
    }
    render(){
        let {name,list} = this.state
        return <div>
            <Layout>
    <Header className="header">
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} style={{ lineHeight: '64px' }} >
        <Menu.Item key="3">nav 3</Menu.Item>
      </Menu>
    </Header>
    <Layout>
      <Sider width={200} style={{ background: '#fff' }}>
        <Menu
          mode="inline"
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          style={{ height: '100%', borderRight: 0 }}
        >
          <SubMenu key="sub1" title={<span>subnav 1</span>}>
          </SubMenu>
          
        </Menu>
      </Sider>
      <Layout style={{ padding: '0 24px 24px' }}>
        <Content style={{
            background: '#fff',
            padding: 24,
            margin: 0,
            minHeight: 280,
          }}
        >
            <RouteView />
        </Content>
      </Layout>
    </Layout>
  </Layout>,
        </div>
    }
    componentDidMount(){
        let obj = JSON.parse(window.localStorage.getItem('obj'))
        let res = await httpAxios.get('/getuser?id='+obj.userId)
        this.setState({name:obj.name+res[0].role})
        let roles = await httpAxios.get('/getlist?id='+obj.userId)
        this.setState({list:roles.list})
    }
}
export default Home