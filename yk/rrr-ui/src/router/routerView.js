import React from 'react'
import {Switch,Route,Redirect} from 'react-router-dom'

function RouteView(props){
    let {routes} = props
    let routeArr = routes && routes.filter( item => !item.to )
    let redirectArr = routes && routes.filter( item => item.to )

    return <Switch>
        {
            routeArr && routeArr.map((item,index)=><Route 
            key={index} path={item.path} render={(props)=>{
               return  <item.component {...props} routes={item.children}/>
            }}/>)
        }
        {
            redirectArr && redirectArr.map((item,index)=><Redirect 
            key={index} from={item.from} to={item.to} />)
        }
    </Switch>
}

export default RouteView