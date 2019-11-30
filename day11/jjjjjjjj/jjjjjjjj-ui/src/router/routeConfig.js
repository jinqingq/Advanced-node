import React from 'react'
import Loadable from 'react-loadable'

function Loading(){
    return <div>Loading...</div>
}
const Home = Loadable({
    loader:()=>import('../views/home/home.js'),
    loading:Loading
})
const Login = Loadable({
    loader:()=>import('../views/login/login.js'),
    loading:Loading
})
const Behavior = Loadable({
    loader:()=>import('../views/home/behavior.js'),
    loading:Loading
})
const Development = Loadable({
    loader:()=>import('../views/home/development.js'),
    loading:Loading
})
const Dictionaries = Loadable({
    loader:()=>import('../views/home/dictionaries.js'),
    loading:Loading
})
const Meun = Loadable({
    loader:()=>import('../views/home/meun.js'),
    loading:Loading
})
const Role = Loadable({
    loader:()=>import('../views/home/role.js'),
    loading:Loading
})
const User = Loadable({
    loader:()=>import('../views/home/user.js'),
    loading:Loading
})

const routes = [
    {path:'/home',component:Home,children:[
        {path:'/home/behavior',component:Behavior},
        {path:'/home/development',component:Development},
        {path:'/home/dictionaries',component:Dictionaries},
        {path:'/home/meun',component:Meun},
        {path:'/home/role',component:Role},
        {path:'/home/user',component:User},
        {from:'/home',to:'/home/user'}
    ]},
    {path:'/login',component:Login},
    {from:'/',to:'/login'}
]
export default routes