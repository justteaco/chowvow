import React from 'react'
import ReactDOM from 'react-dom'
import './styles/main.scss'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import 'bulma'

import Home from './components/common/Home'
import Navbar from './components/common/Navbar'
import UserShow from './components/users/UserShow'
import FailedPage from './components/common/FailedPage'
import UserMap from './components/users/UserMap'
import UserIndex from './components/users/UserIndex'

import Login from './components/auth/Login'
import Register from './components/auth/Register'
<<<<<<< HEAD
// import SecureRoute from '../lib/secureRoute'
=======
//import SecureRoute from '../lib/secureRoute'
<<<<<<< HEAD

=======
>>>>>>> b5da77e277b4c3031decfb9b215bca96923a23db
// import ErrorPage from './components/common/ErrorPage'
>>>>>>> development


const App = () => (
  <BrowserRouter>
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/users/:id" component={UserShow} />
        <Route path="/map" component={UserMap} />
<<<<<<< HEAD
        <Route path="/users" component={UserIndex} />
<<<<<<< HEAD
        <Route path="/login" component={Login} />
=======
        <Route path="/users/login" component={Login} />
<<<<<<< HEAD

=======
=======
        <Route path="/chefs" component={UserIndex} />
>>>>>>> development
>>>>>>> b5da77e277b4c3031decfb9b215bca96923a23db
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <Route path="/*" component={FailedPage} />
>>>>>>> development
      </Switch>
    </>
  </BrowserRouter>
)

ReactDOM.render(
  <App />,
  document.getElementById('root')
)