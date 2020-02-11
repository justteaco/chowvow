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
import Offers from './components/users/OfferIndex'
import SecureRoute from './components/common/SecureRoute'
const App = () => (
  <BrowserRouter>
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/chefs/:id/offers" component={Offers} />
        <SecureRoute path="/chefs/:id" component={UserShow} />
        <Route path="/map/:address" component={UserMap} />
        <Route path="/chefs" component={UserIndex} />
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <Route path="/*" component={FailedPage} />
      </Switch>
    </>
  </BrowserRouter>
)
ReactDOM.render(
  <App />,
  document.getElementById('root')
)