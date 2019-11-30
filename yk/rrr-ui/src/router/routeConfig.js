import React from 'react'
import Loadable from 'react-loadable'

function Loading(){
    return <div>Loading...</div>
}

const Home = Loadable({
    loader:()=>import('../view/home.js'),
    loading:Loading
})
const Login = Loadable({
    loader:()=>import('../view/login.js'),
    loading:Loading
})

const routes=[
    {path:'/home',component:Home},
    {path:'/login',component:Login},
    {from:'/',to:'/login'}
]

export default routes