import React from 'react'
import Loadable from 'react-loadable'

function Loading(){
    return <div>
        Loading...
    </div>
}
const Home = Loadable({
    loader:()=>import('../views/home/index.js'),
    loading:Loading
})
const Login = Loadable({
    loader:()=>import('../views/login/index.js'),
    loading:Loading
})
const Hysglg = Loadable({
    loader:()=>import('../views/home/hysglg.js'),
    loading:Loading
})
const Hysydglg = Loadable({
    loader:()=>import('../views/home/hysydglg.js'),
    loading:Loading
})
const Qyjzwglg = Loadable({
    loader:()=>import('../views/home/qyjzwglg.js'),
    loading:Loading
})
const Wdyd = Loadable({
    loader:()=>import('../views/home/wdyd.js'),
    loading:Loading
})
const Xtgl = Loadable({
    loader:()=>import('../views/home/xtgl.js'),
    loading:Loading
})
const Ydhys = Loadable({
    loader:()=>import('../views/home/ydhys.js'),
    loading:Loading
})
const Ydspg = Loadable({
    loader:()=>import('../views/home/ydspg.js'),
    loading:Loading
})
const Ygspx = Loadable({
    loader:()=>import('../views/home/ygspx.js'),
    loading:Loading
})

const routes=[
    {path:'/home',component:Home,children:[
        {path:'/home/hysglg',component:Hysglg},
        {path:'/home/hysydglg',component:Hysydglg},
        {path:'/home/qyjzwglg',component:Qyjzwglg},
        {path:'/home/wdyd',component:Wdyd},
        {path:'/home/xtgl',component:Xtgl},
        {path:'/home/ydhys',component:Ydhys},
        {path:'/home/ydspg',component:Ydspg},
        {path:'/home/ygspx',component:Ygspx}
    ]},
    {path:'/login',component:Login},
    {from:'/',to:'/login'}
]
export default routes