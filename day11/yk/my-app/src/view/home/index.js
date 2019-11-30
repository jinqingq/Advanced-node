import React,{Component} from 'react'
import { Layout, Menu } from 'antd';
import httpAxios from '../../utils/request'
import RouterView from '../../router/routerView'

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
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['2']}
        style={{ lineHeight: '64px' }}
      >
        <Menu.Item>{name}</Menu.Item>
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
            {
                list && list.map((item,index)=>
                <Menu.Item key={index}
                onClick={this.handleClick.bind(this,item.url)}
                >
              <span>{item.powername}</span>
            </Menu.Item>)
            }
        </Menu>
      </Sider>
      <Layout style={{ padding: '0 24px 24px' }}>
        <Content>

          <RouterView routes={this.props.child}/>
        
        </Content>
      </Layout>
    </Layout>
  </Layout>
        </div>
    }
    async componentDidMount(){
        let id = window.localStorage.userId
        let res = await httpAxios.get('/getuser?id='+id)
        console.log(res)
        let name = this.props.location.search.slice(1).split('=')[1]
        this.setState({name:name+res[0].rolename})

        let roles = await httpAxios.get('/getlist?id='+id)
        console.log(roles.list)
        this.setState({list:roles.list})
    }
    handleClick(url){
        this.props.history.push(url)
    }
}
export default Home