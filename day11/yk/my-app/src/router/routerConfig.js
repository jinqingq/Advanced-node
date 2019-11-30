import React from 'react'
import Loadable from 'react-loadable'

function Loading(){
    return <div>
        Loading...
    </div>
}

const Home = Loadable({
    loader:()=>import('../view/home/index.js'),
    loading:Loading
})
const Login = Loadable({
    loader:()=>import('../view/login/index.js'),
    loading:Loading
})
const Ydhys = Loadable({
    loader:()=>import('../view/home/ydhys.js'),
    loading:Loading
})
const Wdyd = Loadable({
    loader:()=>import('../view/home/wdyd.js'),
    loading:Loading
})
const Ydspg = Loadable({
    loader:()=>import('../view/home/ydspg.js'),
    loading:Loading
})
const Hysydglg = Loadable({
    loader:()=>import('../view/home/hysydglg.js'),
    loading:Loading
})
const Hysglg = Loadable({
    loader:()=>import('../view/home/hysglg.js'),
    loading:Loading
})
const Qyjzwglg = Loadable({
    loader:()=>import('../view/home/qyjzwglg.js'),
    loading:Loading
})
const Ygspx = Loadable({
    loader:()=>import('../view/home/ygspx.js'),
    loading:Loading
})
const Xtgl = Loadable({
    loader:()=>import('../view/home/xtgl.js'),
    loading:Loading
})

const routes=[
    {path:'/home',component:Home,children:[
        {path:'/home/ydhys',component:Ydhys},
        {path:'/home/wdyd',component:Wdyd},
        {path:'/home/ydspg',component:Ydspg},
        {path:'/home/hysydglg',component:Hysydglg},
        {path:'/home/hysglg',component:Hysglg},
        {path:'/home/qyjzwglg',component:Qyjzwglg},
        {path:'/home/ygspx',component:Ygspx},
        {path:'/home/xtgl',component:Xtgl}
    ]},
    {path:'/login',component:Login},
    {from:'/',to:'/login'}
]
export default routes