import React from 'react'
import ReactDOM from 'react-dom'
import './styles/main.scss'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import 'bulma'

import Home from './components/common/Home'
import Navbar from './components/common/Navbar'
import UserShow from './components/users/UserShow'
import UserIndex from './components/users/UserIndex'


import Login from './components/auth/Login'
//import SecureRoute from '../lib/secureRoute'



const App = () => (
  <BrowserRouter>
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/users/:id" component={UserShow} />
        <Route path="/users" component={UserIndex} />
        <Route path="/users/login" component={Login} />

      </Switch>
    </>
  </BrowserRouter>
)

ReactDOM.render(
  <App />,
  document.getElementById('root')
)