import Home from '../views/home/home'
import Login from '../views/login/login'

import Behavior from '../views/home/behavior'
import Development from '../views/home/development'
import Dictionaries from '../views/home/dictionaries'
import Meun from '../views/home/meun'
import Role from '../views/home/role'
import User from '../views/home/user'

const routes = [
    {path: '/home',name: 'home',component: Home,children:[
        {path: '/home/behavior',name: 'behavior',component: Behavior},
        {path: '/home/development',name: 'development',component: Development},
        {path: '/home/dictionaries',name: 'dictionaries',component: Dictionaries},
        {path: '/home/meun',name: 'meun',component: Meun},
        {path: '/home/role',name: 'role',component: Role},
        {path: '/home/user',name: 'user',component: User}
    ]},
    {path: '/login',name: 'login',component: Login},
    {path:'/',redirect:'/login'}
]
export default routes