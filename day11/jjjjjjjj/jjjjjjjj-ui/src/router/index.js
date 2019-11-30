import React,{Component} from 'react'
import {BrowserRouter} from 'react-router-dom'
import RouteView from './routeView'
import routes from './routeConfig'
class Routers extends Component{
    render(){
        return <BrowserRouter>
            <RouteView routes={routes}/>
        </BrowserRouter>
    }
}
export default Routers