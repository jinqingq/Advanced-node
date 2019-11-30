import React,{Component} from 'react'
import { Layout, Menu, Icon, Button } from 'antd';
import httpAxios from '../../untils/request'
import RouteView from '../../router/routeView'

const { Header, Sider, Content } = Layout;
class Home extends Component{
    state = {
        collapsed: false,
        list:[],
        name:''
      };
    
      toggle = () => {
        this.setState({
          collapsed: !this.state.collapsed,
        });
      };
    // trigger={null} collapsible collapsed={this.state.collapsed}
    render(){
        let {name,list} = this.state
        return <div>
            <Layout>
        <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['0']}>
            <Menu.Item key="1">
              <span>{name}</span>
            </Menu.Item>
            {
                list && list.map((item,index)=>{
                    return <Menu.Item key={index}
                    onClick={this.handClick.bind(this,item.url)}
                    >
                    <span>{item.name}</span>
                  </Menu.Item>
                })
            }
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }}>
            <Icon
              className="trigger"
              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggle}
              style={{paddingLeft:10}}
            />
            <Button onClick={this.out.bind(this)}>退出</Button>
          </Header>
          <Content
            style={{
              margin: '24px 16px',
              padding: 24,
              background: '#fff',
              minHeight: 380,
            }}
          >
            <RouteView routes={this.props.routes}/>
          </Content>
        </Layout>
      </Layout>
        </div>
    }
    async componentDidMount(){
        let obj = JSON.parse(window.localStorage.getItem('obj'))
        // 获取身份
        let res = await httpAxios.get('/getuser?id='+obj.userId)

        this.setState({name:obj.name + res[0].name})

        // 获取身份所对应的权限
        let roles = await httpAxios.get('/getlist?id='+obj.userId)

        this.setState({list:roles.list})
    }
    handClick(url){
        this.props.history.push(url)
    }
    out(){
        this.props.history.push('/login')
    }
}
export default Home