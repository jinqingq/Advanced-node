import React from 'react'
import {Switch,Route,Redirect} from 'react-router-dom'

function RouteView (props){
    let {routes} = props
    let routesAll = routes && routes.filter(item=>(!item.to))
    let redirectAll = routes && routes.filter(item=>(item.to))
    return <Switch>
        {
            routesAll && routesAll.map((item,index)=><Route 
            key={index} path={item.path} render={(props)=>{
                return <item.component {...props} routes={item.children}/>}}
            />)
        }
        {
            redirectAll && redirectAll.map((item,index)=><Redirect 
            key={index} from={item.from} to={item.to}/>)
        }
    </Switch>
}
export default RouteView