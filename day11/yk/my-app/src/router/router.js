import React,{Component} from 'react'
import {BrowserRouter} from 'react-router-dom'
import Routerview from './routerView'
import routes from './routerConfig'

class Routers extends Component{
    render(){
        return <BrowserRouter>
            <Routerview routes={routes}/>
        </BrowserRouter>
    }
}
export default Routers