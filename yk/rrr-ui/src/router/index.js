import React,{Component} from 'react'
import {BrowserRouter} from 'react-router-dom'
import routes from './routeConfig'
import RouteView from './routerView'

class Routers extends Component{
    render(){
        return <BrowserRouter>
        <RouteView routes={routes}/>
        </BrowserRouter>
    }
}

export default Routers