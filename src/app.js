import React from 'react'
import ReactDOM from 'react-dom'
import './styles/main.scss'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
// import 'bulma'


import Home from './components/common/Home'
import UserMap from './components/users/UserMap'
import UserIndex from './components/users/UserIndex'
import UserShow from './components/users/UserShow'
import UserProfile from './components/users/UserProfile'
import UserReview from './components/users/UserReview'
import UserEdit from './components/users/UserEdit'
// import UserMessages from './components/users/UserMessages'

import Navbar from './components/common/Navbar'
import FailedPage from './components/common/FailedPage'
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
        <SecureRoute path="/chefs/:id/edit" component={UserEdit} />
        <Route path="/chefs/:id/review" component={UserReview} />
        <SecureRoute path="/chefs/:id" component={UserShow} />
        <Route path="/map/:address" component={UserMap} />
        <SecureRoute path="/offers" component={Offers} />
        <Route path="/chefs" component={UserIndex} />
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <Route path="/profile" component={UserProfile} />
        {/* <Route path="/messages" component={UserMessages} /> */}
        <Route path="/*" component={FailedPage} />
      </Switch>
    </>
  </BrowserRouter>
)
ReactDOM.render(
  <App />,
  document.getElementById('root')
)