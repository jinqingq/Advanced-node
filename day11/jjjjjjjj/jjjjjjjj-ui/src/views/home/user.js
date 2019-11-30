import React,{Component} from 'react'
import { Table , Button } from 'antd';
import httpAxios from '../../untils/request'

class User extends Component{
    state={
        list:[],
        columns : [
            {
              title: 'Name',
              dataIndex: 'name',
            },
            {
              title: 'gender',
              dataIndex: 'gender',
            },
            {
                title: 'tel',
                dataIndex: 'tel',
              },
              {
                title: 'email',
                dataIndex: 'email',
              },
              {
                title: 'states',
                dataIndex: 'states',
              },
              {
                title: 'times',
                dataIndex: 'times',
              },
              {
                title: 'operation',
                dataIndex: 'operation',
                render:(value,item,index)=>{
                    return <div>
                        <Button onClick={()=>this.props.history.push({pathname:'/home/dictionaries',state:item})}>编辑</Button>
                        <Button onClick={this.delete.bind(this,item.id)}>删除</Button>
                    </div>
                }
              },
          ],
    }
    render(){
        let {list,columns} = this.state
        return <div>
            <p>用户管理</p>
            <Button onClick={this.add.bind(this)}>添加</Button>
            <Table columns={columns} dataSource={list} />
        </div>
    }
    async componentDidMount(){
        let res = await httpAxios.get('/querys')
        this.setState({list:res.list})
    }
    async delete(id){

        let res = await httpAxios.get('/delete?id='+id)

        let {list} = this.state
        if(res.code == 1){ //删除成功,前端删除
            let ind = list.findIndex(item => item.id == id);
            list.splice(ind,1);
            this.setState({list})
        }
    }
    add(){
        this.props.history.push('/home/meun')
    }
}
export default User